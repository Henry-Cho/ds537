// Advantages
// 1. I like using a doubly-linked list for this task because the time complexity of a doubly linked list insertion process is O(1).
// 1_1. However, because of the duplicate check, the TC increases O(n log n) in the worst case due to sorting. But, still, it is a fast algorithm
// 2. Reverse traversal: Doubly-linked lists allow for efficient traversal in both directions (forward and backward) as each node has a pointer to both its predecessor and successor.
// Disdavantages:
// 1. Sorting was made much more complicated than other method because I had to take care of next and prev for each node.
// 2. Space overhead: Doubly-linked lists require more memory than arrays or singly-linked lists as each node stores two pointers, one for the previous node and one for the next node.
// 3. Doubly-linked lists are more complex to implement than arrays or singly-linked lists, especially when dealing with edge cases, such as inserting or deleting nodes at the beginning or end of the list.
// What might I do differently if you could?
// I did my best for this task; however, if I could, I might try to implement a different way of sorting. Or, if I could I use loop instead of recursion in sorting.

const fs = require("fs");
const file = fs.readFileSync("./FirstNephiChapter8.txt", {encoding: 'utf-8'}).toLowerCase();
const withoutPunctuation = file.replace(/[^a-z]+/g, " ").trim();
const wordsInFile = withoutPunctuation.split(' ');

class Node{
    constructor(val){
        this.val = val;
        this.count = 1;
        this.next = null;
        this.prev = null;
    }
}

class ChapterWordList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // duplicate check
    findNode(value) {
        let current = this.head;
      
        while (current) {
          if (current.val === value) {
            current.count++;
            return true;
          }
          current = current.next;
        }
      
        return false; // value not found
      }

    listWords() {
        let arr = [];
        let count = 0;
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
            count++
        }
        console.log(arr, count);
    }

    listlnReverse() {
        let arr = [];
        let count = 0;
        let current = this.tail;

        while (current.val !== undefined) {
            arr.push(current.val);
            current = current.prev;
            count++
        }
        console.log(arr, count);
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.findNode(val)) {
                return this;
            }
            else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;

                this.head = this.sortList(this.head);
                
                let current = this.head;

                while (current.next) {
                    current = current.next;
                }

                this.tail = current;
            }
        }

        this.length++;

        return this;
    }

    sortList(head) {
        // Base case: empty or single-node list is already sorted
        if (!head || !head.next) {
          return head;
        }
      
        // Split the list into two halves
        const [left, right] = this.splitList(head);
      
        // Recursively sort the two halves
        const sortedLeft = this.sortList(left);
        const sortedRight = this.sortList(right);
      
        // Merge the two sorted halves
        return this.mergeLists(sortedLeft, sortedRight);
      }
      
    splitList(head) {
        // Use the fast-slow pointer technique to find the middle node
        let slow = head;
        let fast = head.next;
      
        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }
      
        // Split the list into two halves
        const left = head;
        const right = slow.next;
        slow.next = null;
      
        return [left, right];
      }
      
    mergeLists(left, right) {
        const dummyHead = { next: null, prev: null };
        let tail = dummyHead;
      
        while (left && right) {
          if (left.val < right.val) {
            tail.next = left;
            left.prev = tail;
            left = left.next;
          } else {
            tail.next = right;
            right.prev = tail;
            right = right.next;
          }
          tail = tail.next;
        }
      
        // Append any remaining nodes from the left or right list
        tail.next = left || right;
        tail.next.prev = tail;
      
        // Skip the dummy head node and return the new head node
        return dummyHead.next;
      }
}

let list = new ChapterWordList();

for (word of wordsInFile) {
    list.insert(word);
}

list.listWords();
list.listlnReverse();