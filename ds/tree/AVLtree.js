// class TreeNode {
//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null;
//       this.height = 1;
//     }
//   }
  
//   class AVLTree {
//     constructor() {
//       this.root = null;
//     }
  
//     // Insert a value into the AVL tree
//     insert(val) {
//       const newNode = new TreeNode(val);
  
//       if (!this.root) {
//         this.root = newNode;
//       } else {
//         this._insertHelper(this.root, newNode);
//       }
  
//       this.root = this._rebalance(this.root);
  
//       return this;
//     }
  
//     // Delete a value from the AVL tree
//     delete(val) {
//       if (!this.root) return null;
  
//       this.root = this._deleteHelper(this.root, val);
//       this.root = this._rebalance(this.root);
  
//       return this;
//     }
  
//     // Helper method to insert a node recursively
//     _insertHelper(node, newNode) {
//       if (newNode.val < node.val) {
//         if (!node.left) {
//           node.left = newNode;
//         } else {
//           this._insertHelper(node.left, newNode);
//         }
//       } else if (newNode.val > node.val) {
//         if (!node.right) {
//           node.right = newNode;
//         } else {
//           this._insertHelper(node.right, newNode);
//         }
//       } else {
//         // Value already exists in the tree
//         return;
//       }
  
//       node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
  
//       const balanceFactor = this._getBalance(node);
  
//       if (balanceFactor > 1 && newNode.val < node.left.val) {
//         return this._rotateRight(node);
//       }
  
//       if (balanceFactor < -1 && newNode.val > node.right.val) {
//         return this._rotateLeft(node);
//       }
  
//       if (balanceFactor > 1 && newNode.val > node.left.val) {
//         node.left = this._rotateLeft(node.left);
//         return this._rotateRight(node);
//       }
  
//       if (balanceFactor < -1 && newNode.val < node.right.val) {
//         node.right = this._rotateRight(node.right);
//         return this._rotateLeft(node);
//       }
  
//       return node;
//     }
  
//     // Helper method to delete a node recursively
//     _deleteHelper(node, val) {
//       if (!node) return null;
  
//       if (val < node.val) {
//         node.left = this._deleteHelper(node.left, val);
//       } else if (val > node.val) {
//         node.right = this._deleteHelper(node.right, val);
//       } else {
//         if (!node.left && !node.right) {
//           return null;
//         } else if (!node.left || !node.right) {
//           return node.left || node.right;
//         } else {
//           const successor = this._getSuccessor(node.right);
//           node.val = successor.val;
//           node.right = this._deleteHelper(node.right, successor.val);
//         }
//       }
  
//       node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
  
//       const balanceFactor = this._getBalance(node);
  
//       if (balanceFactor > 1 && this._getBalance(node.left) >= 0) {
//         return this._rotateRight(node);
//       }
  
//       if (balanceFactor > 1 && this._getBalance(node.left) < 0) {
//         node.left = this._rotateLeft(node.left);
//         return this._rotateRight(node);
//       }
  
  