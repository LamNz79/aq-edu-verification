// import MyButtonImport from '@/components/Buttons/ButtonImport/MyButtonImport';
// import useS_ButtonImport from '@/components/Buttons/ButtonImport/useS_ButtonImport';
// import { utils_excel_download, utils_excel_exportExcel } from '@/utils/excel';
// import ExcelJS from "exceljs";

// interface I {
//     coeSubjectMethodId?: number,
//     coeRubricsMethodId?: number,
//     content?: string
// }
// interface I2 {
//     id?: string,
//     name?: string
// }
// export default function F_nugmpmukta_Import() {
//     const store = useS_ButtonImport()

//     async function handleExportStructure() {
//         const workbook = new ExcelJS.Workbook();
//         await utils_excel_exportExcel<I>({
//             workbook: workbook,
//             sheetName: "Sinh viên",
//             data: [],
//             config: [
//                 {
//                     keyField: "coeSubjectMethodId",
//                     nameField: "Mã hình thứcCA",
//                     isRequired: true
//                 },
//                 {
//                     keyField: "coeRubricsMethodId",
//                     nameField: "Mã rubrics",
//                     isRequired: true
//                 },
//                 {
//                     keyField: "content",
//                     nameField: "Nội dung",
//                     isRequired: true
//                 },

//             ]
//         })


//         // Generate and download the Excel file
//         utils_excel_download({ name: "Sinh viên", workbook })
//     }
//     return (
//         <MyButtonImport onExportStructure={handleExportStructure} onSubmit={() => {

//         }} />
//     )
// }
