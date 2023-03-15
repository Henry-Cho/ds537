// Binary Heaps

// Simialr to BST but with some different rules
// In a MaxBinaryHeap, parent nodes are always larger than child nodes.

// Each parent has at most two child nodes
// The value of each parent node is always greater than its child nodes
// In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
// A binary heap is as compact as possible. All the children of each nodes are as full as they can be
// Left children are filled out first

// In a MinBinaryHeap, parent nodes are always smaller than child nodes.

// For any index of an array n...
// The left child is stored at 2n + 1
// The right child is at 2n + 2

// For any child node at index n...
// Its parent is at (n-1) / 2 -> floored

// Deletion
// Sink donwn?
// The procedure for deleting the root from the heap 
// (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap)
// and restoring the properties is called down-heap

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();

        console.log(this.values)
        return this.values;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element.priority >= parent.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;

        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;

            // trickle down
            this.sinkDown();
        }

        console.log(this.values);
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            idx = swap;
        }
    }
}

let er = new PriorityQueue();
er.enqueue("common cold", 5)
er.enqueue("gunshot wound", 1)
er.enqueue("high fever", 4)
er.enqueue("broken arm", 2)
er.enqueue("glass in foot", 3)
er.dequeue();
er.dequeue();
er.dequeue();
// heap.extractMax();


