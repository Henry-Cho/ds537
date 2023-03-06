// What is Linked List?
// A DS that contains a head, tail, and length property
// Linked Lists consist of nodes and each node has a value and a pointer to another node or null
// Do not have indexes
// Connected via nodes with a next pointer
// Random access is not allowed 

// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        console.log(this)
        return this;
    }
    pop() {
        // let val = this.tail.val;
        // this.tail = null;
        // return val;
        if (this.length === 0) {
            return undefined;
        }

        let current = this.head;
        let newTail = this.head;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        let val = current.val;
        this.tail = newTail;
        this.tail.next = null;

        this.length--;
        
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        console.log(this)
        return val;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        let current_head = this.head;
        this.head = current_head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        console.log(this)
        return current_head;
    }

    unshift(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        console.log(this)

        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        let currentNode = this.head;
        let count = 0;

        while (count !== idx) {
            currentNode = currentNode.next;
            count++;
        }
        console.log(currentNode)
        return currentNode;
    }

    set(idx, val) {
        let node = this.get(idx);
        if (node) {
            node.val = val;
            return true;
        } 
        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;
        }
        if (idx === 0) {
            this.unshift(val);
            return true;
        }
        if (idx === this.length) {
            this.push(val);
            return true;
        }
        let newNode = new Node(val);
        let node = this.get(idx - 1);
        
        let nextNode = node.next;
        node.next = newNode;
        newNode.next = nextNode;
        this.length++;
        console.log(this)
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        if (idx === this.length - 1) {
            this.pop();
            return true;
        }
        if (idx === 0) {
            this.shift();
            return true;
        }

        let node = this.get(idx - 1);
        let nextNode = node.next;

        node.next = nextNode.next;
        this.length--;
        console.log(this)
        return nextNode;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    reverse() {
        let currentHead = this.head;
        this.head = this.tail;
        this.tail = currentHead;

        let [next, prev] = [null, null];

        for (let i = 0; i < this.length; i++) {
            next = currentHead.next;
            currentHead.next = prev;
            prev = currentHead;
            currentHead = next;
        }
        return this; 
    }
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.pop();
// list.shift()
// list.unshift("HIHI")
// list.push("HOHOHO")
// list.get(1)

list.push(100)
list.push(200)
list.push(300)
list.push(400)

list.get(2)

list.insert(2, 5000)

list.get(2)
list.remove(1)
list.remove(1)