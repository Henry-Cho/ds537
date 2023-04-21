class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
        this.frequency = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word, frequency) {
        let currentNode = this.root;
        let i = 0;

        while (i < word.length) {
            const letter = word[i];

            if (!currentNode.children[letter]) {
                currentNode.children[letter] = new TrieNode();
            }

            currentNode = currentNode.children[letter];
            i += 1;
        }

        currentNode.isEndOfWord = true;
        currentNode.frequency = frequency;
    }

    search(word) {
        let currentNode = this.root;
        let i = 0;

        while (i < word.length) {
            const letter = word[i];

            if (!currentNode.children[letter]) {
                return null;
            }

            currentNode = currentNode.children[letter];
            i += 1;
        }

        return currentNode.isEndOfWord ? currentNode : null;
    }

    startsWith(word) {
        let currentNode = this.root;
        let i = 0;

        while (i < word.length) {
            const letter = word[i];

            if (!currentNode.children[letter]) {
                return null;
            }

            currentNode = currentNode.children[letter];
            i += 1;
        }

        return currentNode;
    }

    collectAllWords(node, word = "", words = []) {
        for (const [letter, letterNode] of Object.entries(node.children)) {
            if (letterNode.isEndOfWord) {
                words.push([word + letter, letterNode.frequency]);
            }

            this.collectAllWords(letterNode, word + letter, words);
        }

        return words;
    }

    collectTopKWords(node, word = "", words = [], k = 3) {
        for (const [letter, letterNode] of Object.entries(node.children)) {
            if (letterNode.isEndOfWord) {
                words.push([word + letter, letterNode.frequency]);
                words.sort((w1, w2) => w2[1] - w1[1]);

                if (words.length > k) {
                    words.splice(words.length - 1, words.length - k)
                    
                }
            }
            console.log(letterNode)
            this.collectTopKWords(letterNode, word + letter, words, k);
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

const trie = new Trie();
const words = [
    ["cards", 7], 
    ["cart", 9], 
    ["car", 20], 
    ["cat", 10], 
    ["card", 8], 
    ["cartel", 10], 
    ["catalyst", 3], 
    ["california", 4], 
    ["climb", 5], 
    ["clunky", 6], 
    ["cartharsis", 1], 
    ["cord", 5], 
    ["catastrophe", 2], 
    ["aardvark", 2]
];

words.forEach(entry => trie.insert(entry[0], entry[1]));
console.log("trie:", JSON.stringify(trie, null, 4));

// const testWords = ["car", "cart", "cartel", "card", "cat", "catalyst"];

// testWords.forEach(word => console.log(`search ${word}`, trie.search(word)));

// console.log(`startsWith card:`, trie.startsWith("card"));
// console.log(`collectAllWords c:`, trie.collectAllWords(
//     trie.startsWith("c"),
//     "c"
// ));
// console.log(`collectAllWords:`, trie.collectAllWords(
//     trie.root,
//     ""
// ));
// console.log(`collectAllWords c:`, trie.collectAllWords(
//     trie.startsWith("c"),
//     "c"
// ));
console.log(`collectTopKWords:`, trie.collectTopKWords(
    trie.root,
    ""
));
