var twoSum = function(nums, target) {

    let mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        let differece = target - nums[i];
        
        if (mp.has(differece)) {
            return [i, mp.get(differece)];
        }

        mp.set(nums[i], i);
        console.log(mp)
    }
};
console.log(twoSum([3,2,4], 6))