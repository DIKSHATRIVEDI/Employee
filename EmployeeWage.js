// Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;

// Function to get working hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Variables
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWages = [];

while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getWorkingHours(empCheck);
    totalEmpHrs += dailyHours;

    // Store daily wage in array
    let dailyWage = dailyHours * WAGE_PER_HOUR;
    dailyWages.push(dailyWage);
}

let totalWage = totalEmpHrs * WAGE_PER_HOUR;

console.log("Daily Wages: " + dailyWages.join(", "));
console.log("Total Working Days: " + totalWorkingDays);
console.log("Total Working Hours: " + totalEmpHrs);
console.log("Total Monthly Wage: $" + totalWage);
