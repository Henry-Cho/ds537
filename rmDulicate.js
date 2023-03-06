/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
            console.log(obj);
        }
    }

    let ans = [...Object.keys(obj)];
    console.log(ans)

    for (let i = 0; i < ans.length; i++) {
        nums[i] = parseInt(ans[i]);
    }

    return nums;
};

console.log(removeDuplicates([1,1,2]))