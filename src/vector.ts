class Vector2 implements Comparable<Vector2> {
    static ZERO: Vector2 = new Vector2(0, 0);

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * @param other The other vector.
     * @returns The euclidian distance between this vector and other.
     */
    distance(other: Vector2): number {
        let dx2 = (this.x - other.x) * (this.x - other.x);
        let dy2 = (this.y - other.y) * (this.y - other.y);
        return Math.sqrt(dx2 + dy2);
    }

    /**
     * @returns The euclidian distance from origin.
     */
    distanceFromOrigin(): number {
        return this.distance(Vector2.ZERO);
    }

    /**
     * @param other The other vector.
     * @returns Whether the distance from origin of the other vector is greater, less than or equal to the distance from origin of this vector.
     */
    compareTo(other: Vector2): number {
        if (this.distanceFromOrigin() < other.distanceFromOrigin()) {
            return -1;
        } else if (this.distanceFromOrigin() > other.distanceFromOrigin()) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * @param other The other vector.
     * @returns Whether the coordinates of the other vector are the same as this vector. Complements Vector2.compareTo(other).
     */
    equals(other: Vector2): boolean {
        return this.x == other.x && this.y == other.y;
    }

    /**
     * Adds two vectors together.
     * @param other The vector that is to add to the calling object.
     * @returns A new vector with the result of the addition.
     */
    add(other: Vector2): Vector2 {
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    /**
     * Negates the coordinate values of the vector.
     * @returns A new negated vector.
     */
    negate(): Vector2 {
        return new Vector2(-this.x, -this.y);
    }

    /**
     * Normalises the vector by scaling it to the unit distance.
     * @returns A new normalised vector.
     */
    normalise(): Vector2 {
        let scalar: number = 1 / this.distanceFromOrigin();
        return this.scale(scalar);
    }

    /**
     * Scales the vector by the provided value.
     * @param scalar The factor by which to multiply both coordinates.
     * @returns A new scaled vector.
     */
    scale(scalar: number): Vector2 {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    toString(): string {
        return "Vector2<" + this.x + ", " + this.y + ">";
    }
}