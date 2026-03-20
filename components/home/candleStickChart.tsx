"use client";

import fetcher from "@/lib/coinGecko.actions";
import { PERIOD_BUTTONS } from "@/lib/constants";
import { convertOhlcData } from "@/lib/utils";
import { OhlcData } from "@/type";
import {
    CandlestickSeries,
    ColorType,
    createChart,
    IChartApi,
    ISeriesApi,
} from "lightweight-charts";
import { useEffect, useRef, useState } from "react";

interface CandleStickChartProps {
    initialPeriod: string;
    height: number;
    initialOhlcData: OhlcData;
}

const CandleStickChart = ({ initialPeriod, height, initialOhlcData }: CandleStickChartProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [period, setPeriod] = useState(initialPeriod);
    const [ohclData, setOhclData] = useState(initialOhlcData);

    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const candleSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

    useEffect(() => {
        const main = async () => {
            const newOhlcData = await fetcher<OhlcData>("coins/bitcoin/ohlc", {
                vs_currency: "usd",
                days: period,
                precision: "full",
            });

            setOhclData(newOhlcData);
        };

        main();
    }, [period]);

    useEffect(() => {
        const container = chartContainerRef.current;
        if (!container) return;

        const chart = createChart(container, {
            layout: {
                background: {
                    type: ColorType.Solid,
                    color: "#1e2939",
                },
                textColor: "#ffffff",
            },
            height,
            width: container.clientWidth,
        });

        const series = chart.addSeries(CandlestickSeries);
        series.setData(convertOhlcData(ohclData));

        chartRef.current = chart;
        candleSeriesRef.current = series;
        chart.timeScale().fitContent();

        const observer = new ResizeObserver((entries) => {
            if (!entries.length) return;
            chart.applyOptions({ width: entries[0].contentRect.width });
        });
        observer.observe(container);

        return () => {
            observer.disconnect();
            chart.remove();
            chartRef.current = null;
            candleSeriesRef.current = null;
        };
    }, [height]);

    useEffect(() => {
        if (!candleSeriesRef.current) return;

        const convertedOhlcData = convertOhlcData(ohclData);
        candleSeriesRef.current.setData(convertedOhlcData);
    }, [ohclData]);

    return (
        <div>
            <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-400">Period:</span>
                <div className="flex gap-2">
                    {PERIOD_BUTTONS.map((periodButton) => (
                        <button
                            key={periodButton.name}
                            className={`rounded-lg p-2 cursor-pointer hover:bg-red-500/50 ${period === periodButton.value ? "bg-red-500!" : ""}`}
                            disabled={isLoading}
                            onClick={() => setPeriod(periodButton.value)}
                        >
                            {periodButton.label}
                        </button>
                    ))}
                </div>
            </div>
            <div ref={chartContainerRef} style={{ height }}></div>
        </div>
    );
};

export default CandleStickChart;
