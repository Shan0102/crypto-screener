"use server";

import { CoinGeckoErrorBody, QueryParams } from "@/type";
import queryString from "query-string";

const BASE_URL = process.env.COINGECKO_BASE_URL;
const DEMO_URL = process.env.COINGECKO_DEMO_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

async function fetcher<T>(
    endpoint: string,
    params?: QueryParams,
    revalidate = 60,
    demo: boolean = false,
): Promise<T> {
    if (!BASE_URL) throw new Error("Could not get base url");
    if (!DEMO_URL) throw new Error("Could not get demo url");
    if (!API_KEY) throw new Error("Could not get api key");

    try {
        const baseURL = demo ? DEMO_URL : BASE_URL;

        const url = queryString.stringifyUrl(
            {
                url: `${baseURL}/${endpoint}`,
                query: params,
            },
            { skipEmptyString: true, skipNull: true },
        );

        const headers = new Headers({
            "Content-Type": "application/json",
        });

        if (demo) headers.append("x-cg-demo-api-key", API_KEY);
        else headers.append("x-cg-pro-api-key", API_KEY);

        const request: Request = new Request(url, {
            headers,
            next: { revalidate },
        });
        console.log(request);

        const response = await fetch(request);

        console.log(response);

        if (!response.ok) {
            const errorBody: CoinGeckoErrorBody = await response.json().catch(() => {});
            throw new Error(
                `API Error: ${response.status}: ${errorBody.error || response.statusText}`,
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
