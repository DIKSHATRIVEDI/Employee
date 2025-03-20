// Class to store employee payroll data
class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Display employee details
    display() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`);
    }
}

// Create Employee objects
const employee1 = new EmployeePayroll(101, "John Doe", 5000);
const employee2 = new EmployeePayroll(102, "Jane Smith", 6000);
const employee3 = new EmployeePayroll(103, "Alex Johnson", 4500);

// Store in an array
const employees = [employee1, employee2, employee3];

// Display all employee data
console.log("\n=== Employee Payroll Data ===");
employees.forEach(emp => emp.display());
