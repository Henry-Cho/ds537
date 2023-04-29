/*** IS537 Template - Linked List Delete Duplicates ***/
class LinkedList {
    head = null;
    size = 0;

    constructor(value) {
        if (value != null) {
            this.insertNode(value);
        }
    }

    insertNode(value) {
        if (this.head === null) {
            this.head = new LinkNode(value);
                
        } else {
            var temp = this.head;
            this.head = new LinkNode(value);
            this.head.next = temp;
        }
        this.size++
    }
}
        
class LinkNode {
    next = null;
    data;

    constructor(value) {
        this.data = value;
    }
}

linkedList = new LinkedList();
linkedList.insertNode(2);
linkedList.insertNode(4);
linkedList.insertNode(6);
linkedList.insertNode(8);
linkedList.insertNode(16);
linkedList.insertNode(42);
linkedList.insertNode(23);
linkedList.insertNode(16);
linkedList.insertNode(15);
linkedList.insertNode(8);
linkedList.insertNode(4);
console.log("Size Before: " + linkedList.size);

removeLLDuplicates(linkedList);

var studentName = "Henry Cho";
console.log("Size After: " + linkedList.size);
console.log(studentName);

/*******************************************/
/*********** Place Your Code Here **********/
/**    to find and delete duplicate data  **/
function removeLLDuplicates(llist) {
    let current_head = llist.head;
    let temp = null;
    let uniqueSet = new Set();

    while (current_head) {
        if (uniqueSet.has(current_head.data)) {
            temp.next = current_head.next;
            llist.size--;
        }
        else {
            uniqueSet.add(current_head.data);
        }

        temp = current_head;
        current_head = current_head.next;
    }
}



/*******************************************/