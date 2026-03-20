"use server";

import { CoinGeckoErrorBody, QueryParams } from "@/type";
import queryString from "query-string";

// const DEMO_URL = process.env.COINGECKO_DEMO_URL;
const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

async function fetcher<T>(endpoint: string, params?: QueryParams, revalidate = 60): Promise<T> {
    // if (!DEMO_URL) throw new Error("Could not get demo url");

    try {
        if (!BASE_URL) throw new Error("Could not get base url");
        if (!API_KEY) throw new Error("Could not get api key");
        const url = queryString.stringifyUrl(
            {
                url: `${BASE_URL}/${endpoint}`,
                query: params,
            },
            { skipEmptyString: true, skipNull: true },
        );

        const headers = new Headers({
            "Content-Type": "application/json",
            "x-cg-demo-api-key": API_KEY,
        });

        const request: Request = new Request(url, {
            headers,
            next: { revalidate },
        });
        const response = await fetch(request);

        if (!response.ok) {
            const errorBody: CoinGeckoErrorBody = await response.json().catch(() => {});
            console.log(request);
            console.log(response);
            console.log(errorBody);
            throw new Error(
                `API Error: ${response.status}: ${errorBody.status?.error_message || response.statusText}`,
            );
        }

        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

export default fetcher;
