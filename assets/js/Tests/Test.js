import Vector2Test from './Library/Math/VectorTests/Vector2Test.js';
import Vector3Test from './Library/Math/VectorTests/Vector3Test.js';
import Vector4Test from './Library/Math/VectorTests/Vector4Test.js';
import Matrix2Test from './Library/Math/MatrixTests/Matrix2Test.js';
import Matrix3Test from './Library/Math/MatrixTests/Matrix3Test.js';
import Matrix4Test from './Library/Math/MatrixTests/Matrix4Test.js';

export default class Test {
    constructor() {
        console.log('Running Tests…');
        new Vector2Test();
        new Vector3Test();
        new Vector4Test();
        new Matrix2Test();
        new Matrix3Test();
        new Matrix4Test();
    }

}