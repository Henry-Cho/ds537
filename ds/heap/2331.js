class Heap {
    data;
    constructor() {
        this.data = [];
    }
    hasGreaterChild(ix) {
        const leftIx = this.leftIndex(ix);
        const rightIx = this.rightIndex(ix);
        return (this.data[leftIx] && this.data[leftIx] > this.data[ix]) ||
            (this.data[rightIx] && this.data[rightIx] > this.data[ix]);
    }
    largerChildIndex(ix) {
        if (!this.data[this.rightIndex(ix)]) {
            return this.leftIndex(ix);
        } else if (!this.data[this.leftIndex(ix)]) {
            return this.rightIndex(ix);
        } else {
            if (this.data[this.leftIndex(ix)] > this.data[this.rightIndex(ix)]) {
                return this.leftIndex(ix);
            } else {
                return this.rightIndex(ix);
            }
        }
    }
    leftIndex(i) {
        return i * 2 + 1;
    }
    rightIndex(i) {
        return i * 2 + 2;
    }
    parentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    read() {
        return this.data[0];
    }
    delete() {
        if (this.data.length <= 1) {
            this.data = [];
            return;
        }
        this.data[0] = this.data.pop();
        let trickleIx = 0;
        while (this.hasGreaterChild(trickleIx)) {
            const largerChildIx = this.largerChildIndex(trickleIx);
            [this.data[trickleIx], this.data[largerChildIx]] = [this.data[largerChildIx], this.data[trickleIx]];
            trickleIx = largerChildIx;
        }
    }
    insert(value) {
        this.data.push(value);
        let valueIx = this.data.length - 1;
        let parentIx = this.parentIndex(valueIx);
        while (parentIx >= 0 && this.data[valueIx] > this.data[parentIx]) {
            [this.data[valueIx], this.data[parentIx]] = [this.data[parentIx], this.data[valueIx]];
            valueIx = parentIx;
            parentIx = this.parentIndex(valueIx);
        }
    }
}

var lastStoneWeight = function(stones) {
    const stoneQueue = new Heap();

    stones.forEach(stone => {
        stoneQueue.insert(stone);
    })

    while (stoneQueue.data.length >= 2) {
        const stone1 = stoneQueue.read();
        stoneQueue.delete();
        const stone2 = stoneQueue.read();
        stoneQueue.delete();

        const difference = stone1 - stone2;

        if (difference > 0) {
            stoneQueue.insert(difference);
        }
    }

    return stoneQueue.data.length > 0 ? stoneQueue.read() : 0;
};