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


// Big O of Binary Heaps
// insertion - O (log n) -> always insert from the last
// deletion - O (log n) -> always delete from the first
// search - O (n)

// heap sort?

// Useful data structures for sorting, and implementing other data structures like priority queue

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
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

            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;

        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;

            // trickle down
            this.sinkDown();
        }

        console.log(this.values);
        return max;
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

let heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.extractMax();


