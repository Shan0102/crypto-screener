interface CoinOverviewProps {}
import fetcher from "@/lib/coinGecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

const CoinOverview = async ({}: CoinOverviewProps) => {
    try {
        const coin = await fetcher<CoinDetailsData>(
            "coins/bitcoin",
            {
                dex_pair_format: "symbol",
            },
            60,
            true,
        );

        return (
            <div className="p-2 md:p-4 px-2 bg-gray-800/70 rounded-2xl">
                <div className="flex gap-2">
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
            </div>
        );
    } catch (error) {
        console.error("Error fetching coin overview:", error);
        return <div>Failed to load coin overview</div>;
    }
};

export default CoinOverview;
