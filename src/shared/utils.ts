export namespace Constants {
    export const DEBUG = true;
    export const NS_PER_SEC = 1e9;
}

export namespace PrimeUtils {

    export function isPrime (num: number): boolean {
        const limit = Math.sqrt(num);
        for (let i = 2; i <= limit; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    }
    export function findNthPrimeNumber (nthPrimeNumber: number): number {
        let primeNumbersSoFar = 0;
        let currentNumber = 1;
        do {
            if (isPrime(currentNumber)) {
                primeNumbersSoFar += 1;
            }
            if (primeNumbersSoFar === nthPrimeNumber) {
                return currentNumber;
            }
            currentNumber += 1;
        } while (primeNumbersSoFar < nthPrimeNumber);
    }
}
