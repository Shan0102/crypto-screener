import CoinTable from "@/components/CoinTable";
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
        is_24h_change_positive: true,
    },
    {
        name: "Bitcoin",
        image_url: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        "24h_change": "1,20%",
        price: "$89,000",
        is_24h_change_positive: true,
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
                    <CoinTable coinDataList={coinDataList} />
                </section>
                <section>
                    <p>Categories</p>
                </section>
            </div>
        </main>
    );
};

export default Page;
