var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => a - b)
  let sum = 0
  let turn = 0
  for (let i = happiness.length - 1; i >= 0; i--) {
    if (turn < k) {
      sum += Math.max(happiness[i] - turn, 0)
      turn++
    }
  }
  return sum
}

console.log(maximumHappinessSum([1, 2, 3], 2))
