// Class to store employee payroll data
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    // Display employee details
    display() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate}`);
    }
}

// Create Employee objects
const employee1 = new EmployeePayroll(101, "John Doe", 5000, "Male", "2025-03-18");
const employee2 = new EmployeePayroll(102, "Jane Smith", 6000, "Female", "2025-02-20");
const employee3 = new EmployeePayroll(103, "Alex Johnson", 4500, "Male", "2025-01-10");

// Store in an array
const employees = [employee1, employee2, employee3];

// Display all employee data
console.log("\n=== Employee Payroll Data ===");
employees.forEach(emp => emp.display());
