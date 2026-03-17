import { CandleStick, OhlcData } from "@/type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, locale: string = "en-US", currency: string = "USD") {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
}

export function convertOhlcData(ohlcData: OhlcData): CandleStick[] {
    return ohlcData.map((data) => ({
        time: data[0],
        open: data[1],
        high: data[2],
        low: data[3],
        close: data[4],
    }));
}
