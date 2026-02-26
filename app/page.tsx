import Image from "next/image";

interface PageProps {}

const Page = ({}: PageProps) => {
    return (
        <main className="py-2 md:py-4 px-2 md:px-4 max-w-360 mx-auto">
            <div className="flex flex-col lg:flex-row gap-2 md:gap-4">
                <section className="space-y-2 md:space-y-4">
                    <div className="py-2 md:py-4 px-2 md:px-4 bg-gray-800/70 rounded-2xl">
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
                                <p className="text-gray-400 text-xs">Bitcoin/BTC</p>
                                <h1 className="text-2xl">$89,283.00</h1>
                            </div>
                        </div>
                    </div>
                    <p>Coin Overview</p>
                    <p>Trending Coins</p>
                </section>
                <section>
                    <p>Categories</p>
                </section>
            </div>
        </main>
    );
};

export default Page;
