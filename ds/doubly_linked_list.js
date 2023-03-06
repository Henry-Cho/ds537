// Big O
// insertion - O(1)
// removal - O(1)
// Searching - O(N)
// Access - O(N)

// better than singly linked lists for finding nodes and can be done in half theh time!
// However, they do take up more memory considering the extra pointer

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;    
        }

        this.length++;

        console.log(this);

        return this;
    }
    
    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let currentTail = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = currentTail.prev;
            currentTail.prev = null;
            this.tail.next = null;
        }

        this.length--;

        console.log(this);
        return currentTail;
    }

    shift() {
        if (this.length === 0) return undefined;

        let currentHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
        }
        this.length--;

        console.log(this);
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            let currentHead = this.head;
            this.head = newNode;
            newNode.next = currentHead;
            currentHead.prev = newNode;
        }
        this.length++;
        console.log(this);
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return false;
        }
        let count = idx >= this.length / 2 ? this.length - 1 : 0;
        let current = idx >= this.length / 2 ? this.tail : this.head;

        if (idx >= this.length / 2) {
            while (count !== idx) {
                current = current.prev;
                count--;
            }
        }
        else {
            while (count !== idx) {
                current = current.next;
                count++;
            }
        }
        console.log(current);
        return current;
    }

    set(idx, val) {
        let node = this.get(idx);

        if (node) {
            node.val = val;
            return true;
        }
        else {
            return false;
        }
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
        newNode.prev = node;
        newNode.next = nextNode;
        nextNode.prev = newNode;

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
        nextNode.next.prev = node;
        nextNode.next = null;
        nextNode.prev = null;

        this.length--;
        console.log(this)
        return nextNode;
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = null;
        let oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;
        
        return this;
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
}

let list = new DoublyLinkedList();

list.push(100)
list.push(200)
list.push(300)
list.push(400)

list.pop()
list.shift()
list.unshift(50)

list.get(2)
list.set(2, 700)
list.get(2)
list.insert(1, 6300)
list.print()
list.remove(0)

list.reverse()
list.print()