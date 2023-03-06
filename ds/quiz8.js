const productList = (arr, val, result = [], ans = []) => {
    let total = result.reduce((acc, val) => acc + val, 0);

    if (total === val) {
        console.log("Answer: ", result);
        ans.push(result)
    }

    if (total > val) {
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let start = arr[i];
        let remaining = arr.slice(i + 1);
        
        productList(remaining, val, [...result, start], ans);
    }

    return ans;
}

function start(arr,val) {
    let set_arr = new Set(arr);
    let set = [...set_arr];
    set.sort((a,b) => a - b);

    let res = productList(set, val);

   if (res === undefined) {
    return "Here is the Answer";
   } else {
    return res;
   }
}

console.log(start([ 2,3,4,8,15,16,23,42 ], 64))