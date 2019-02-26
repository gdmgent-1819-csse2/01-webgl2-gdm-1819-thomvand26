import Matrix2 from '../../../../Library/Math/Matrix/Matrix2.js';

export default class Matrix2Test {
    constructor() {
        console.log('Running Matrix2 test...');
        const a1 = [
            6,8,
            5,7,
        ];

        const a2 = [
            8,4,
            5,7,
        ]

        const a3 = [
            4,8,
            5,7,
        ]

        const m1 = new Matrix2(a3);
        const m2 = new Matrix2(a3);
        const m3 = new Matrix2(a3);
        const m4 = new Matrix2(a3);
        const m5 = new Matrix2(a3);



        
        console.log('Test1: add');
        m1.add(a1);
        console.log('expected value: ' + [10, 16, 10, 14]);
        console.log('actual value: ', m1);

        console.log('Test2: sub');
        m2.sub(a2);
        console.log('expected value: ' + [-4, 1, -1, 0, 0, -3, -4, 5, 3]);
        console.log('actual value: ', m2);

        console.log('Test3: mul');
        m3.mul(a1);
        console.log('expected value: ' + [64, 88, 65, 89]);
        console.log('actual value: ', m3);

        console.log('Test4: transpose');
        m4.transpose();
        console.log('expected value: ' + [4, 5, 8, 7]);
        console.log('actual value: ', m4);

        console.log('Test5: rot');
        m5.rot(40);
        console.log('expected value: ' + [8.206478649968226, 3.557205106205667, 8.329735483400665, 2.14837305340015]);
        console.log('actual value: ', m5);

        console.log('Test finished.');
    }
}