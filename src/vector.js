var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * @param other The other vector.
     * @returns The euclidian distance between this vector and other.
     */
    Vector2.prototype.distance = function (other) {
        var dx2 = (this.x - other.x) * (this.x - other.x);
        var dy2 = (this.y - other.y) * (this.y - other.y);
        return Math.sqrt(dx2 + dy2);
    };
    /**
     * @returns The euclidian distance from origin.
     */
    Vector2.prototype.distanceFromOrigin = function () {
        return this.distance(Vector2.ZERO);
    };
    /**
     * @param other The other vector.
     * @returns Whether the distance from origin of the other vector is greater, less than or equal to the distance from origin of this vector.
     */
    Vector2.prototype.compareTo = function (other) {
        if (this.distanceFromOrigin() < other.distanceFromOrigin()) {
            return -1;
        }
        else if (this.distanceFromOrigin() > other.distanceFromOrigin()) {
            return 1;
        }
        else {
            return 0;
        }
    };
    /**
     * @param other The other vector.
     * @returns Whether the coordinates of the other vector are the same as this vector. Complements Vector2.compareTo(other).
     */
    Vector2.prototype.equals = function (other) {
        return this.x == other.x && this.y == other.y;
    };
    Vector2.prototype.toString = function () {
        return "Vector2<" + this.x + ", " + this.y + ">";
    };
    Vector2.ZERO = new Vector2(0, 0);
    return Vector2;
}());
