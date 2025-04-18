const path = require('path');
const Employee = require('./models/Employee');
const { readXLSX, writeXLSX } = require('./utils/excelHelper');
const SecretSantaService = require('./services/SecretSantaService');


const employeeRows = readXLSX(path.join(__dirname, '../data/employees.xlsx'));
const employees = employeeRows.map(([name, email]) => new Employee(name, email));


const lastYearRows = readXLSX(path.join(__dirname, '../data/last_year_result.xlsx'));
const lastYearMap = new Map();
lastYearRows.forEach(([giverName, giverEmail, chilName, chileEmail]) => {
    const giver = new Employee(giverName, giverEmail);
    const child = new Employee(chilName, chileEmail);
    lastYearMap.set(giver.getIdentifier(), child);
});

const service = new SecretSantaService(employees, lastYearMap);
const assignments = service.getAssignments();


const output = [];

assignments.forEach((child, giver) => {
    output.push([giver.name, giver.email, child.name, child.email]);
});

writeXLSX(path.join(__dirname,'../output/result.xlsx'),output)


