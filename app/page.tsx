import Categories from "@/components/home/Categories";
import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";
import { Suspense } from "react";

const Page = async () => {
    return (
        <main className="py-2 md:py-4 px-2 md:px-4 max-w-360 mx-auto">
            <div className="">
                <section className="w-full flex flex-col lg:flex-row gap-2 md:gap-4 mb-2 lg:mb-4">
                    <Suspense fallback={<div>Loading Coin Overview</div>}>
                        <div className="lg:w-2/3">
                            <CoinOverview />
                        </div>
                    </Suspense>
                    <Suspense fallback={<div>Loading Trending Coins</div>}>
                        <div className="lg:w-1/3">
                            <TrendingCoins />
                        </div>
                    </Suspense>
                </section>
                <section>
                    <Suspense fallback={<div>Loading Categories</div>}>
                        <Categories />
                    </Suspense>
                </section>
            </div>
        </main>
    );
};

export default Page;
