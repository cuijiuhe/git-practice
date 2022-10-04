let arr = [1, 2], target = 2
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  if (!end) return -1
  if (end === 1) return target === arr[0]? 0: 1
    let middle
    while (start < end) {
      middle = (end - start) / 2 | 0
      if (arr[middle] === target) {
        return middle
      } else if (target > arr[middle]) {
        start = middle + 1
      } else {
        end = middle - 1
      }
    }
}
let res = binarySearch(arr, target)
console.log(res)