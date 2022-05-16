import { Button } from "components";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx"

interface API {
    apiData: any
    fileName: any
}

export const ExportToExcel = ({ apiData, fileName }: API) => {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = ({ apiData, fileName }: API) => {
        const ws = XLSX.utils.json_to_sheet(apiData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <Button onClick={() => exportToCSV({ apiData, fileName })}> Export to Excel </Button>
    );
};