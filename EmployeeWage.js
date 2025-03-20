const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let totalWage = 0;
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();

// Function to get working hours based on employee type
const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
};

//  a. Calc total Wage
for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getWorkingHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;

    totalWage += dailyWage;
    empDailyWageMap.set(day, dailyWage);
    empDailyHoursMap.set(day, empHours);
}

//  b. Show the Day along with Daily Wage using Map helper function
console.log("\n=== Daily Wage ===");
empDailyWageMap.forEach((wage, day) =>
    console.log(`Day ${day} => Wage: $${wage}`)
);

//  c. Show Days when Full time wage of 160
let fullTimeDays = [...empDailyWageMap.keys()].filter(day => empDailyWageMap.get(day) === (FULL_TIME_HOURS * WAGE_PER_HOUR));
console.log("\nFull Time Wage Days: " + fullTimeDays.join(", "));

//  d. Find the first occurrence when Full Time Wage was earned
let firstFullTimeDay = [...empDailyWageMap.keys()].find(day => empDailyWageMap.get(day) === (FULL_TIME_HOURS * WAGE_PER_HOUR));
console.log("\nFirst Full Time Wage Earned on Day: " + firstFullTimeDay);

//  e. Check if Every Element of Full Time Wage is truly holding Full time wage
let allFullTimeWages = [...empDailyWageMap.values()].every(wage => wage === (FULL_TIME_HOURS * WAGE_PER_HOUR));
console.log("\nAll Wages are Full Time Wages: " + allFullTimeWages);

//  f. Check if there is any Part Time Wage
let hasPartTimeWage = [...empDailyWageMap.values()].some(wage => wage === (PART_TIME_HOURS * WAGE_PER_HOUR));
console.log("\nHas Part Time Wage: " + hasPartTimeWage);

//  g. Find the number of days the Employee Worked
let totalDaysWorked = [...empDailyHoursMap.values()].filter(hours => hours > 0).length;
console.log("\nTotal Days Worked: " + totalDaysWorked);

