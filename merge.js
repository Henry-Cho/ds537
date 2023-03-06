function partA(nameList) {
    if (nameList.length < 2) {
        console.log("Length less than 2: ", nameList)
        return nameList;
    }

    let mid = Math.floor(nameList.length / 2);
    let left = partA(nameList.slice(0 ,mid));
    console.log("left: ", left)
    let right = partA(nameList.slice(mid));
    console.log("right: ", right)

    return partB(left, right);
}

function partB(sublist1, sublist2) {
    console.log("SUB: ", sublist1, sublist2)
    let resultList = [];

    while (sublist1.length > 0 && sublist2.length > 0) {
        if (sublist1[0] < sublist2[0]) {
            resultList.push(sublist1.shift());
        }
        else {
            resultList.push(sublist2.shift());
        }
    }

    if (sublist1.length !== 0) {
        console.log("This time: ", resultList.concat(sublist1))
        return resultList.concat(sublist1);
    }
    else {
        console.log("This time: ", resultList.concat(sublist2))
        return resultList.concat(sublist2);
    }
}

console.log(partA(["Sally", "Lauri", "Jalen", "Xander"]))