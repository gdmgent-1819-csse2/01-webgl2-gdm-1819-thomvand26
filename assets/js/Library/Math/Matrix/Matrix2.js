export default class Matrix2
{
    constructor(items) {
        this.items = items || [
          0, 0,
          0, 0,
        ]
    }

    /**
     * Matrix addition
     * 
     * @param {Matrix2} b
     */
    add(b) {
        const a = this.items;

        this.items = [
            (a[0] + b[0]), (a[1] + b[1]), 
            (a[2] + b[2]), (a[3] + b[3]),
        ]
    }

    /**
     * Matrix subtraction
     * 
     * @param {Matrix2} b
     */
    sub(b) {
        const a = this.items

        this.items = [
            (a[0] - b[0]), (a[1] - b[1]), 
            (a[2] - b[2]), (a[3] - b[3]),
        ]
    }

    /**
     * Matrix multiplication
     * 
     * @param {Matrix2} b
     */
    mul(b) {
        const a = this.items

        const c_0 = (a[0] * b[0]) + (a[1] * b[2]);
        const c_1 = (a[0] * b[1]) + (a[1] * b[3]);

        const c_2 = (a[2] * b[0]) + (a[3] * b[2]);
        const c_3 = (a[2] * b[1]) + (a[3] * b[3]);

        this.items = [
        c_0, c_1, 
        c_2, c_3,
        ]
    }

    /**
     * Transpose matrix
     */
    transpose(){
        const a = this.items

        this.items = [
            a[0], a[2],
            a[1], a[3],
        ]
    }

    /**
     * Matrix rotation
     * 
     * @param {Number} a - The counter-clockwise angle in degrees
     */
    rot(a){
        a *= Math.PI / 180;

        const r = [
            Math.cos(a), -Math.sin(a),
            Math.sin(a), Math.cos(a),
        ]

        this.mul(r)
    }

}