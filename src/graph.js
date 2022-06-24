var Vertex = /** @class */ (function () {
    function Vertex(value) {
        this.value = value;
        this.outVertices = [];
    }
    Vertex.prototype.addOutVertex = function (vertex) {
        this.outVertices.push(vertex);
    };
    /**
     * @param vertex The sought-for element in the array
     * @returns The index in the array of vertices containing the sought-for element, -1 if not found.
     */
    Vertex.prototype.find = function (vertex) {
        for (var i = 0; i < this.outVertices.length; i++) {
            if (this.outVertices[i].value.equals(vertex.value)) {
                return i;
            }
        }
        return -1;
    };
    Vertex.prototype.toString = function () {
        return "Vertex(" + this.value.toString() + ")";
    };
    return Vertex;
}());
var Graph = /** @class */ (function () {
    function Graph() {
        this.vertices = [];
    }
    /**
     * @param vertex The sought-for element in the array
     * @returns The index in the array of vertices containing the sought-for element, -1 if not found.
     */
    Graph.prototype.find = function (vertex) {
        for (var i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i].value.equals(vertex.value)) {
                return i;
            }
        }
        return -1;
    };
    Graph.prototype.addVertex = function (vertex) {
        if (this.find(vertex) == -1) {
            this.vertices.push(vertex);
        }
        else {
            console.log("The vertex " + vertex.toString() + " is already in the graph");
        }
    };
    Graph.prototype.addEdge = function (from, to) {
        var i = this.find(from);
        if (i != -1) {
            if (this.vertices[i].find(to) == -1) {
                this.vertices[i].addOutVertex(to);
            }
            else {
                console.log("The edge between " + from.toString() + " and " + to.toString() + " already exists.");
            }
        }
    };
    return Graph;
}());
