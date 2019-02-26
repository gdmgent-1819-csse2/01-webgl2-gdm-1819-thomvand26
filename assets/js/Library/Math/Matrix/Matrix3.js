export default class Matrix3
{
    constructor(items) {
        this.items = items || [
          0, 0, 0,
          0, 0, 0,
          0, 0, 0,
        ]
    }

    /**
     * Matrix addition
     * 
     * @param {Matrix3} b
     */
    add(b) {
        const a = this.items;

        this.items = [
            (a[0] + b[0]), (a[1] + b[1]), (a[2] + b[2]), 
            (a[3] + b[3]), (a[4] + b[4]), (a[5] + b[5]), 
            (a[6] + b[6]), (a[7] + b[7]), (a[8] + b[8]),
        ]
    }

    /**
     * Matrix subtraction
     * 
     * @param {Matrix3} b
     */
    sub(b) {
        const a = this.items

        this.items = [
            (a[0] - b[0]), (a[1] - b[1]), (a[2] - b[2]), 
            (a[3] - b[3]), (a[4] - b[4]), (a[5] - b[5]), 
            (a[6] - b[6]), (a[7] - b[7]), (a[8] - b[8]),
        ]
    }

    /**
     * Matrix multiplication
     * 
     * @param {Matrix3} b
     */
    mul(b) {
        const a = this.items

        const c_0 = (a[0] * b[0]) + (a[1] * b[3]) + (a[2] * b[6]);
        const c_1 = (a[0] * b[1]) + (a[1] * b[4]) + (a[2] * b[7]);
        const c_2 = (a[0] * b[2]) + (a[1] * b[5]) + (a[2] * b[8]);

        const c_3 = (a[3] * b[0]) + (a[4] * b[3]) + (a[5] * b[6]);
        const c_4 = (a[3] * b[1]) + (a[4] * b[4]) + (a[5] * b[7]);
        const c_5 = (a[3] * b[2]) + (a[4] * b[5]) + (a[5] * b[8]);
        
        const c_6 = (a[6] * b[0]) + (a[7] * b[3]) + (a[8] * b[6]);
        const c_7 = (a[6] * b[1]) + (a[7] * b[4]) + (a[8] * b[7]);
        const c_8 = (a[6] * b[2]) + (a[7] * b[5]) + (a[8] * b[8]);

        this.items = [
        c_0, c_1, c_2,
        c_3, c_4, c_5,
        c_6, c_7, c_8,
        ]
    }

    /**
     * Transpose matrix
     */
    transpose(){
        const a = this.items

        this.items = [
            a[0], a[3], a[6],
            a[1], a[4], a[7],
            a[2], a[5], a[8],
        ]
    }

    /**
     * Matrix rotation around the x-axis
     * 
     * @param {Number} a - The counter-clockwise angle in degrees
     */
    rotX(a){
        a *= Math.PI / 180;

        const r = [
            1, 0, 0,
            0, Math.cos(a), -Math.sin(a),
            0, Math.sin(a), Math.cos(a),
        ]

        this.mul(r)
    }

    /**
     * Matrix rotation around the y-axis
     * 
     * @param {Number} a - The counter-clockwise angle in degrees
     */
    rotY(a){
        a *= Math.PI / 180;

        const r = [
            Math.cos(a), 0, Math.sin(a),
            0, 1, 0,
            -Math.sin(a), 0, Math.cos(a),
        ]

        this.mul(r)
    }

    /**
     * Matrix rotation around the z-axis
     * 
     * @param {Number} a - The counter-clockwise angle in degrees
     */
    rotZ(a){
        a *= Math.PI / 180;

        const r = [
            Math.cos(a), -Math.sin(a), 0,
            Math.sin(a), Math.cos(a), 0,
            0, 0, 1,
        ]

        this.mul(r)
    }

}