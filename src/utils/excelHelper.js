const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');


function readXLSX(filepath) {
    const workbook = xlsx.readFile(filepath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(worksheet, { header: 1 }).slice(1);
}
function writeXLSX(filepath, dataRows) {
    const headers = ['Employee_Name', 'Employee_EmailID', 'Secret_Child_Name', 'Secret_Child_EmailID'];
    const worksheet = xlsx.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Assignments');
    xlsx.writeFile(workbook, filepath);
}

module.exports = {readXLSX,writeXLSX}
