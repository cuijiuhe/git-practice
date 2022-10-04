/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。
 */
nums = [2,7,11,15], target = 9
let twoSum = function(nums, target) {
  let obj = {}
  
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i]
    if (nums[i] in obj) {
      console.log(i, obj[nums[i]])
    } else {
      obj[num] = i
    }
  }
  console.log(obj)
}

// var twoSum = function(nums, target) {
//   let obj = {}
//   for(let i = 0; i < nums.length; i++) {
//       let item = nums[i]
//       let num = target - item
//       if (item in obj) {
//           return [obj[item], i]
//       } else {
//           obj[num] = i
//       }
//   }
// }
twoSum(nums, target)


function binarySearch(arr, target){

  let start = 0;
  let end = arr.length - 1;
  if(!end) return -1
  if(end == 1){
      return arr[0] === target ? 0 : -1 
  }
  let middle;
  while(start <= end){
      middle = (start + end) / 2 | 0; // 向下取整
      if(arr[middle] === target){
          return middle
      }else if(target > arr[middle]){
          start = middle + 1
      }else{
          end = middle - 1
      }
  }
  return -1
}

let res = binarySearch(nums, 7)
console.log(res)

let i = 0;
while (i < 4) {
  console.log(i)
  i++
}



