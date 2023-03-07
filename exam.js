const fs = require("fs");
const file = fs.readFileSync("./FirstNephiChapter8.txt", {encoding: 'utf-8'}).toLowerCase();
const withoutPunctuation = file.replace(/[^a-z]+/g, " ").trim();
const wordsInFile = withoutPunctuation.split(' ');
const wordMap = new Map();

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

// The array should be large enough to hold all of the word/count data, 
// but no bigger than 30% greater than the number of words in your list.
const MAX_LENGTH_HT = Math.floor(sortedByValues.length * .29);

class HashTable {
    // Initialize a “hashTable” array with null elements
    constructor() {
        this.hashTable = Array(MAX_LENGTH_HT).fill(null);;
    }

    // Calculate a hash value for the word.  
    // Your hash algorithm should target a numeric value between 0 and 281.  
    // This hash value will be the index into the "hashTable" array.
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.hashTable.length;
    }

    // insert key-value pair into hashtable
    insert(key, value) {
        // Check to see if the hash value index in the array already has a value.
        const index = this.hash(key);
        // If the array element is empty, store the word and count as a two-element array into the hashTable element.
        // If the array element indexed by the calculated hash value already has a value stored in it (collision), 
        // begin a linear search to find the next empty (null) element.  
        // Once an empty element is found, store the word/count there.
        if (this.hashTable[index] === null) {
            this.hashTable[index] = [];
            this.hashTable[index].push([key, value]);
        }
        else {
            for (let i = index + 1; i < this.hashTable.length; i++) {
                if (this.hashTable[index] == null) {
                    this.hashTable[index] = [];
                    this.hashTable[index].push([key, value]);
                    break;
                }
            }
        }
    }

    // retrieve value by key from hashtable
    get(key) {
        const index = this.hash(key);
        if (this.hashTable[index]) {
            for (let i = 0; i < this.hashTable[index].length; i++) {
                if (this.hashTable[index][i][0] === key) {
                    return this.hashTable[index][i][1];
                }
            }
        }
        return undefined;
    }

}

const ht = new HashTable();

sortedByValues.forEach((list) => {
    ht.insert(list[0], list[1]);
})

console.log(ht.get("it"));