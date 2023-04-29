class TreeNode:
    def __init__(self,val,left=None,right=None):
        self.value = val
        self.leftChild = left
        self.rightChild = right

rootNode = TreeNode("Tyler")
rootNode.leftChild = TreeNode("LeftBen")
rootNode.leftChild.leftChild = TreeNode("Chris")
rootNode.leftChild.leftChild.leftChild = TreeNode("Bryan")
rootNode.leftChild.leftChild.rightChild = TreeNode("Cameron")
rootNode.leftChild.rightChild = TreeNode("Kyler")
rootNode.leftChild.rightChild.leftChild = TreeNode("Jayden")
rootNode.leftChild.rightChild.rightChild = TreeNode("Kaden")
rootNode.rightChild = TreeNode("Shannon")
rootNode.rightChild.rightChild = TreeNode("Sage")
rootNode.rightChild.leftChild = TreeNode("RightBen")
rootNode.rightChild.leftChild.rightChild = TreeNode("Nefi")
rootNode.rightChild.leftChild.leftChild = TreeNode("Misa")

#*************** Place your code here ******************
#****    Post Order Traversal using recursion      *****
#*******************************************************
def postorder( node, nList ):    
    current = node;

    def traverse(n) :
        if n.leftChild :
            traverse(n.leftChild);
        if n.rightChild :
            traverse(n.rightChild)

        nList.append(n.value)

    traverse(current);

    return nList;



#*******************************************************
#*******************************************************

print("Henry Cho")
list = []
postorder(rootNode, list)
print(list)

