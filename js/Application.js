import Vector2 from "./Library/Math/Vector2.js";
import Vector3 from "./Library/Math/Vector3.js";
import Vector4 from "./Library/Math/Vector4.js";

export default class Application
{
    constructor() {
        console.info('WebGL2 Demo');

        // ***** VECTORS *****
        // Vector2 tests
        console.log('\n \n * Vector3 tests *');
        const v1_2d = new Vector2(1,10);
        const v2_2d = new Vector2(9,-5);
        const v3_2d = new Vector2(-9,71);
        
        console.log('v1_2d:', v1_2d);
        console.log(`length of v1_2d: ${v1_2d.norm()}`);
        
        v1_2d.normalize();
        console.log('v1_2d.normalize():', v1_2d);
        console.log(`length of v1_2d: ${v1_2d.norm()}`);

        console.log('v2_2d:', v2_2d);
        v2_2d.add(v3_2d);
        console.log('v2_2d.add(v3_2d):', v2_2d);

        v2_2d.sub(v3_2d);
        console.log('v2_2d.sub(v3_2d):', v2_2d);

        v2_2d.scalar(20);
        console.log('v2_2d.scalar(20):', v2_2d);
        
        console.log('v3_2d:', v3_2d);
        console.log('v2_2d.dot(v3_2d):', v2_2d.dot(v3_2d));


        // Vector3 tests
        console.log('\n \n * Vector3 tests *');
        const v1_3d = new Vector3(1,10,3);
        const v2_3d = new Vector3(9,-5,20);
        const v3_3d = new Vector3(-9,71,4);
        
        console.log('v1_3d:', v1_3d);
        console.log(`length of v1_3d: ${v1_3d.norm()}`);
        
        v1_3d.normalize();
        console.log('v1_3d.normalize():', v1_3d);
        console.log(`length of v1_3d: ${v1_3d.norm()}`);

        console.log('v2_3d:', v2_3d);
        v2_3d.add(v3_3d);
        console.log('v2_3d.add(v3_3d):', v2_3d);

        v2_3d.sub(v3_3d);
        console.log('v2_3d.sub(v3_3d):', v2_3d);

        v2_3d.scalar(20);
        console.log('v2_3d.scalar(20):', v2_3d);
        
        console.log('v3_3d:', v3_3d);
        console.log('v2_3d.dot(v3_3d):', v2_3d.dot(v3_3d));

        v2_3d.cross(v3_3d);
        console.log('v2_3d.cross(v3_3d):', v2_3d);


        // Vector4 tests
        console.log('\n \n * Vector4 tests *');
        const v1_4d = new Vector4(4,5,7,9);
        const v2_4d = new Vector4(20,10,15,81);
        const v3_4d = new Vector4(10,10,10,20);

        console.log('v1_4d:', v1_4d);
        console.log(`length of v1_4d: ${v1_4d.norm()}`);
        
        v1_4d.normalize();
        console.log('v1_4d.normalize():', v1_4d);
        console.log(`length of v1_4d: ${v1_4d.norm()}`);

        console.log('v2_4d:', v2_4d);
        v2_4d.add(v3_4d);
        console.log('v2_4d.add(v3_4d):', v2_4d);

        v2_4d.sub(v3_4d);
        console.log('v2_4d:', v2_4d);

        v2_4d.scalar(20);
        console.log('v2_4d.scalar(20):', v2_4d);
        
        console.log('v3_4d:', v3_4d);
        console.log('v2_4d.dot(v3_4d):', v2_4d.dot(v3_4d));
    }



}