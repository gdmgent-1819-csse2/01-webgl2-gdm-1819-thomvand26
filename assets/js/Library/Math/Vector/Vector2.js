export default class Vector2 {
    constructor(x,y,z) {
        /**
         * @param {Number} x
         * @param {Number} y
         */
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
    }

    /**
     * Length of the vector.
     */
    norm () {
        return Math.sqrt(this.x**2 + this.y**2);
    }

    /**
     * Normalization
     */
    normalize () {
        const norm = Math.sqrt(this.x**2 + this.y**2);

        this.x /= norm;
        this.y /= norm;
    }

    /**
     * Addition
     * 
     * @param {Vector2} v 
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    /**
     * Substraction
     * 
     * @param {Vector2} v 
     */
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
    }

    /**
     * Scalar multiplication
     * 
     * @param {Number} a 
     */
    scalar(a) {
        this.x *= a;
        this.y *= a;
    }

    /**
     * Dot product (= scalar product)
     * 
     * @param {Vector2} v
     */
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
}