import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";
import { Suspense } from "react";

const Page = async () => {
    return (
        <main className="py-2 md:py-4 px-2 md:px-4 max-w-360 mx-auto">
            <div className="flex flex-col lg:flex-row gap-2 md:gap-4">
                <section className="space-y-2 md:space-y-4">
                    <Suspense fallback={<div>Loading Coin Overview</div>}>
                        <CoinOverview />
                    </Suspense>
                    <Suspense fallback={<div>Loading Trending Coins</div>}>
                        <TrendingCoins />
                    </Suspense>
                </section>
                <section>
                    <p>Categories</p>
                </section>
            </div>
        </main>
    );
};

export default Page;
