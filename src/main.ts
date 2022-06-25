const container = document.getElementById('animation-container');
const canvas = document.createElement('canvas');
container?.appendChild(canvas);

let a = new GraphAnimation(canvas);
a.generateParabola();

/**
 * Chooses the radius and the color of the vertex, as well as whether to it appears filled of stroked
 * @param vertex The vertex to visualise.
 * @returns Data to draw a circular representation of the vertex.
 */
function vertexToCirlceV2(vertex: Vertex<Vector2>) {
    let location: Vector2 = vertex.value;
    let radius: number = 5;
    let color: Color = Color.OffWhite;

    return {
        location: location,
        radius: radius,
        color: color,
    };
}

/**
 * Calculates the point(s) of origin of the edge line and places it on the border of the vertex
 * @param from The origin of the edge.
 * @param to The destination of the edge.
 * @return Data to draw an edge, including the coordiantes and the color.
 */
function edgeToLineV2(from: Vertex<Vector2>, to: Vertex<Vector2>, radiusFrom: number, radiusTo: number) {
    let scalar: number = from.value.distance(to.value) - radiusFrom - radiusTo;
    let directionVector: Vector2 = new Vector2(to.value.x - from.value.x, to.value.y - from.value.y).normalise();
    let origin: Vector2 = from.value.add(directionVector.scale(radiusFrom));
    let destination: Vector2 = origin.add(directionVector.scale(scalar));
    
    let color = Color.OffWhite;

    return {
        origin: origin,
        destination: destination,
        color: color,
    }
}

edgeToLineV2(a.points.vertices[0], a.points.vertices[1], 5, 5);

a.draw(vertexToCirlceV2, edgeToLineV2);