interface CoinOverviewProps {}
import fetcher from "@/lib/coinGecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import CandleStickChart from "./candleStickChart";
import { CoinDetailsData, OhlcData } from "@/type";
import { PERIOD_BUTTONS } from "@/lib/constants";

const CoinOverview = async ({}: CoinOverviewProps) => {
    try {
        const [coin, coinOHLCData] = await Promise.all([
            fetcher<CoinDetailsData>("coins/bitcoin", {
                dex_pair_format: "symbol",
            }),
            fetcher<OhlcData>("coins/bitcoin/ohlc", {
                vs_currency: "usd",
                days: 1,
                precision: "full",
            }),
        ]);

        return (
            <div className="p-2 md:p-4 bg-gray-800 rounded-2xl">
                <div className="flex gap-2 mb-4">
                    <div>
                        <Image alt={coin.name} src={coin.image.large} width={48} height={48} />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-gray-400 text-xs">
                            {coin.name} / {coin.symbol.toUpperCase()}
                        </p>
                        <h1 className="text-2xl">
                            {formatCurrency(coin.market_data.current_price.usd)}
                        </h1>
                    </div>
                </div>
                <CandleStickChart
                    height={360}
                    initialPeriod={PERIOD_BUTTONS[0].value}
                    initialOhlcData={coinOHLCData}
                />
            </div>
        );
    } catch (error) {
        console.error("Error fetching coin overview:", error);
        return <div>Failed to load coin overview</div>;
    }
};

export default CoinOverview;
