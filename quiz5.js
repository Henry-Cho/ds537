// The time complexity of the code below is O(n^2 [quadratic time]). 
// There is one for loop which iterates based on the length of the wordsInFile & does computation of insertinng a key-value pair (O(n))
// After the O(n) computation, there is a sort operation which is insertion sort.
// As the input array is not ordered, the time complexity of this operation is O(n2).
// Because there is an outer loop in the insertionSort function (the length of arr is n), 
// and inside the loop, there is another while loop, that handles swaping based on the number of j (n)
// In a conclusion, this code's Time Complexity is O(n^2).

const fs = require("fs");
const file = fs.readFileSync("./FirstNephiChapter8.txt", {encoding: 'utf-8'}).toLowerCase();
const wordMap = new Map();
const withoutPunctuation = file.replace(/[^a-z]+/g, " ").trim();
const wordsInFile = withoutPunctuation.split(' ');

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const currentValue = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j][1] < currentValue[1]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentValue;
    }

    return arr;
}

for (let word of wordsInFile) {
wordMap.set(word, (wordMap.get(word) || 0) + 1);
}

const sortedByValues = insertionSort([...wordMap.entries()]);

console.log(sortedByValues.length);
console.log(wordMap.size)

function test(inData) {
    for (let i = 0; i < inData.length - 1; i++) {
        let lni = i;

        for (let j = i + 1; j < inData.length; j++) {
            if (inData[j] < inData[i]) {
                lni = j;
            }
        }

        if (lni !== i) {
            [inData[i], inData[lni]] = [inData[lni], inData[i]];
        }
    }
    return inData;
}