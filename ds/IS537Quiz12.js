// Hyungseok (Henry) Cho

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

    maxLeafValue() {
        function _traverse(node) {
            if (!node) {
                return null;
            }

            if (!node.left && !node.right) {
                return node.key;
            }

            const leftMax = _traverse(node.left);
            const rightMax = _traverse(node.right);

            return Math.max(leftMax, rightMax);
        }

        const maxValue = _traverse(this.root);
        console.log('Maximum value of leaf nodes:', maxValue);
    }

    minLeafValue() {
        function _traverse(node) {
            if (!node) {
                return null;
            }

            if (!node.left && !node.right) {
                return node.key;
            }

            const leftMin = _traverse(node.left);
            const rightMin = _traverse(node.right);

            return Math.min(leftMin, rightMin);
        }

        const minValue = _traverse(this.root);
        console.log('Minimum value of leaf nodes:', minValue);
    } 

    averageLeafValue() {
        function _traverse(node) {
            if (!node) {
                return { sum: 0, count: 0 };
            }

            if (!node.left && !node.right) {
                return { sum: node.key, count: 1 };
            }

            const leftResult = _traverse(node.left);
            const rightResult = _traverse(node.right);

            return {
                sum: leftResult.sum + rightResult.sum,
                count: leftResult.count + rightResult.count,
            };
        }

        const { sum, count } = _traverse(this.root);
        const averageValue = sum / count;
        console.log('Average value of leaf nodes:', averageValue);
    }
    
    maxNumericDistance() {
        function _traverse(node, rootValue) {
            if (!node) {
                return 0;
            }

            if (!node.left && !node.right) {
                return Math.abs(rootValue - node.key);
            }

            const leftDistance = _traverse(node.left, rootValue);
            const rightDistance = _traverse(node.right, rootValue);

            return Math.max(leftDistance, rightDistance);
        }

        const maxDistance = _traverse(this.root, this.root.key);
        console.log('Maximum numeric distance between root and any leaf node:', maxDistance);
    }

    getLeftmostLeaf(node) {
        if (!node) {
            return null;
        }

        while (node.left) {
            node = node.left;
        }

        return node;
    }

    getRightmostLeaf(node) {
        if (!node) {
            return null;
        }

        while (node.right) {
            node = node.right;
        }

        return node;
    }

    leftMostAndRightMostNumericDistance() {
        const left = this.getLeftmostLeaf(this.root);
        const right = this.getRightmostLeaf(this.root);

        const distance = left && right ? Math.abs(right.key - left.key) : null;

        if (distance) {
            console.log('Numeric distance between leftmost leaf node and rightmost leaf node:', distance);
        }
        else {
            console.log('Cannot calculate distance, tree is empty.');
        }
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
const nums = [100,110,120,150,151,260,264,268,301,303,351,404,470,475,505,660,770]
nums.forEach(num => myTree.insert(num));

console.log("Before Insertion:");
myTree.printHelper("", true);

myTree.maxLeafValue();
myTree.minLeafValue();
myTree.averageLeafValue();
myTree.maxNumericDistance();
myTree.leftMostAndRightMostNumericDistance();