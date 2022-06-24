class Vertex<Type extends Comparable<Type>> {
    value: Type;
    outVertices: Array<Vertex<Type>>;

    constructor(value: Type) {
        this.value = value;
        this.outVertices = [];
    }

    addOutVertex(vertex: Vertex<Type>) {
        this.outVertices.push(vertex);
    }

    /**
     * @param vertex The sought-for element in the array
     * @returns The index in the array of vertices containing the sought-for element, -1 if not found.
     */
    find(vertex: Vertex<Type>): number {
        for (var i = 0; i < this.outVertices.length; i++) {
            if (this.outVertices[i].value.equals(vertex.value)) {
                return i;
            }
        }
        return -1;
    }

    toString(): string {
        return "Vertex(" + this.value.toString() + ")";
    }
}

class Graph<Type extends Comparable<Type>> {
    vertices: Array<Vertex<Type>>;

    constructor() {
        this.vertices = [];
    }

    /**
     * @param vertex The sought-for element in the array
     * @returns The index in the array of vertices containing the sought-for element, -1 if not found.
     */
    find(vertex: Vertex<Type>): number {
        for (var i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i].value.equals(vertex.value)) {
                return i;
            }
        }
        return -1;
    }

    addVertex(vertex: Vertex<Type>): void {
        if (this.find(vertex) == -1) {
            this.vertices.push(vertex);
        } else {
            console.log("The vertex " + vertex.toString() + " is already in the graph");
        }
    }

    addEdge(from: Vertex<Type>, to: Vertex<Type>): void {
        let i: number = this.find(from);
        if (i != -1) {
            if (this.vertices[i].find(to) == -1) {
                this.vertices[i].addOutVertex(to);
            } else {
                console.log("The edge between " + from.toString() + " and " + to.toString() + " already exists.");
            }
        }
    }
}