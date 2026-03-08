import DataTable from "@/components/DataTable";
import { TrendingUp, TrendingDown } from "lucide-react";
import Image from "next/image";

interface PageProps {}

const coinDataList: CoinData[] = [
    {
        name: "Bitcoin",
        image_url: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        "24h_change": "1,20%",
        price: "$89,000",
        is_24h_change_positive: true,
    },
    {
        name: "Bitcoin",
        image_url: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        "24h_change": "1,20%",
        price: "$89,000",
        is_24h_change_positive: false,
    },
];

const dataTableColumn: DataTableColumn<CoinData>[] = [
    {
        cellName: "Name",
        cellData: (coinData) => (
            <div className="flex gap-2">
                <Image alt={coinData.name} src={coinData.image_url} width={24} height={24} />
                <span>{coinData.name}</span>
            </div>
        ),
    },
    {
        cellName: "24h change",
        cellData: (coinData) => (
            <div
                className={`flex gap-2 ${
                    coinData.is_24h_change_positive ? "text-green-600" : "text-red-600"
                }`}
            >
                {coinData.is_24h_change_positive ? <TrendingUp /> : <TrendingDown />}
                {coinData["24h_change"]}
            </div>
        ),
    },
    {
        cellName: "Price",
        cellData: (coinData) => coinData.price,
    },
];

const Page = ({}: PageProps) => {
    return (
        <main className="py-2 md:py-4 px-2 md:px-4 max-w-360 mx-auto">
            <div className="flex flex-col lg:flex-row gap-2 md:gap-4">
                <section className="space-y-2 md:space-y-4">
                    <div className="p-2 md:p-4 px-2 bg-gray-800/70 rounded-2xl">
                        <div className="flex gap-2">
                            <div>
                                <Image
                                    alt="bitcoin"
                                    src={
                                        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                                    }
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="text-gray-400 text-xs">Bitcoin / BTC</p>
                                <h1 className="text-2xl">$89,283.00</h1>
                            </div>
                        </div>
                    </div>
                    <DataTable columnDataList={dataTableColumn} rowDataList={coinDataList} />
                </section>
                <section>
                    <p>Categories</p>
                </section>
            </div>
        </main>
    );
};

export default Page;
