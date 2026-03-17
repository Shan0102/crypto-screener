import { TrendingUp, TrendingDown } from "lucide-react";
import DataTable from "../DataTable";
import Image from "next/image";
import fetcher from "@/lib/coinGecko.actions";
import { formatCurrency } from "@/lib/utils";

const columnDataList: DataTableColumn<TrendingCoin>[] = [
    {
        cellName: "Name",
        cellData: (coinData) => (
            <div className="flex gap-2">
                <Image alt={coinData.item.name} src={coinData.item.small} width={24} height={24} />
                <span>{coinData.item.name}</span>
            </div>
        ),
    },
    {
        cellName: "24h change",
        cellData: (coinData) => (
            <div
                className={`flex gap-2 ${
                    coinData.item.data.price_change_percentage_24h.usd > 0
                        ? "text-green-600"
                        : "text-red-600"
                }`}
            >
                {coinData.item.data.price_change_percentage_24h.usd > 0 ? (
                    <TrendingUp />
                ) : (
                    <TrendingDown />
                )}
                {coinData.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </div>
        ),
    },
    {
        cellName: "Price",
        cellData: (coinData) => {
            return formatCurrency(coinData.item.data.price);
        },
    },
];

const TrendingCoins = async () => {
    try {
        const trendingCoins = await fetcher<{ coins: TrendingCoin[] }>(
            "search/trending",
            undefined,
            300,
            true,
        );

        return (
            <div>
                <DataTable columnDataList={columnDataList} rowDataList={trendingCoins.coins} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching trending coins:", error);
        return <div>Failed to load trending coins</div>;
    }
};

export default TrendingCoins;
