import { Time } from "lightweight-charts";

interface CoinDetailsData {
    id: string;
    symbol: string;
    name: string;
    links: {
        homepage: string;
    };
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    market_data: {
        current_price: {
            usd: number;
        };
        market_cap_change_percentage_24h_in_currency: {
            usd: number;
        };
    };
}

interface CategorieDetailsData {
    id: string;
    name: string;
    market_cap: number;
    market_cap_change_24h: number;
    top_3_coins_id: [string, string, string];
    top_3_coins: [string, string, string]; // small images
    volume_24h: number;
}

interface TrendingCoin {
    item: {
        id: string;
        name: string;
        symbol: string;
        small: string;
        large: string;
        data: {
            price: number;
            price_change_percentage_24h: {
                usd: number;
            };
        };
    };
}

type OhlcData = [number, number, number, number, number][];
type CandleStick = {
    time: Time;
    open: number;
    high: number;
    low: number;
    close: number;
};

interface DataTableColumn<T> {
    cellName: string;
    cellData: (coin: T) => React.ReactNode;
}

type QueryParams = Record<string, string | number>;

interface CoinGeckoErrorBody {
    timestamp: string;
    error_code: number;
    status?: {
        error_message: string;
    };
}
