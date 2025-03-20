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
let dailyHourMap = new Map(); // To store day-wise hours

// Calculate Daily Wages and Hours
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getWorkingHours(empCheck);
    let dailyWage = dailyHours * WAGE_PER_HOUR;
    
    totalEmpHrs += dailyHours;

    // Store day-wise wage and hours in Map
    dailyWageMap.set(totalWorkingDays, dailyWage);
    dailyHourMap.set(totalWorkingDays, dailyHours);
}

// (a) Calculate total wage and total hours worked
const totalWage = [...dailyWageMap.values()].reduce((total, wage) => total + wage, 0);
const totalHours = [...dailyHourMap.values()].reduce((total, hours) => total + hours, 0);

console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalHours}`);

// (b) Show full working days, part working days, and no working days
const fullWorkingDays = [...dailyHourMap.entries()]
    .filter(([day, hours]) => hours === FULL_TIME_HOURS)
    .map(([day]) => day);

const partWorkingDays = [...dailyHourMap.entries()]
    .filter(([day, hours]) => hours === PART_TIME_HOURS)
    .map(([day]) => day);

const noWorkingDays = [...dailyHourMap.entries()]
    .filter(([day, hours]) => hours === 0)
    .map(([day]) => day);

console.log(`Full Working Days: ${fullWorkingDays}`);
console.log(`Part Working Days: ${partWorkingDays}`);
console.log(`No Working Days: ${noWorkingDays}`);

