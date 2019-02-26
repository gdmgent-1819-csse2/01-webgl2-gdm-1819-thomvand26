export default class Matrix4
{
    constructor(items) {
        this.items = items || [
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0,
        ]
    }

    /**
     * Matrix addition
     * 
     * @param {Matrix4} b
     */
    add(b) {
        const a = this.items;

        this.items = [
            (a[0] + b[0]), (a[1] + b[1]), (a[2] + b[2]), (a[3] + b[3]),
            (a[4] + b[4]), (a[5] + b[5]), (a[6] + b[6]), (a[7] + b[7]),
            (a[8] + b[8]), (a[9] + b[9]), (a[10] + b[10]), (a[11] + b[11]),
            (a[12] + b[12]), (a[13] + b[13]), (a[14] + b[14]), (a[15] + b[15]),
        ]
    }

    /**
     * Matrix subtraction
     * 
     * @param {Matrix4} b
     */
    sub(b) {
        const a = this.items

        this.items = [
            (a[0] - b[0]), (a[1] - b[1]), (a[2] - b[2]), (a[3] - b[3]),
            (a[4] - b[4]), (a[5] - b[5]), (a[6] - b[6]), (a[7] - b[7]),
            (a[8] - b[8]), (a[9] - b[9]), (a[10] - b[10]), (a[11] - b[11]),
            (a[12] - b[12]), (a[13] - b[13]), (a[14] - b[14]), (a[15] - b[15]),
        ]
    }

    /**
     * Matrix multiplication
     * 
     * @param {Matrix4} b
     */
    mul(b) {
        const a = this.items

        const c_0 = (a[0] * b[0]) + (a[1] * b[4]) + (a[2] * b[8]) + (a[3] * b[12]);
        const c_1 = (a[0] * b[1]) + (a[1] * b[5]) + (a[2] * b[9]) + (a[3] * b[13]);
        const c_2 = (a[0] * b[2]) + (a[1] * b[6]) + (a[2] * b[10]) + (a[3] * b[14]);
        const c_3 = (a[0] * b[3]) + (a[1] * b[7]) + (a[2] * b[11]) + (a[3] * b[15]);

        const c_4 = (a[4] * b[0]) + (a[5] * b[4]) + (a[6] * b[8]) + (a[7] * b[12]);
        const c_5 = (a[4] * b[1]) + (a[5] * b[5]) + (a[6] * b[9]) + (a[7] * b[13]);
        const c_6 = (a[4] * b[2]) + (a[5] * b[6]) + (a[6] * b[10]) + (a[7] * b[14]);
        const c_7 = (a[4] * b[3]) + (a[5] * b[7]) + (a[6] * b[11]) + (a[7] * b[15]);

        const c_8 = (a[8] * b[0]) + (a[9] * b[4]) + (a[10] * b[8]) + (a[11] * b[12]);
        const c_9 = (a[8] * b[1]) + (a[9] * b[5]) + (a[10] * b[9]) + (a[11] * b[13]);
        const c_10 = (a[8] * b[2]) + (a[9] * b[6]) + (a[10] * b[10]) + (a[11] * b[14]);
        const c_11 = (a[8] * b[3]) + (a[9] * b[7]) + (a[10] * b[11]) + (a[11] * b[15]);
        
        const c_12 = (a[12] * b[0]) + (a[13] * b[4]) + (a[14] * b[8]) + (a[15] * b[12]);
        const c_13 = (a[12] * b[1]) + (a[13] * b[5]) + (a[14] * b[9]) + (a[15] * b[13]);
        const c_14 = (a[12] * b[2]) + (a[13] * b[6]) + (a[14] * b[10]) + (a[15] * b[14]);
        const c_15 = (a[12] * b[3]) + (a[13] * b[7]) + (a[14] * b[11]) + (a[15] * b[15]);

        this.items = [
        c_0, c_1, c_2, c_3, 
        c_4, c_5, c_6, c_7, 
        c_8, c_9, c_10, c_11, 
        c_12, c_13, c_14, c_15,
        ]
    }

    /**
     * Transpose matrix
     */
    transpose(){
        const a = this.items

        this.items = [
            a[0], a[4], a[8], a[12],
            a[1], a[5], a[9], a[13],
            a[2], a[6], a[10], a[14],
            a[3], a[7], a[11], a[15],
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
            1, 0, 0, 0,
            0, Math.cos(a), -Math.sin(a), 0,
            0, Math.sin(a), Math.cos(a), 0,
            0, 0, 0, 1,
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
            Math.cos(a), 0, Math.sin(a), 0,
            0, 1, 0, 0,
            -Math.sin(a), 0, Math.cos(a), 0,
            0, 0, 0, 1,
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
            Math.cos(a), -Math.sin(a), 0, 0,
            Math.sin(a), Math.cos(a), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]

        this.mul(r)
    }

}