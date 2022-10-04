let s = "abcabcbb"
let maxLen = (s) => {
  let arr = [...s]
  let start = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[start] === arr[i + 1]) {
      return i + 1
    }
  }
}
let res = maxLen(s)
console.log(res)