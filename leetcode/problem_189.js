var rotate = function (nums, k) {
  // Tạo mảng mới chứa hai phần tử cuối cùng
  const lastTwoElements = nums.slice(-k)

  // Tạo mảng khác chứa phần còn lại của mảng gốc
  const remainingElements = nums.slice(0, -k)

  // Kết hợp hai mảng đã đảo ngược lại với nhau
  const rotatedArray = lastTwoElements.concat(remainingElements)

  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotatedArray[i];
  }
  return nums
}

const originalArray = [1, 2, 3, 4, 5, 6, 7]
const k = 3
const rotatedResult = rotate(originalArray, k)

console.log(rotatedResult) // [6, 7, 1, 2, 3, 4]
