export function calculateAverage(arrayOfNumbers){
    if(arrayOfNumbers.length > 0){
            const sum = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0)
            return sum / arrayOfNumbers.length
    }
    return 0
}