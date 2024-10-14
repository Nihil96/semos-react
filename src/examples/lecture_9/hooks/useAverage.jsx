import { useEffect, useState } from "react"

export function useAverage(numbers) {
  const [average, setAverage] = useState(0)

  useEffect(() => {
    if (numbers.length > 0) {
      const sum = numbers.reduce((acc, cur) => acc + cur, 0)
      const average = sum / numbers.length
      setAverage(average)
    }
  }, [numbers])

  return average
}
