// create an algorithm that takes a integer array as input and 
// returns the string "Ascending", "Descending" or "Neither"  depending on the order detected in the array.  (15pts)

function returnStr(arr) {
    let isAscending = false;

    // when the number of elements in the array is less than or equal to 1.
    if (arr.length <= 1) {
        return "Neither";
    }

    // decide whether the array could be ascending or not
    if (arr[arr.length - 1] === Math.max(...arr)) {
        isAscending = true;
    }

    if (arr[0] === Math.max(...arr)) {
        isAscending = false;
    }

    // ascending
    if (isAscending) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return "Neither";
            }
        }
        return "Ascending";
    }
    else {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                return "Neither";
            }
        }
        return "Descending";
    }
}

console.log(returnStr([3,2,4]));
