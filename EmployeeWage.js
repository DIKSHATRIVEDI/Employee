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
let empDailyData = []; // Array to store objects

// Calculate Daily Wages and Hours
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getWorkingHours(empCheck);
    let dailyWage = dailyHours * WAGE_PER_HOUR;
    
    totalEmpHrs += dailyHours;

    // Store in an object
    let dailyData = {
        day: totalWorkingDays,
        hoursWorked: dailyHours,
        wageEarned: dailyWage
    };

    empDailyData.push(dailyData); // Add to the array
}

//  (a) Calculate Total Wage and Total Hours using Arrow Function
const totalWage = empDailyData.reduce((total, data) => total + data.wageEarned, 0);
const totalHours = empDailyData.reduce((total, data) => total + data.hoursWorked, 0);

console.log(`\nTotal Hours Worked: ${totalHours}`);
console.log(`Total Wage Earned: $${totalWage}`);

//  (b) Show Full Working Days using forEach
console.log("\n=== Full Working Days ===");
empDailyData.forEach(data => {
    if (data.hoursWorked === FULL_TIME_HOURS) {
        console.log(`Day: ${data.day}, Hours Worked: ${data.hoursWorked}, Wage Earned: $${data.wageEarned}`);
    }
});

//  (c) Show Part Working Days using Map and reduce to String Array
const partWorkingDays = empDailyData
    .map(data => data.hoursWorked === PART_TIME_HOURS ? `Day: ${data.day}` : null)
    .filter(day => day !== null);

console.log(`\nPart Working Days: [${partWorkingDays.join(", ")}]`);

//  (d) No Working Days using Map function
const noWorkingDays = empDailyData
    .map(data => data.hoursWorked === 0 ? `Day: ${data.day}` : null)
    .filter(day => day !== null);

console.log(`\nNo Working Days: [${noWorkingDays.join(", ")}]`);