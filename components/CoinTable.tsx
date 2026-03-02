import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";

interface CoinTableProps {
    coinDataList: CoinData[];
}

const CoinTable = ({ coinDataList }: CoinTableProps) => {
    return (
        <div className="bg-gray-800/70 rounded-2xl text-left overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-600">
                    <tr className="space-x-2 border-b-1 border-gray-500">
                        <th className="p-2 md:p-4">Name</th>
                        <th className="p-2 md:p-4">24h Change</th>
                        <th className="p-2 md:p-4">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {coinDataList.map((coinData, i) => (
                        <tr
                            className={
                                i === coinDataList.length - 1 ? "" : "border-b-1 border-gray-500"
                            }
                        >
                            <td className="p-2 md:p-4 flex gap-2">
                                <Image
                                    alt={coinData.name}
                                    src={coinData.image_url}
                                    width={24}
                                    height={24}
                                />
                                <span>{coinData.name}</span>
                            </td>
                            <td className="p-2 md:p-4">
                                <div
                                    className={`flex gap-2 ${
                                        coinData.is_24h_change_positive
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {coinData.is_24h_change_positive ? (
                                        <TrendingUp />
                                    ) : (
                                        <TrendingDown />
                                    )}
                                    {coinData["24h_change"]}
                                </div>
                            </td>
                            <td className="p-2 md:p-4">{coinData.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CoinTable;
