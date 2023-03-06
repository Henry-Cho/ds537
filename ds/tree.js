// Binary Trees
// A data structure that consists of nodes in a parent/child relationship

// root - the top node in a tree
// child - a node directly connected to naother node when moving away from the root
// parent - the converse notion of a child
// siblings - a group of nodes with the same parent
// leaf - a node with no children
// edge - the connection between one node and another

// uses for trees
// 1. HTML DOM
// 2. AI
// 3. directories
// 4. JSON

// a node can have two children at most

// How BSTs work
// Every parent node has at most two children
// every node to the left of a parent node is always less than the parent
// every node to the right of a parent node is alwyas greater than the parent


// Big O of BST

// Insertion

// Best case: O(1) - Occurs when the tree is empty, and the new node is inserted as the root node.
// Average case: O(log n) - Occurs when the tree is balanced, and nodes are inserted in a random order. The average case time complexity for insertion is proportional to the height of the tree, which is logarithmic in the number of nodes.
// Worst case: O(n) - Occurs when nodes are inserted in a sorted order, or in a way that causes the tree to become unbalanced. In the worst case, the tree can become a linked list, with each node having only one child. In this case, the time complexity for insertion is proportional to the number of nodes, as each new node must be inserted at the end of the linked list.

// Searching
// Best case: O(1) - Occurs when the target node is the root node.
// Average case: O(log n) - Occurs when the tree is balanced, and nodes are inserted in a random order. The average case time complexity for searching is proportional to the height of the tree, which is logarithmic in the number of nodes.
// Worst case: O(n) - Occurs when nodes are inserted in a sorted order, or in a way that causes the tree to become unbalanced. In the worst case, the tree can become a linked list, with each node having only one child. In this case, the time complexity for searching is proportional to the number of nodes, as each node must be visited before reaching the target node.


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
}

let tree = new BinarySearchTree();
tree.insert(8)
tree.insert(7)
tree.insert(10)
tree.insert(10)
console.log(tree.find(7))
console.log(tree)
