const startTime = process.hrtime();
import { Constants } from '../shared/utils';

const debug = false; // turn debug off to minimize console messages

function findDate() {
    let dayNumber = 1;
    let numOfSundays = 0;
    for (let year = 1900; year <= 2018; year += 1) {
        for (let month = 1; month <= 12; month += 1) {
            switch (month) {
                case 1:
                    if (year > 1900) {
                        dayNumber += 31;
                    }
                    break;
                case 3:
                    dayNumber += 28;
                    if (year % 4 === 0) {
                        if (year % 100 !== 0 || year % 400 === 0) {
                            dayNumber += 1;
                        }
                    }
                    break;
                case 5:
                case 7:
                case 10:
                case 12:
                    dayNumber += 30;
                    break;
                default:
                    dayNumber += 31;
                    break;
            }
            const dayOfWeek = dayNumber % 7;
            console.log(`${year} - ${month} - ${dayNumber} ${dayOfWeek}`);
            if (dayOfWeek === 0 && year >= 1901 && year <= 2000) {
                numOfSundays += 1;
            }
        }
    }
    console.log(`There were ${numOfSundays} Sundays starting the month between 1901 and 2000!`);
}
findDate();

// display run time
const runTime = process.hrtime(startTime);
console.log(`Program took ${runTime[0] + (runTime[1] / Constants.NS_PER_SEC)} seconds`);
