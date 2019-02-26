import Matrix3 from '../../../../Library/Math/Matrix/Matrix3.js';

export default class Matrix3Test {
    constructor() {
        console.log('Running Matrix3 test...');
        const a1 = [
            6,8,2,
            5,7,2,
            9,7,6,
        ];

        const a2 = [
            8,4,8,
            5,7,4,
            7,2,3,
        ]

        const a3 = [
            4,5,7,
            5,7,1,
            3,7,6,
        ]

        const m1 = new Matrix3(a3);
        const m2 = new Matrix3(a3);
        const m3 = new Matrix3(a3);
        const m4 = new Matrix3(a3);
        const m5 = new Matrix3(a3);
        const m6 = new Matrix3(a3);
        const m7 = new Matrix3(a3);



        
        console.log('Test1: add');
        m1.add(a1);
        console.log('expected value: ' + [10, 13, 9, 10, 14, 3, 12, 14, 12]);
        console.log('actual value: ', m1);

        console.log('Test2: sub');
        m2.sub(a2);
        console.log('expected value: ' + [-4, 1, -1, 0, 0, -3, -4, 5, 3]);
        console.log('actual value: ', m2);

        console.log('Test3: mul');
        m3.mul(a1);
        console.log('expected value: ' + [112, 116, 60, 74, 96, 30, 107, 115, 56]);
        console.log('actual value: ', m3);

        console.log('Test4: transpose');
        m4.transpose();
        console.log('expected value: ' + [4, 5, 3, 5, 7, 7, 7, 1, 6]);
        console.log('actual value: ', m4);

        console.log('Test5: rotX');
        m5.rotX(40);
        console.log('expected value: ' + [4, 8.329735483400665, 2.14837305340015, 5, 6.005098711519386, -3.7334688246867964, 3, 9.219036759952083, 0.09675339090809398]);
        console.log('actual value: ', m5);

        console.log('Test6: rotY');
        m6.rotY(10);
        console.log('expected value: ' + [2.7236937683803197, 5, 7.588246981753177, 4.75039058739411, 7, 1.8530486413468596, 1.912534193035042, 7, 6.429791051074039]);
        console.log('actual value: ', m6);

        console.log('Test7: rotZ');
        m7.rotZ(10);
        console.log('expected value: ' + [4.807471900383484, 4.2294460543933186, 7, 6.139576008729552, 6.025413382750805, 1, 4.169960502705136, 6.372709738084665, 6]);
        console.log('actual value: ', m7);

        console.log('Test finished.');
    }
}