/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((acc, val) => acc + val, 0);


    while (left < right) {
        let mid = Math.floor((left + right) / 2); 
        
        if (isMinimum(weights, days, mid)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }

    return left;
};

const isMinimum = (arr, numDay, capacity) => {
    let initial_weight = 0;
    let daysNeeded = 1;

    for (let i = 0; i < arr.length; i++) {
        if (initial_weight + arr[i] > capacity) {
            initial_weight = 0;
            daysNeeded++;
        }
        initial_weight += arr[i];
    }

    return daysNeeded <= numDay;
}