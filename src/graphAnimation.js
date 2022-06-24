var GraphAnimation = /** @class */ (function () {
    function GraphAnimation(canvas) {
        this.canvas = canvas;
        this.fullscreen();
        this.context = this.canvas.getContext('2d');
        this.graph = new Graph();
    }
    /**
     * Sets the size of the canvas to the size of the window.
     */
    GraphAnimation.prototype.fullscreen = function () {
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
    };
    /**
     * Generates a graph, using a random number generator, while applying several constraints
     */
    GraphAnimation.prototype.generateVertices = function () {
        var v1 = new Vertex(new Vector2(300, 300));
        var v2 = new Vertex(new Vector2(500, 300));
        var v3 = new Vertex(new Vector2(300, 500));
        var v4 = new Vertex(new Vector2(500, 500));
        this.graph.addVertex(v1);
        this.graph.addVertex(v2);
        this.graph.addVertex(v3);
        this.graph.addVertex(v4);
        this.graph.addEdge(v1, v2);
        this.graph.addEdge(v2, v3);
        this.graph.addEdge(v3, v4);
        this.graph.addEdge(v4, v1);
    };
    /**
     * @TODO randomise the choice
     * @returns A random color from a specified array of colors suitable for vertices.
     */
    GraphAnimation.prototype.pickVertexColor = function () {
        return Color.Bluebonnet;
    };
    /**
     * Helper method for the GraphAnimation.draw() method.
     * Fills the background of the canvas with the specified color.
     * @param color The color to fill the background with.
     */
    GraphAnimation.prototype.fillBackground = function (color) {
        if (this.context != null) {
            this.context.fillStyle = color;
            this.context.rect(0, 0, this.canvas.width, this.canvas.height);
        }
    };
    /**
     * Helper method for the GraphAnimation.draw() method.
     * @param location Where the center of the circle is.
     * @param radius The radius of the circle.
     */
    GraphAnimation.prototype.drawCircle = function (location, radius, color) {
        if (this.context != null) {
            this.context.fillStyle = color;
            this.context.beginPath();
            this.context.arc(location.x, location.y, radius, 0, Math.PI * 2, true);
            this.context.closePath();
            this.context.fill();
        }
    };
    /**
     * @TODO a lot
     * Draws the whole graph
     */
    GraphAnimation.prototype.draw = function () {
        if (this.context != null) {
            console.log("Drawing");
            var radius = 5;
            this.fillBackground(Color.OffWhite);
            for (var i = 0; i < this.graph.vertices.length; i++) {
                var vector = this.graph.vertices[i].value;
                this.drawCircle(vector, radius, this.pickVertexColor());
            }
        }
    };
    return GraphAnimation;
}());
