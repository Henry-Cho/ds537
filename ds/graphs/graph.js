// Graph = Node + Connections

// Vertex = Node
// Edge = Connection between Nodes

// cycle: path from vertex to itself
// tree: a graph that has no cycle
// connected graph: has exactly only one component

// Undirected -> There is no direction associated with nodes (not one way relationship)
// Directed -> (arrows) There is direction assigned to edges = Digraph

// Unweighted
// Weighted = We assign values to edges

// Storing Graphs
// Adjacency Matrix

// Adjacency List
// 1. Take less space
// 2. Faster to iterate over all edges
// 3. Can be slower to lookup specific edge

// Adjacency Matrix
// 1. Take More space
// 2. Slower to iterate over all edges
// 3. Faster to lookup specific edge

class Vertex {
    constructor(value) {
        this.value = value;
        this.adjacentVertices = [];
    }

    addAdjacentVertex(vertex) {
        if (this.adjacentVertices.includes(vertex)) {
            return;
        }
        this.adjacentVertices.push(vertex);
        vertex.addAdjacentVertex(this);
    }
}

function dfsTraverse(vertex, visitedVertices = {}) {
    visitedVertices[vertex.value] = true;

    console.log(vertex.value);

    for (adjacentVertex of vertex.adjacentVertices) {
        if (!visitedVertices[adjacentVertex.value]) {
            dfsTraverse(adjacentVertex, visitedVertices);
        }
    }
}

function bfsTraverse(vertex) {
    let queue = [vertex];
    let visitedVertices = {};
    
    while (queue.length > 0) {
        const currentVertext = queue.shift();

        if (!visitedVertices[currentVertext.value]) {
            console.log(currentVertext.value);
            visitedVertices[currentVertext.value] = true;

            for (const adjacentVertex of currentVertext.adjacentVertices) {
                if (!visitedVertices[adjacentVertex.value]) {
                    queue.push(adjacentVertex);
                }
            }
        }
    }

    visitedVertices[vertex.value] = true;

    



}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

        console.log(this);
    }

    removeEdge(vertex1, vertex2) {
        let idx1 = this.adjacencyList[vertex1].findIndex((v) => v === vertex2);
        this.adjacencyList[vertex1].splice(idx1, 1);

        let idx2 = this.adjacencyList[vertex2].findIndex((v) => v === vertex1);
        this.adjacencyList[vertex2].splice(idx2, 1);
    }

    removeVertex(vertex1) {
        let obj_list = Object.keys(this.adjacencyList);

        obj_list.forEach((vertex2) => {
            this.removeEdge(vertex1, vertex2);
        })

        delete this.adjacencyList[vertex1];

        console.log(this);
    }
}

let g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

g.removeVertex("Dallas")


let a = new Vertex("Alice");
let b = new Vertex("Bob");
let c = new Vertex("Cynthia");
let d = new Vertex("Dianna");
let e = new Vertex("Elise");
let f = new Vertex("Fred");

a.addAdjacentVertex(b);
b.addAdjacentVertex(c);
a.addAdjacentVertex(d);
b.addAdjacentVertex(d);
e.addAdjacentVertex(f);
d.addAdjacentVertex(f);

console.log(a, b, c, d, e, f);

console.log("Traversing a");
dfsTraverse(a);
console.log("____________________")
bfsTraverse(a);