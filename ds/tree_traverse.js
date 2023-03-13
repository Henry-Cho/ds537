// BFS (Working across tree: visiting every same level (horizontally))

// create a queue (this can be an array) and a variable to store the values of nodes visited
// place the root ndoe in the queue
// loop as long as there is anything in the queue
// 1. Dequeue a node from the queue and push the value of the node in to the variable that stores the nodes
// 2. If there is a left property on the ndoe dequeued - add it to the queue
// 3. If there is a right property on the node dequeued - add it to the queue
// Return the variable that stores the values

// DFS 
// inOrder (From far left)
// preOrder (From Root)
// PostOrder (From far left and move onto the sibilng -> parent)

// Which one is better? -> it depends!
// TC is the same for both
// inorder: (lowest to highest)
// preorder: can be used to export a tree structure so that it is easily reconstructed or copied

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        function findRightPosition(root, node) {
            if (!root) {
                return node;
            }
    
            if (root.value === node.value) return root;
    
            if (root.value < node.value) {
                root.right = findRightPosition(root.right, node);
            }
            else {
                root.left = findRightPosition(root.left, node);
            }
            return root;
        }

        this.root = findRightPosition(this.root, newNode);

        console.log(this);
        return this;
    }

    find(val) {
        function find_node(root, value) {
            if (!root) return undefined;

            if (root.value === value) {
                return root;
            } 
            if (root.value < val) {
                return find_node(root.right, value);
            }
            else {
                return find_node(root.left, value);
            }
        }

        return find_node(this.root, val) ? true : false;
    }
    // Find the node with the minimum value in the BST
    findMinNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    // Delete a node with a given value from the BST
    delete(value) {
        const deleteNode = (node, value) => {
            if (!node) return null;
            if (value === node.value) {
                // Case 1: The node has no children
                if (!node.left && !node.right) return null;
                // Case 2: The node has one child
                if (!node.left) return node.right;
                if (!node.right) return node.left;
                // Case 3: The node has two children
                const tempNode = this.findMinNode(node.right);
                node.value = tempNode.value;
                node.right = deleteNode(node.right, tempNode.value);
            } 
            else if (value < node.value) {
                node.left = deleteNode(node.left, value);
            } 
            else {
                node.right = deleteNode(node.right, value);
            }
            return node;
        };
        this.root = deleteNode(this.root, value);

        //this.rebalance(this.root);

        return this;
  }

//   bfs() {
//     // visited
//     let data = [];
//     let queue = [];
//     let node = this.root;

//     queue.push(node);

//     while (queue.length > 0) {
//         node = queue.shift();
//         data.push(node.value);
//         if (node.left) {
//             queue.push(node.left);
//         }

//         if (node.right) {
//             queue.push(node.right);
//         }
//     }

//     return data;
//   }

  bfs() {
    let queue = [this.root];
    let data = [];

    function traverse(node) {
        if (!node) return;
        data.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        traverse(queue.shift());
    }

    traverse(queue.shift());

    return data;
  }

//   preorderLoop() {
//     const data = [];
//     const stack = [this.root];

//     while (stack.length > 0) {
//         const current = stack.pop();
//         data.push(current.value);

//         if (current.right) stack.push(current.right);
//         if (current.left) stack.push(current.left);
//     }

//     return data;
// }

  preorder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
        data.push(node.value);
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }
        return;
    }

    traverse(current);

    return data;
  }

  postorder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }

        data.push(node.value);
        return;
    }

    traverse(current);

    return data;
  }

  inorder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
        if (node.left) {
            traverse(node.left);
        }

        data.push(node.value);

        if (node.right) {
            traverse(node.right);
        }

        return;
    }

    traverse(current);

    return data;
  }

rebalance(node) {
    if (!node) return;
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
        if (leftHeight > rightHeight) {
            let leftLeftHeight = this.height(node.left.left);
            let leftRightHeight = this.height(node.left.right);
            if (leftRightHeight > leftLeftHeight) {
                node.left = this.rotateLeft(node.left);
            }
            node = this.rotateRight(node);
        } else {
            let rightLeftHeight = this.height(node.right.left);
            let rightRightHeight = this.height(node.right.right);
            if (rightLeftHeight > rightRightHeight) {
                node.right = this.rotateRight(node.right);
            }
            node = this.rotateLeft(node);
        }
    }
    this.rebalance(node.left);
    this.rebalance(node.right);
}

rotateLeft(node) {
    let newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    return newRoot;
}

rotateRight(node) {
    let newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    return newRoot;
}

height(node) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
}

}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.bfs())
// [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.preorder())
// [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.postorder())
// [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.inorder())
// [ 3, 6, 8, 10, 15, 20 ]