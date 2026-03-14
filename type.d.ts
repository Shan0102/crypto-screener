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

interface CoinData {
    name: string;
    image_url: string;
    is_24h_change_positive: boolean;
    "24h_change": string;
    price: string;
}

interface DataTableColumn<T> {
    cellName: string;
    cellData: (coin: T) => React.ReactNode;
}

type QueryParams = Record<string, string>;

interface CoinGeckoErrorBody {
    error: string;
}
