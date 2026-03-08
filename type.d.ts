interface CoinDetailsData {
    id: string;
    symbol: string;
    name: string;
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
