/*** IS537 Match Braces Template ***/
/*** Except for inserting your name, do not modify any code outside of the checkForMatchingBraces(exp) function at the bottom of this file ***/

let expression = 
        "function insertHelper(self, root, node) { " +
        "if (root === null) { " +
        "   root = node; " +
        "} else if (node.data < root.data) { " +
        "   root.left = insertHelper(self, root.left, node); " +
        "   if (root.left !== null && self.getBalanceFactor(root) > 1) { " +
        "   if (node.data > root.left.data) { " +
        "      root = rotationLL(root); " +
        "   } else { " +
        "      root = rotationLR(root); " +
        "   } " +
        "} " +
    "} else if (node.data > root.data) { " +
    "    right = insertHelper(self, root.right, node); " +
    "    if (root.right !== null && self.getBalanceFactor(root) < -1) { " +
    "       if (node.data > root.right.data) { " +
    "          root = rotationRR(root); " +
    "       } else { " +
    "          root = rotationRL(root); " +
    "       } " +
    "    } " +
    " } " +
    " return root; " +
    " }";

let studentName = "Henry Cho";  //replace with your name
let numOpening = 0;
let numClosing = 0;
let messageOnMatching = "unchecked";

messageOnMatching = checkForMatchingBraces(expression);

console.log(studentName);
console.log("Opening Braces: " + numOpening);
console.log("Closing Braces: " + numClosing);
console.log(messageOnMatching);

/*******************************************/
/*********** Place Your Code Here **********/
function checkForMatchingBraces(exp) {
    const PAIRS = {"(": ")", "{": "}", "[": "]"};
    const BRACES = ["(", ")", "{", "}", "[", "]"];

    let stack = [];

    for (let char of exp) {
        if (BRACES.includes(char)) {
            if (PAIRS[stack[stack.length - 1]] !== char) {
                stack.push(char);
                ++numOpening;
            }
            else {
                stack.pop();
                ++numClosing;
            }
        }
    }

    if (stack.length === 0) {
        return "Matched";
    }
    return "Unmatched";
}
/*******************************************/
/*******************************************/