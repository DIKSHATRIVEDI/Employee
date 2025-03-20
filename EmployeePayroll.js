// Class to store employee payroll data
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        try {
            // Validate Employee ID and Salary (Non-zero positive numbers)
            if (!/^[1-9]\d*$/.test(id)) {
                throw new Error(`Invalid Employee ID: ${id}`);
            }
            if (!/^[1-9]\d*$/.test(salary)) {
                throw new Error(`Invalid Salary: ${salary}`);
            }

            // Validate Gender (M or F)
            if (!/^[MF]$/.test(gender)) {
                throw new Error(`Invalid Gender: ${gender}`);
            }

            // Validate Date (Not a future date)
            let inputDate = new Date(startDate);
            let currentDate = new Date();
            if (isNaN(inputDate.getTime()) || inputDate > currentDate) {
                throw new Error(`Invalid Date: ${startDate}`);
            }

            this.id = id;
            this.name = name;
            this.salary = salary;
            this.gender = gender;
            this.startDate = inputDate.toDateString(); // Format date to readable format
        } catch (error) {
            console.error(` Error: ${error.message}`);
        }
    }

    // Display employee details
    display() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate}`);
    }
}

//  Create Employee objects
const employee1 = new EmployeePayroll(101, "John Doe", 5000, "M", "2023-03-18");  // ✅ Valid
const employee2 = new EmployeePayroll(102, "Jane Smith", -6000, "F", "2023-02-20"); // ❌ Invalid Salary
const employee3 = new EmployeePayroll(103, "Alex Johnson", 4500, "X", "2023-01-10"); // ❌ Invalid Gender
const employee4 = new EmployeePayroll(104, "Sam Lee", 5000, "M", "2025-12-12"); // ❌ Future Date

//  Store in an array (only valid employees)
const employees = [employee1, employee2, employee3, employee4].filter(emp => emp.id);

//  Display all employee data
console.log("\n=== Employee Payroll Data ===");
employees.forEach(emp => emp.display());
