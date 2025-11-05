import { useEffect, useState } from "react";

// This works but it's overkill for such simple calculation.
// A plain javascript function would be enough
export function useAverage(arrayOfNumbers){
    const [average, setAverage] = useState(0)

    useEffect(() => {
        if(arrayOfNumbers.length > 0){
            const sum = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0)
            const average = sum / arrayOfNumbers.length
            setAverage(average)
        }
    }, [arrayOfNumbers])

    return average
}