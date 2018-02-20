const startTime = process.hrtime();
import { PrimeUtils, Constants } from '../shared/utils';

const debug = false; // turn debug off to minimize console messages

const eulerWantsMeToFIndNumber = 10001;
console.log(`The ${eulerWantsMeToFIndNumber}th prime number is ${PrimeUtils.findNthPrimeNumber(eulerWantsMeToFIndNumber)}`);

// display run time
const runTime = process.hrtime(startTime);
console.log(`Program took ${runTime[0] + (runTime[1] / Constants.NS_PER_SEC)} seconds`);
