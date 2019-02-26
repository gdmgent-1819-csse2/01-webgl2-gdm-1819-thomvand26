import Vector2 from '../../../../Library/Math/Vector/Vector2.js';

export default class Vector2Test {
    constructor() {
        console.log('Running Vector2 test...');
        const v1 = new Vector2(2,8);
        const v2 = new Vector2(7,2);
        const v3 = new Vector2(1,7);

        console.log('Test1: norm');
        console.log('expected value: ' + 8.246211251235321);
        console.log('actual value: ', v1.norm());

        console.log('Test2: normalize');
        v1.normalize();
        console.log('expected value: ' + 'x: 0.24253562503633297, y: 0.9701425001453319');
        console.log('actual value: ', v1);

        console.log('Test3: add');
        v2.add(v3);
        console.log('expected value: ' + 'x: 8, y: 9');
        console.log('actual value: ', v2);

        console.log('Test4: sub');
        v3.sub(v2);
        console.log('expected value: ' + 'x: -7, y: -2');
        console.log('actual value: ', v3);

        console.log('Test5: scalar');
        v2.scalar(4);
        console.log('expected value: ' + 'x: 32, y: 36');
        console.log('actual value: ', v2);

        console.log('Test6: dot');
        console.log('expected value: ' + '-296');
        console.log('actual value: ', v3.dot(v2));

        console.log('Test finished.');
    }
}