var container = document.getElementById('animation-container');
var canvas = document.createElement('canvas');
container === null || container === void 0 ? void 0 : container.appendChild(canvas);
var a = new GraphAnimation(canvas);
a.generateSquare();
a.draw();
