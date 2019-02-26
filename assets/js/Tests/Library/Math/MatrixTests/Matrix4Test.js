import Matrix4 from '../../../../Library/Math/Matrix/Matrix4.js';

export default class Matrix4Test {
    constructor() {
        console.log('Running Matrix4 test...');
        const a1 = [
            6,8,2,4,
            5,7,2,6,
            9,7,6,5,
            7,4,8,9,
        ];

        const a2 = [
            8,4,8,6,
            5,7,4,5,
            7,2,3,1,
            5,4,9,1,
        ]

        const a3 = [
            4,5,7,1,
            5,7,1,3,
            3,7,6,8,
            8,6,6,4,
        ]

        const m1 = new Matrix4(a3);
        const m2 = new Matrix4(a3);
        const m3 = new Matrix4(a3);
        const m4 = new Matrix4(a3);
        const m5 = new Matrix4(a3);
        const m6 = new Matrix4(a3);
        const m7 = new Matrix4(a3);



        
        console.log('Test1: add');
        m1.add(a1);
        console.log('expected value: ' + [10, 13, 9, 5, 10, 14, 3, 9, 12, 14, 12, 13, 15, 10, 14, 13]);
        console.log('actual value: ', m1);

        console.log('Test2: sub');
        m2.sub(a2);
        console.log('expected value: ' + [-4, 1, -1, -5, 0, 0, -3, -2, -4, 5, 3, 7, 3, 2, -3, 3]);
        console.log('actual value: ', m2);

        console.log('Test3: mul');
        m3.mul(a1);
        console.log('expected value: ' + [119, 120, 68, 90, 95, 108, 54, 94, 163, 147, 120, 156, 160, 164, 96, 134]);
        console.log('actual value: ', m3);

        console.log('Test4: transpose');
        m4.transpose();
        console.log('expected value: ' + [4, 5, 3, 8, 5, 7, 7, 6, 7, 1, 6, 6, 1, 3, 8, 4]);
        console.log('actual value: ', m4);

        console.log('Test5: rotX');
        m5.rotX(40);
        console.log('expected value: ' + [4, 8.329735483400665, 2.14837305340015, 1, 5, 6.005098711519386, -3.7334688246867964, 3, 3, 9.219036759952083, 0.09675339090809398, 8, 8, 8.452992316833104, 0.7395410005946328, 4]);
        console.log('actual value: ', m5);

        console.log('Test6: rotY');
        m6.rotY(10);
        console.log('expected value: ' + [2.7236937683803197, 5, 7.588246981753177, 1, 4.75039058739411, 7, 1.8530486413468596, 3, 1.912534193035042, 7, 6.429791051074039, 8, 6.836572958096082, 6, 7.29803193940869, 4]);
        console.log('actual value: ', m6);

        console.log('Test7: rotZ');
        m7.rotZ(10);
        console.log('expected value: ' + [4.807471900383484, 4.2294460543933186, 7, 1, 6.139576008729552, 6.025413382750805, 1, 3, 4.169960502705136, 6.372709738084665, 6, 8, 8.920351090099246, 4.5196610967378055, 6, 4]);
        console.log('actual value: ', m7);

        console.log('Test finished.');
    }
}