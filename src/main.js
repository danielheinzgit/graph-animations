var container = document.getElementById('animation-container');
var canvas = document.createElement('canvas');
container === null || container === void 0 ? void 0 : container.appendChild(canvas);
var a = new GraphAnimation(canvas);
a.generateParabola();
/**
 * Chooses the radius and the color of the vertex, as well as whether to it appears filled of stroked
 * @param vertex The vertex to visualise.
 * @returns Data to draw a circular representation of the vertex.
 */
function vertexToCirlceV2(vertex) {
    var location = vertex.value;
    var radius = 5;
    var color = Color.OffWhite;
    return {
        location: location,
        radius: radius,
        color: color
    };
}
/**
 * Calculates the point(s) of origin of the edge line and places it on the border of the vertex
 * @param from The origin of the edge.
 * @param to The destination of the edge.
 * @return Data to draw an edge, including the coordiantes and the color.
 */
function edgeToLineV2(from, to, radiusFrom, radiusTo) {
    var scalar = from.value.distance(to.value) - radiusFrom - radiusTo;
    var directionVector = new Vector2(to.value.x - from.value.x, to.value.y - from.value.y).normalise();
    var origin = from.value.add(directionVector.scale(radiusFrom));
    var destination = origin.add(directionVector.scale(scalar));
    var color = Color.OffWhite;
    return {
        origin: origin,
        destination: destination,
        color: color
    };
}
edgeToLineV2(a.points.vertices[0], a.points.vertices[1], 5, 5);
a.draw(vertexToCirlceV2, edgeToLineV2);
