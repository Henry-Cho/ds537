class Vertex {
    constructor(value) {
        this.value = value;
        this.adjacentVertices = {};
    }

    addAdjacentVertex(vertex, weight = 1) {
        if (vertex.value in this.adjacentVertices) {
            return;
        }

        this.adjacentVertices[vertex.value] = [vertex, weight];
        // Remove the following statement to make Vertex represent a directed graph
        vertex.addAdjacentVertex(this, weight);
    }
}

let count = 0;

function bfsTraverse(vertex) {
    const queue = [vertex];
    const visitedVertices = {};

    visitedVertices[vertex.value] = true;

    while (queue.length > 0) {
        const currentVertex = queue.shift();
        count += 1;

        console.log(currentVertex.value);

        Object.entries(currentVertex.adjacentVertices).forEach(([key, entry]) => {
            count += 1;
            if (!visitedVertices[entry[0].value]) {
                visitedVertices[entry[0].value] = true;
                queue.push(entry[0]);
            }
        });
    }
}

function dfsTraverse(vertex, visitedVertices = {}) {
    visitedVertices[vertex.value] = true;
    count += 1;

    console.log(vertex.value);

    for (const adjacentVertex of vertex.adjacentVertices) {
        count += 1;
        if (!visitedVertices[adjacentVertex.value]) {
            dfsTraverse(adjacentVertex, visitedVertices);
        }
    }
}

const a = new Vertex("Alice");
const b = new Vertex("Bob");
const c = new Vertex("Candy");
const d = new Vertex("Derek");
const e = new Vertex("Elaine");
const f = new Vertex("Fred");
const g = new Vertex("Gina");
const h = new Vertex("Helen");
const i = new Vertex("Irena");


a.addAdjacentVertex(b, 5);
a.addAdjacentVertex(c, 6);
a.addAdjacentVertex(d, 2);
a.addAdjacentVertex(e, 4);
b.addAdjacentVertex(f, 7);
c.addAdjacentVertex(h, 3);
d.addAdjacentVertex(g, 6);
f.addAdjacentVertex(h, 1);
g.addAdjacentVertex(i, 8);
d.addAdjacentVertex(e, 9);

console.log(a);

// count = 0;
// console.log("Traversing a (depth-first)");
// dfsTraverse(a);
// console.log("It took", count, "steps");

count = 0;
console.log("Traversing a (breadth-first)");
bfsTraverse(a);
console.log("It took", count, "steps");

// count = 0;
// console.log("Traversing d (breadth-first)");
// bfsTraverse(d);
// console.log("It took", count, "steps");