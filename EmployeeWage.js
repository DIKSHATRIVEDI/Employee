// Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

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
let dailyWageMap = new Map(); // To store day-wise wages

// Calculate Daily Wages
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getWorkingHours(empCheck);
    let dailyWage = dailyHours * WAGE_PER_HOUR;
    
    totalEmpHrs += dailyHours;

    // Store day-wise wage in Map
    dailyWageMap.set(totalWorkingDays, dailyWage);
}

// **Compute total wage using Map**
let totalWage = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);

console.log("Total Monthly Wage: $" + totalWage);

// **Display day-wise wage**
console.log("\nDay-wise Wage Report:");
for (let [day, wage] of dailyWageMap) {
    console.log(`Day ${day}: $${wage}`);
}
