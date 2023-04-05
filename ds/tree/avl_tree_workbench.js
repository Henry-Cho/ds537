// AVL tree implementation in JavaScript

class TreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        function _insert(tree, node, key) {
            if (!node) {
                return new TreeNode(key);
            }

            if (key < node.key) {
                node.left = _insert(tree, node.left, key);
            } else {
                node.right = _insert(tree, node.right, key);
            }

            node.height = 1 + Math.max(tree.getHeight(node.left), tree.getHeight(node.right));

            return tree.balanceTree(node, tree.getBalance(node));
        }

        this.root = _insert(this, this.root, key);
    }

    deleteNode(key) {
        function _delete(tree, node, key) {
            if (!node) {
                return node;
            }

            if (key < node.key) {
                node.left = _delete(tree, node.left, key);
            } else if (key > node.key) {
                node.right = _delete(tree, node.right, key);
            } else {
                if (!node.left) {
                    return node.right;
                } else if (!node.right) {
                    return node.left;
                }

                const minimalSuccessor = tree.getMinValueNode(node.right).key;
                node.key = minimalSuccessor;
                node.right = _delete(tree, node.right, minimalSuccessor);
            }

            if (!node) {
                return node;
            }

            node.height = 1 + Math.max(tree.getHeight(node.left), tree.getHeight(node.right));

            return tree.balanceTree(node, tree.getBalance(node));
        }

        this.root = _delete(this, this.root, key);
    }

    balanceTree(node, balanceFactor) {
        if (balanceFactor > 1) {
            if (this.getBalance(node.left) >= 0) {
                return this.rightRotate(node)
            } else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }

        if (balanceFactor < -1) {
            if (this.getBalance(node.right) <= 0) {
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }

        return node;
    }

    leftRotate(z) {
        const y = z.right;
        const t2 = y.left;

        y.left = z;
        z.right = t2;
        z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

        return y;
    }

    rightRotate(z) {
        const y = z.left;
        const t3 = y.right;

        y.right = z;
        z.left = t3;
        z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

        return y;
    }

    getHeight(node) {
        if (!node) {
            return 0;
        }

        return node.height;
    }

    getBalance(node) {
        if (!node) {
            return 0;
        }

        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    getMinValueNode(node) {
        if (!node || !node.left) {
            return node;
        }

        return this.getMinValueNode(node.left);
    }

    preOrder(node) {
        if (!node) {
            return;
        }

        console.log(node.key);
        this.preOrder(node.right);
        this.preOrder(node.left);
    }

    printHelper(indent, last) {
        function _printHelper(node, indent, last) {
            let toPrint = "";

            if (node) {
                toPrint = indent;

                if (last) {
                    toPrint += "R----";
                    indent += "     ";
                } else {
                    toPrint += "L----";
                    indent += "|    ";
                }

                console.log(`${toPrint}${node.key}`);
                _printHelper(node.left, indent, false);
                _printHelper(node.right, indent, true);
            }
        }

        _printHelper(this.root, indent, last);
    }
}

const myTree = new AVLTree();
const nums = [25, 5, 50, 3, 13, 35, 100, 1, 4, 8, 16]
nums.forEach(num => myTree.insert(num));

console.log("Before Insertion:");
myTree.printHelper("", true);

myTree.insert(10);
console.log("After Insertion:");
myTree.printHelper("", true);

myTree.deleteNode(25)
console.log("After Deletion:");
myTree.printHelper("", true);