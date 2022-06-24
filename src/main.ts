const container = document.getElementById('animation-container');
const canvas = document.createElement('canvas');
container?.appendChild(canvas);

let a = new GraphAnimation(canvas);
a.generateVertices();
a.draw();