console.log("HIHIHI");

// selection sort

let arr = [4,2,7,1,3];

for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
    }

    let temp = arr[i];

    arr[i] = arr[min];

    arr[min] = temp;
};

console.log(arr);

{
// o(n2)

    const arr = [1,2,3,4,5,6];

    for (let i = 0; i < arr.length; i++) { // N
        for (let j = 0; j < arr.length; j++) { // log(n)
            console.log(i, j);
        }
    } 
}

// n algorithm

// log n algorithm