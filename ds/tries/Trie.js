class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
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
                words.push(word + letter);
            }

            this.collectAllWords(letterNode, word + letter, words);
        }

        return words;
    }
}

const trie = new Trie();
const words = ["cards", "cart", "car", "cat", "card", "cartel", "catalyst", "california", "climb", "clunky", "cartharsis", "cord", "catastrophe", "aardvark"];

words.forEach(word => trie.insert(word));
console.log("trie:", JSON.stringify(trie, null, 4));

const testWords = ["car", "cart", "cartel", "card", "cat", "catalyst"];

testWords.forEach(word => console.log(`search ${word}`, trie.search(word)));

console.log(`startsWith card:`, trie.startsWith("card"));
console.log(`collectAllWords c:`, trie.collectAllWords(
    trie.startsWith("c"),
    "c"
));
console.log(`collectAllWords:`, trie.collectAllWords(
    trie.root,
    ""
));
