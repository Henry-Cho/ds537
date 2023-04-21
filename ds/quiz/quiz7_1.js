// 
let step = 0;

function reverse(str) {
    step++
    console.log(`Step: ${step}`)
    if (str.length === 1) {
        return str[0];
    }

    str = [...str];
    return reverse(str.slice(1).join("")) + str[0];
}

console.log(reverse("ABC"))

function reverse_loop(str) {
    let new_str = "";
    for (let i = str.length - 1; i >= 0; i--) {
        console.log("Before:", new_str);
        new_str += str[i];
        console.log("After:", new_str);
    }

    return new_str;
}

console.log(reverse_loop("ABC"))