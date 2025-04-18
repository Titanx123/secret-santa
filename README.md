# Secret Santa Assignment

This project automates the process of assigning Secret Santa gifts among employees based on a provided list of employees and previous year's Secret Santa assignments. The program ensures that:

- An employee doesn't choose themselves.
- An employee doesn't get assigned the same Secret Santa as the previous year.
- Each employee has exactly one Secret Santa.

## Features
- **Input:** Reads employee information and last year's Secret Santa assignments from Excel (`.xlsx`) files.
- **Output:** Generates new Secret Santa assignments and outputs them to an Excel file.

## Requirements
- Node.js (v14 or above)
- `xlsx` package to read and write Excel files
- `fs` and `path` modules

## Setup

### 1. Clone the Repository
Clone the repo to your local machine:

bash
git clone https://github.com/your-username/secret-santa-assignment.git



2. Install Dependencies
Navigate into the project folder and install the required dependencies:

cd secret-santa-assignment
npm install
npm install xlsx

3.Major Files.
  employees.xlsx : This file should contain employee data in two columns: Employee_Name and Employee_EmailID.
  last_year_result : This file should contain last year's Secret Santa assignments in four columns: Employee_Name, Employee_EmailID, Secret_Child_Name, Secret_Child_EmailID.

 4.Run the Program.

 node src/index.js

 5.Folder Structure.

   secret-santa/
├── data/
│   ├── employees.xlsx
│   └── last_year_result.xlsx
├── output/
│   └── result.xlsx
├── src/
│   ├── index.js
│   ├── models/
│   │   └── Employee.js
│   ├── services/
│   │   └── SecretSantaService.js
│   └── utils/
│       └── excelHelper.js
├── package.json
├── README.md.

6.Modularity and Extensibility
The solution follows Object-Oriented Programming (OOP) principles to ensure modularity and extensibility. The program is divided into several modules for clarity and easy maintenance:

Employee Model: Represents an employee in the Secret Santa system.

SecretSantaService: Handles the logic of assigning Secret Santa gifts.

Excel Helper: Manages reading and writing data to/from Excel files.

This modular design ensures that each part of the system can be updated or extended independently without breaking the rest of the application.



