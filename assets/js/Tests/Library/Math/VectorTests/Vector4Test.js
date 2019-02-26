import Vector4 from '../../../../Library/Math/Vector/Vector4.js';

export default class Vector4Test {
    constructor() {
        console.log('Running Vector3 test...');
        const v1 = new Vector4(2,8,9,10);
        const v2 = new Vector4(7,2,3,7);
        const v3 = new Vector4(1,7,5,3);

        console.log('Test1: norm');
        console.log('expected value: ' + 15.7797338380595);
        console.log('actual value: ', v1.norm());

        console.log('Test2: normalize');
        v1.normalize();
        console.log('expected value: ' + 'x: 0.12674485010489558, y: 0.5069794004195823, z: 0.5703518254720301, w: 0.6337242505244779');
        console.log('actual value: ', v1);

        console.log('Test3: add');
        v2.add(v3);
        console.log('expected value: ' + 'x: 8, y: 9, z: 8, w: 10');
        console.log('actual value: ', v2);

        console.log('Test4: sub');
        v3.sub(v2);
        console.log('expected value: ' + 'x: -7, y: -2, z: -3, w: -7');
        console.log('actual value: ', v3);

        console.log('Test5: scalar');
        v2.scalar(4);
        console.log('expected value: ' + 'x: 32, y: 36, z: 32, w: 40');
        console.log('actual value: ', v2);

        console.log('Test6: dot');
        console.log('expected value: ' + '65.9073220545457');
        console.log('actual value: ', v1.dot(v2));

        console.log('Test7: cross');
        console.log('expected value: ' + 'x: 44, y: 128, z: -188, w: 0');
        console.log('actual value: ', v3.cross(v2));

        console.log('Test finished.');
    }
}