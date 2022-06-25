var GraphAnimation = /** @class */ (function () {
    function GraphAnimation(canvas) {
        this.canvas = canvas;
        this.setupCanvas();
        this.points = new Graph();
    }
    /**
     * Sets the size of the canvas to the size of the window, scales for high resolution screens.
     */
    GraphAnimation.prototype.setupCanvas = function () {
        // Get the device pixel ratio of the screen
        this.dpr = window.devicePixelRatio || 1;
        // Get the inner width and height of the browser window and set the size of the canvas to those values times the DPR
        this.canvas.width = window.innerWidth * this.dpr;
        this.canvas.height = window.innerHeight * this.dpr;
        // Squish the canvas through CSS to its software pixel size
        this.canvas.style.width = window.innerWidth.toString();
        this.canvas.style.height = window.innerHeight.toString();
        // Set up context
        this.context = this.canvas.getContext('2d');
        this.context.scale(this.dpr, this.dpr);
    };
    /**
     * Generates a graph, using a random number generator, while applying several constraints
     */
    GraphAnimation.prototype.generateParabola = function () {
        var v1 = new Vertex(new Vector2(200, 200));
        var v2 = new Vertex(new Vector2(250, 350));
        var v3 = new Vertex(new Vector2(300, 400));
        var v4 = new Vertex(new Vector2(350, 350));
        var v5 = new Vertex(new Vector2(400, 200));
        this.points.addVertex(v1);
        this.points.addVertex(v2);
        this.points.addVertex(v3);
        this.points.addVertex(v4);
        this.points.addVertex(v5);
        this.points.addEdge(v1, v2);
        this.points.addEdge(v2, v3);
        this.points.addEdge(v3, v4);
        this.points.addEdge(v4, v5);
    };
    /**
     * @TODO randomise the choice
     * @returns A random color from a specified array of colors suitable for vertices.
     */
    GraphAnimation.prototype.pickVertexColor = function () {
        return Color.OffWhite;
    };
    /**
     * Helper method for the GraphAnimation.draw() method.
     * Fills the background of the canvas with the specified color.
     * @param color The color to fill the background with.
     */
    GraphAnimation.prototype.fillBackground = function (color) {
        if (this.context != null) {
            this.context.fillStyle = color;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };
    /**
     * Helper method for the GraphAnimation.draw() method.
     * @param data
     */
    GraphAnimation.prototype.drawCircle = function (data) {
        if (this.context != null) {
            this.context.strokeStyle = data.color;
            this.context.beginPath();
            this.context.arc(data.location.x, data.location.y, data.radius, 0, Math.PI * 2, true);
            this.context.closePath();
            this.context.stroke();
        }
    };
    GraphAnimation.prototype.drawLine = function (data) {
        if (this.context != null) {
            this.context.strokeStyle = data.color;
            this.context.beginPath();
            this.context.moveTo(data.origin.x, data.origin.y);
            this.context.lineTo(data.destination.x, data.destination.y);
            this.context.closePath();
            this.context.stroke();
        }
    };
    /**
     * @TODO a lot
     * Draws the whole graph
     */
    GraphAnimation.prototype.draw = function (vertexToCirlce, edgeToLine) {
        if (this.context != null) {
            this.fillBackground(Color.Anthracite);
            for (var i = 0; i < this.points.vertices.length; i++) {
                var v = this.points.vertices[i];
                var vertexData = vertexToCirlce(v);
                this.drawCircle(vertexData);
                for (var j = 0; j < v.outVertices.length; j++) {
                    console.log("Edge");
                    var w = v.outVertices[j];
                    var edgeData = edgeToLine(v, w, vertexData.radius, vertexToCirlce(w).radius);
                    this.drawLine(edgeData);
                }
            }
        }
    };
    return GraphAnimation;
}());
