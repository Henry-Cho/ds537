const fs = require("fs");
const file = fs.readFileSync("./FirstNephiChapter8.txt", {encoding: 'utf-8'}).toLowerCase();
const withoutPunctuation = file.replace(/[^a-z]+/g, " ").trim();
const wordsInFile = withoutPunctuation.split(' ');

class Node{
    constructor(val){
        this.val = val;
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

    append(val) {
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

        return this;
    }

    listWords() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    listlnReverse() {
        let arr = [];
        let current = this.tail;

        while (current) {
            arr.push(current.val);
            current = current.prev;
        }
        console.log(arr);
    }
}

let list = new ChapterWordList();

for (word of wordsInFile) {
    list.append(word);
}

list.listWords();
list.listlnReverse();