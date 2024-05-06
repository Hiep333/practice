var lengthOfLastWord = function (s) {
  s = s.trim()
  let length = 0
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      length++
      max = length
    } else if (length > max) {
      max = length
    } else {
      length = 0
    }
  }
  return max
}
