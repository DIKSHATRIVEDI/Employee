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
    dailyWages.push({
        day: totalWorkingDays,
        hoursWorked: dailyHours,
        dailyWage: dailyHours * WAGE_PER_HOUR
    });
}

// a. Calculate total wage using reduce**
let totalWage = dailyWages.reduce((total, day) => total + day.dailyWage, 0);
console.log("Total Monthly Wage: $" + totalWage);

// b. Show the Day along with Daily Wage using map**
let dayWithWage = dailyWages.map(day => `Day ${day.day}: $${day.dailyWage}`);
console.log("Daily Wage Report:\n" + dayWithWage.join("\n"));

// c. Show days when full-time wage (160) was earned using filter**
let fullTimeDays = dailyWages.filter(day => day.dailyWage === FULL_TIME_HOURS * WAGE_PER_HOUR)
                             .map(day => `Day ${day.day}`);
console.log("Full Time Days: " + fullTimeDays.join(", "));

// d. Find the first occurrence of full-time wage using find**
let firstFullTimeDay = dailyWages.find(day => day.dailyWage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("First Full Time Wage Earned on Day: " + (firstFullTimeDay ? firstFullTimeDay.day : "None"));

// e. Check if every element of full-time wage is truly full-time wage using every**
let isAllFullTime = dailyWages.every(day => day.dailyWage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Every Day is Full Time Wage: " + isAllFullTime);

// f. Check if there is any part-time wage using some**
let hasPartTime = dailyWages.some(day => day.dailyWage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Any Part Time Wage Present: " + hasPartTime);

// g. Find the number of days the employee worked using length**
let numOfDaysWorked = dailyWages.filter(day => day.hoursWorked > 0).length;
console.log("Number of Days Worked: " + numOfDaysWorked);