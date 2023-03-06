/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let obj = {};

    nums = nums.sort((a,b) => a - b);

    for (let start = 0; start < nums.length; start++) {
        let left = start + 1;
        let right = nums.length - 1;

        while (left < right) {
            if (nums[start] + nums[left] + nums[right] === 0) {
                obj[[nums[start], nums[left], nums[right]]] = [nums[start], nums[left], nums[right]];
                left++;
                right--;
            }
            else if (nums[start] + nums[left] + nums[right] > 0) {
                right--;
            }
            else {
                left++;
            }
        }
    }

    return Object.values(obj);
};

console.log(threeSum([-1,0,1,2,-1,-4]));