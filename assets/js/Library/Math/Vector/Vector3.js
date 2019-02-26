export default class Vector3 {
    constructor(x,y,z) {
        /**
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
    }

    /**
     * Length of the vector.
     */
    norm () {
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2);
    }

    /**
     * Normalization
     */
    normalize () {
        const norm = Math.sqrt(this.x**2 + this.y**2 + this.z**2);

        this.x /= norm;
        this.y /= norm;
        this.z /= norm;
    }

    /**
     * Addition
     * 
     * @param {Vector3} v 
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }

    /**
     * Substraction
     * 
     * @param {Vector3} v 
     */
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }

    /**
     * Scalar multiplication
     * 
     * @param {Number} a 
     */
    scalar(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
    }

    /**
     * Dot product (= scalar product)
     * 
     * @param {Vector3} v
     */
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    /**
     * Cross product (= scalar product)
     * (Convert to normal)
     * 
     * @param {Vector3} v
     */
    cross(v) {
        const tempX = this.y * v.z - this.z * v.y;
        const tempY = this.z * v.x - this.x * v.z;
        const tempZ = this.x * v.y - this.y * v.x;

        this.x = tempX;
        this.y = tempY;
        this.z = tempZ;

        return new Vector3(tempX, tempY, tempZ);
    }
}