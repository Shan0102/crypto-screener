"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="border-b">
            <div className="py-2 md:py-4 px-2 md:px-4 max-w-360 mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image src="/logo.svg" alt="cryptoPulse logo" width={36} height={36} />
                    </Link>

                    <nav className="flex items-center gap-2 md:gap-4 font-mediu">
                        <Link
                            href={"/"}
                            className={`max-sm:hidden ${pathname === "/" ? "text-white" : "text-gray-400"}`}
                        >
                            Home
                        </Link>
                        <Link
                            href={"/coins"}
                            className={`${pathname === "/coins" ? "text-white" : "text-gray-400"}`}
                        >
                            All Coins
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
