// Best way through the path
// => Shortest Path

// Big O 
// O(V2 log V) -> If we do all the vertices
// O(V log V)

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
