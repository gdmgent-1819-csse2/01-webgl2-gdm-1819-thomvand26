import Vector3 from '../../../../Library/Math/Vector/Vector3.js';

export default class Vector3Test {
    constructor() {
        console.log('Running Vector3 test...');
        const v1 = new Vector3(2,8,9);
        const v2 = new Vector3(7,2,3);
        const v3 = new Vector3(1,7,5);

        console.log('Test1: norm');
        console.log('expected value: ' + 12.206555615733702);
        console.log('actual value: ', v1.norm());

        console.log('Test2: normalize');
        v1.normalize();
        console.log('expected value: ' + 'x: 0.1638463841038081, y: 0.6553855364152325, z: 0.7373087284671365');
        console.log('actual value: ', v1);

        console.log('Test3: add');
        v2.add(v3);
        console.log('expected value: ' + 'x: 8, y: 9, z: 8');
        console.log('actual value: ', v2);

        console.log('Test4: sub');
        v3.sub(v2);
        console.log('expected value: ' + 'x: -7, y: -2, z: -3');
        console.log('actual value: ', v3);

        console.log('Test5: scalar');
        v2.scalar(4);
        console.log('expected value: ' + 'x: 32, y: 36, z: 32');
        console.log('actual value: ', v2);

        console.log('Test6: dot');
        console.log('expected value: ' + '52.4308429132186');
        console.log('actual value: ', v1.dot(v2));

        console.log('Test7: cross');
        console.log('expected value: ' + 'x: 44, y: 128, z: -188');
        console.log('actual value: ', v3.cross(v2));

        console.log('Test finished.');
    }
}