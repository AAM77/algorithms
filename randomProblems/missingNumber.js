// How do you find the sum of 100?
// time complexity: O(n)

const nums = [...Array(101).keys()];

function sumOfHundred(nums) {
  let sum = 0;
  nums.forEach( num => sum += num);

  return sum;
}

const nums = [...Array(101).keys()];
const nums = [1,2,3,4,5,6,7,8,9,10]

function sumOf100(nums) {
  if (nums.length > 0) {
    return sumOf100(nums.slice(1)) + nums[0]
  }
}
