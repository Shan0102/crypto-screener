import fetcher from "@/lib/coinGecko.actions";
import { formatCurrency } from "@/lib/utils";
import { CategorieDetailsData, DataTableColumn } from "@/type";
import { TrendingUp, TrendingDown } from "lucide-react";
import Image from "next/image";
import DataTable from "../DataTable";

interface CategoriesProps {}

const columnDataList: DataTableColumn<CategorieDetailsData>[] = [
    {
        cellName: "Category",
        cellData: (categoryData) => <span className="text-nowrap">{categoryData.name}</span>,
    },
    {
        cellName: "Top Gainers",
        cellData: (categoryData) => (
            <div className="flex gap-1 lg:gap-2">
                {categoryData.top_3_coins_id.map((topCoin, index) => (
                    <Image
                        key={topCoin}
                        alt={topCoin}
                        src={categoryData.top_3_coins[index]}
                        width={24}
                        height={24}
                    />
                ))}
            </div>
        ),
    },
    {
        cellName: "24h change",
        cellData: (categoryData) => (
            <div
                className={`flex gap-2 ${
                    categoryData.market_cap_change_24h > 0 ? "text-green-600" : "text-red-600"
                }`}
            >
                {categoryData.market_cap_change_24h > 0 ? <TrendingUp /> : <TrendingDown />}
                {categoryData.market_cap_change_24h.toFixed(2)}%
            </div>
        ),
    },
    {
        cellName: "Market Cap",
        cellData: (categoryData) => {
            return formatCurrency(categoryData.market_cap);
        },
    },
    {
        cellName: "24h Volume",
        cellData: (categoryData) => {
            return formatCurrency(categoryData.volume_24h);
        },
    },
];

const Categories = async ({}: CategoriesProps) => {
    const categories = await fetcher<CategorieDetailsData[]>("coins/categories");
    console.log(categories);

    return (
        <div>
            <DataTable
                columnDataList={columnDataList}
                rowDataList={categories.slice(0, 10)}
                tableTitle="Top Categories"
            />
        </div>
    );
};

export default Categories;
