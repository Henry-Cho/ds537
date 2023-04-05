# AVL tree implementation in Python

import sys
from xml.etree.ElementTree import TreeBuilder

# Create a tree node


class TreeNode(object):
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1


class AVLTree(object):

    def __init__(self):
        self.root = None

    # Function to insert a node
    def insert(self, key):
        def _insert(node, key):
            # Find the correct location and insert the node
            if not node:
                return TreeNode(key)
            elif key < node.key:
                node.left = _insert(node.left, key)
            else:
                node.right = _insert(node.right, key)

            node.height = 1 + max(self.get_height(node.left),
                                  self.get_height(node.right))

            # Update the balance factor and balance the tree
            balance_factor = self.get_balance(node)

            return self.balance_tree(node, balance_factor)

        self.root = _insert(self.root, key)

    # Function to delete a node
    def delete(self, key):
        def _delete(node, key):
            # Find the node to be deleted and remove it
            if not node:
                return node
            elif key < node.key:
                node.left = _delete(node.left, key)
            elif key > node.key:
                node.right = _delete(node.right, key)
            else:
                if node.left is None:
                    temp = node.right
                    node = None
                    return temp
                elif node.right is None:
                    temp = node.left
                    node = None
                    return temp
                temp = self.get_min_value_node(node.right)
                node.key = temp.key
                node.right = _delete(node.right, temp.key)
            if node is None:
                return node

            # Update the balance factor of nodes
            node.height = 1 + max(self.get_height(node.left),
                                  self.get_height(node.right))

            balance_factor = self.get_balance(node)

            return self.balance_tree(node, balance_factor)

        self.root = _delete(self.root, key)

    def balance_tree(self, node, balance_factor):
        # Balance the tree
        if balance_factor > 1:
            print("Hey greater than 1 called")
            if self.get_balance(node.left) >= 0:
                print("line 83 called")
                return self.right_rotate(node)
            else:
                print("line 86 called")
                node.left = self.left_rotate(node.left)
                myTree.print_helper("", True)
                return self.right_rotate(node)
        if balance_factor < -1:
            print("Hey less than 1 called")
            if self.get_balance(node.right) <= 0:
                print("line 92 called")
                return self.left_rotate(node)
            else:
                print("line 95 called")
                node.right = self.right_rotate(node.right)
                return self.left_rotate(node)
        return node

    # Function to perform left rotation
    def left_rotate(self, z):
        print("Left, I am called")
        # print("rotating left at " + str(z.key))
        y = z.right
        T2 = y.left
        y.left = z
        z.right = T2
        z.height = 1 + max(self.get_height(z.left),
                           self.get_height(z.right))
        y.height = 1 + max(self.get_height(y.left),
                           self.get_height(y.right))
        # self.print_helper(root, "", True)
        return y

    # Function to perform right rotation
    def right_rotate(self, z):
        print("Right, I am called")
        # print("rotating right at " + str(z.key))
        y = z.left
        T3 = y.right
        y.right = z
        z.left = T3
        z.height = 1 + max(self.get_height(z.left),
                           self.get_height(z.right))
        y.height = 1 + max(self.get_height(y.left),
                           self.get_height(y.right))
        # self.print_helper(root, "", True)
        return y

    # Get the height of the node
    def get_height(self, node):
        if not node:
            return 0
        return node.height

    # Get balance factor of the node
    def get_balance(self, node):
        if not node:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)

    def get_min_value_node(self, node):
        if node is None or node.left is None:
            return node
        return self.get_min_value_node(node.left)

    def pre_order(self, node):
        if not node:
            return
        print("{0} ".format(node.key), end="")
        self.pre_order(node.left)
        self.pre_order(node.right)

    # Print the tree
    def print_helper(self, indent, last):
        def _print_helper(node, indent, last):
            if node != None:
                sys.stdout.write(indent)
                if last:
                    sys.stdout.write("R----")
                    indent += "     "
                else:
                    sys.stdout.write("L----")
                    indent += "|    "
                print(node.key)
                _print_helper(node.left, indent, False)
                _print_helper(node.right, indent, True)

        _print_helper(self.root, indent, last)


myTree = AVLTree()
nums = [25, 5, 50, 35, 100, 3, 13, 1, 4, 8, 16]
for num in nums:
    myTree.insert(num)

print("Before Insertion")
myTree.print_helper("", True)

root = myTree.insert(10)
print("After Insertion")
myTree.print_helper("", True)

key = 25
myTree.delete(key)
print("After Deletion: ")
myTree.print_helper("", True)
