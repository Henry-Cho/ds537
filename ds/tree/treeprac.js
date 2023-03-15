function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
function search(node, targetValue) {
    if (!node || node.val === targetValue) {
        return node;
    } 
    return node.val < targetValue ? search(node.right, targetValue) : search(node.left, targetValue);
}

function insert(node, value) {
    if (value < node.val) {
        if (!node.left) {
            node.left = new TreeNode(value);    
        }
        else {
            insert(node.left, value);
        }
    }
    else if (value > node.val) {
        if (!node.right) {
            node.right = new TreeNode(value);    
        }
        else {
            insert(node.right, value);
        }
    }

    // let newNode = new TreeNode(val);

    // function findRightPosition(root, node) {
    //     if (!root) {
    //         return node;
    //     }

    //     if (root.value === node.value) return root;

    //     if (root.value < node.value) {
    //         root.right = findRightPosition(root.right, node);
    //     }
    //     else {
    //         root.left = findRightPosition(root.left, node);
    //     }
    //     return root;
    // }

    // this.root = findRightPosition(this.root, newNode);

    // return this;
}

function reverse(list) {
    if (list.next) {
        const head = list;
        const reversed = reverse(list.next);
        head.next = null;
        append(reversed, head);
        return reversed;
    } else {
        return list;
    }
}
// Test our implementation of "reverse"
// const testList = new TreeNode(50, 
//     new TreeNode(25, new TreeNode(12), new TreeNode(37)),
//     new TreeNode(75, new TreeNode(62, new TreeNode(10058)))
// );

const testTree = new TreeNode(50);

insert(testTree, 25)
insert(testTree, 12)
insert(testTree, 37)
insert(testTree, 75)
insert(testTree, 62)
insert(testTree, 10058)

console.log("tree", JSON.stringify(testTree, null, 4));
console.log("search 1", JSON.stringify(search(testTree, 62), null, 4));