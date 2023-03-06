// Quick Sort

function pivot(arr, start = 0, end = arr.length - 1) {

    const swap_modern = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap_modern(arr, swapIdx, i)
            console.log(arr)
        }
    }
    swap_modern(arr, start, swapIdx)
    console.log(arr)
    return swapIdx;
}

console.log(pivot([4,8,2,1,5,7,6,3]));

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);

        // left
        quicksort(arr, left, pivotIndex - 1);
        // right
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quicksort([4,8,2,1,5,7,6,3]));