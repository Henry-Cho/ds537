// Best way through the path
// => Shortest Path

// Big O 
// O(V2 log V) -> If we do all the vertices
// O(V log V)

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight});
        this.adjacencyList[vertex2].push({ node: vertex1, weight});

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

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B", 5)
g.addEdge("A", "C", 7)
g.addEdge("B", "C", 6)


class Vertex {
    constructor(value) {
        this.value = value;
        this.adjacentVertices = [];
        this.distance = Infinity;
        this.previousVertex = null;
    }

    addAdjacentVertex(vertex) {
        if (this.adjacentVertices.includes(vertex)) {
            return;
        }
        this.adjacentVertices.push(vertex);
        // Remove the following statement to make Vertex represent a directed graph
        vertex.addAdjacentVertex(this);
    }
}

function dijkstraShortestPath(startVertex) {
    let unvisitedVertices = [];
    let visitedVertices = {};

    // Set the distance of the start vertex to 0
    startVertex.distance = 0;

    // Add all vertices to the unvisited list
    for (const vertex of getAllVertices(startVertex)) {
        unvisitedVertices.push(vertex);
    }

    while (unvisitedVertices.length > 0) {
        // Find the vertex with the smallest distance
        const currentVertex = unvisitedVertices.reduce((minVertex, vertex) => {
            return vertex.distance < minVertex.distance ? vertex : minVertex;
        }, unvisitedVertices[0]);

        // Remove the current vertex from the unvisited list
        unvisitedVertices = unvisitedVertices.filter(vertex => vertex !== currentVertex);

        // Mark the current vertex as visited
        visitedVertices[currentVertex.value] = true;

        // Update the distances of adjacent vertices
        for (const adjacentVertex of currentVertex.adjacentVertices) {
            if (!visitedVertices[adjacentVertex.value]) {
                const distance = currentVertex.distance + 1; // Use 1 as the edge weight for an unweighted graph

                if (distance < adjacentVertex.distance) {
                    adjacentVertex.distance = distance;
                    adjacentVertex.previousVertex = currentVertex;
                }
            }
        }
    }
}

function getAllVertices(vertex) {
    let vertices = [];
    let queue = [vertex];
    let visitedVertices = {};

    while (queue.length > 0) {
        const currentVertex = queue.shift();

        if (!visitedVertices[currentVertex.value]) {
            vertices.push(currentVertex);
            visitedVertices[currentVertex.value] = true;

            for (const adjacentVertex of currentVertex.adjacentVertices) {
                if (!visitedVertices[adjacentVertex.value]) {
                    queue.push(adjacentVertex);
                }
            }
        }
    }

    return vertices;
}
