// The trie is a kind of tree that is ideal for text-based features such as autocomplete.
// a trie node can have any number of child nodes.

// search

// There are two flavors of search: 
// 1. we can search to see whether the string is a complete word
// 2. we can search to see whether the string is at least a word prefix

class TrieNode {
    constructor() {
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Most references have decided to call this O(K), where K is the number of characters in our search string. Any letter other than N would have worked here, but K it is.
    // With an O(K) algorithm, though, our trie can grow tremendously, but that will have no affect on the speed of our search.

    search(word) {
        let currentNode = this.root;

        for (let char of word) {
            if (currentNode.children[char] !== undefined) {
                currentNode = currentNode.children[char];
            }
            else {
                return undefined;
            }
        }

        return currentNode;
    }

    insert(word, popularity) {
        let currentNode = this.root;

        for (let char of word) {
            if (currentNode.children[char] !== undefined) {
                currentNode = currentNode.children[char];
            }
            else {
                let newNode = new TrieNode();
                currentNode.children[char] = newNode;

                currentNode = newNode
            }
        }

        currentNode.children["*"] = popularity;
    }

    collectAllWords(node = null, word = "", words = []) {
        let currentNode = node ? node : this.root;

        const keys = Object.keys(currentNode.children);

        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === "*") {
                words.push(word);
            }
            else {
                this.collectAllWords(currentNode.children[keys[i]], word + keys[i], words);
            }
        }

        return words;
    }

    autocomplete(prefix) {
        let currentNode = this.search(prefix);

        if (currentNode === undefined) {
            return undefined;
        }
        return this.collectAllWords(currentNode);
    }
}