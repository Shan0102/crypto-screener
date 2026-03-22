import { DataTableColumn } from "@/type";

interface TableProps<T> {
    columnDataList: DataTableColumn<T>[];
    rowDataList: T[];
    tableTitle: string;
}

const DataTable = <T,>({ columnDataList, rowDataList, tableTitle }: TableProps<T>) => {
    return (
        <div className="bg-gray-800/70 rounded-2xl text-left overflow-hidden">
            <table className="w-full">
                <caption className="text-xl font-bold p-2 md:p-4 border-b border-gray-500">
                    {tableTitle}
                </caption>
                <thead className="bg-gray-600">
                    <tr className="space-x-2 border-b border-gray-500">
                        {columnDataList.map((columnData, i) => (
                            <th key={i} className="p-2 md:p-4">
                                {columnData.cellName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rowDataList.map((data, i) => (
                        <tr
                            key={i}
                            className={
                                i === rowDataList.length - 1 ? "" : "border-b border-gray-500"
                            }
                        >
                            {columnDataList.map((columnData, i) => (
                                <td key={i} className="p-2 md:p-4">
                                    {columnData.cellData(data)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
