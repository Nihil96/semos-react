export default function calculateAverage(numbers) {
  if (numbers.length > 0) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0)
    return sum / numbers.length
  }
  return 0
}
