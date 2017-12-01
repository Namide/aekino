const EPSILON = 0.000001

// https://webglfundamentals.org/webgl/lessons/fr/webgl-2d-matrices.html

// Improve performances and weight
function setMat(matrix, m0, m1, m2, m3, m4, m5, m6, m7, m8)
{
    matrix[0] = m0
    matrix[1] = m1
    matrix[2] = m2
    matrix[3] = m3
    matrix[4] = m4
    matrix[5] = m5
    matrix[6] = m6
    matrix[7] = m7
    matrix[8] = m8

    return matrix
}

export default class Matrix3
{
    constructor()
    {
        console.warn('Matrix3 is a static class')
    }
    
    static create()
    {
        const matrix = new Float32Array(9)

        matrix[0] = 1
        matrix[4] = 1
        matrix[8] = 1

        return matrix
    }

    static fromMarix4(matrix4, matrix3 = new Float32Array(9))
    {
        return setMat(matrix3, matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6], matrix[7], matrix[8])
    }

    static clone(matrix)
    {
        return Matrix3.copy(matrix)
    }

    static copy(from, to = new Float32Array(9))
    {
        to.set(from)
        return to
    }

    static identity(matrix)
    {
        return setMat(matrix, 1, 0, 0, 0, 1, 0, 0, 0, 1)
    }

    static add(m1, m2)
    {
        m1[0] += m2[0]
        m1[1] += m2[1]
        m1[2] += m2[2]
        m1[3] += m2[3]
        m1[4] += m2[4]
        m1[5] += m2[5]
        m1[6] += m2[6]
        m1[7] += m2[7]
        m1[8] += m2[8]

        return m1
    }

    static subtract(m1, m2)
    {
        m1[0] -= m2[0]
        m1[1] -= m2[1]
        m1[2] -= m2[2]
        m1[3] -= m2[3]
        m1[4] -= m2[4]
        m1[5] -= m2[5]
        m1[6] -= m2[6]
        m1[7] -= m2[7]
        m1[8] -= m2[8]

        return m1
    }

    static multiplyScalar(matrix, scalar)
    {
        matrix[0] *= scalar
        matrix[1] *= scalar
        matrix[2] *= scalar
        matrix[3] *= scalar
        matrix[4] *= scalar
        matrix[5] *= scalar
        matrix[6] *= scalar
        matrix[7] *= scalar
        matrix[8] *= scalar

        return matrix
    }

    static multiplyScalarAndAdd(m1, m2, scalar)
    {
        m1[0] += m2[0] * scalar
        m1[1] += m2[1] * scalar
        m1[2] += m2[2] * scalar
        m1[3] += m2[3] * scalar
        m1[4] += m2[4] * scalar
        m1[5] += m2[5] * scalar
        m1[6] += m2[6] * scalar
        m1[7] += m2[7] * scalar
        m1[8] += m2[8] * scalar

        return m1
    }

    static exactEquals(m1, m2)
    {
        return m1[0] === m2[0] && m1[1] === m2[1] && m1[2] === m2[2] && 
           m1[3] === m2[3] && m1[4] === m2[4] && m1[5] === m2[5] &&
           m1[6] === m2[6] && m1[7] === m2[7] && m1[8] === m2[8]
    }

    static equals(m1, m2)
    {
        const [a0, a1, a2, a3, a4, a5, a6, a7, a8] = m1
        const [b0, b1, b2, b3, b4, b5, b6, b7, b8] = m2

        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
            Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
            Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
            Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)))
    }

    static transpose(m1, m2)
    {
        if (m2 === m1)
        {
            const m01 = m2[1]
            const m02 = m2[2]
            const m12 = m2[5]
            
            m1[1] = m2[3]
            m1[2] = m2[6]
            m1[3] = m01
            m1[5] = m2[7]
            m1[6] = m02
            m1[7] = m12
        }
        else
        {
            setMat(m1, m2[0], m2[4], m2[6], m2[1], m2[4], m2[5], m2[2], m2[7], m2[8])
        }

        return m1
    }

    static invert(matrix)
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = matrix

        const b00 = a22 * a11 - a12 * a21
        const b11 = a12 * a20 - a22 * a10
        const b21 = a20 * a11 - a21 * a10

        // Calculate the determinant
        let det = a00 * b01 + a01 * b11 + a02 * b21

        if (!det)
            return matrix

        det = 1.0 / det

        return setMat(
            matrix,
            b01 * det,
            (-a22 * a01 + a02 * a21) * det,
            (a12 * a01 - a02 * a11) * det,
            b11 * det,
            (a22 * a00 - a02 * a20) * det,
            (-a12 * a00 + a02 * a10) * det,
            b21 * det,
            (-a21 * a00 + a01 * a20) * det,
            (a11 * a00 - a01 * a10) * det
        )
    }

    static adjoint(matrix)
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = matrix

        setMat(
            matrix, 
            (a11 * a22 - a12 * a21),
            (a02 * a21 - a01 * a22),
            (a01 * a12 - a02 * a11),
            (a12 * a20 - a10 * a22),
            (a00 * a22 - a02 * a20),
            (a02 * a10 - a00 * a12),
            (a10 * a21 - a11 * a20),
            (a01 * a20 - a00 * a21),
            (a00 * a11 - a01 * a10)
        )
        
        return matrix
    }

    static determinant(matrix)
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = matrix

        return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20)
    }

    static multiply(m1, m2)
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = m1

        let [b00, b01, b02, b10, b11, b12, b20, b21, b22] = m2
        
        return setMat(
            m1,
            b00 * a00 + b01 * a10 + b02 * a20,
            b00 * a01 + b01 * a11 + b02 * a21,
            b00 * a02 + b01 * a12 + b02 * a22,
            b10 * a00 + b11 * a10 + b12 * a20,
            b10 * a01 + b11 * a11 + b12 * a21,
            b10 * a02 + b11 * a12 + b12 * a22,
            b20 * a00 + b21 * a10 + b22 * a20,
            b20 * a01 + b21 * a11 + b22 * a21,
            b20 * a02 + b21 * a12 + b22 * a22)
    }

    static translate(matrix, [x, y])
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = matrix

        matrix[6] = x * a00 + y * a10 + a20
        matrix[7] = x * a01 + y * a11 + a21
        matrix[8] = x * a02 + y * a12 + a22

        return matrix
    }

    static rotate(matrix, rad)
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = matrix
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        matrix[0] = c * a00 + 80* a10
        matrix[1] = c * a01 + s * a11
        matrix[2] = c * a02 + s * a12
        matrix[3] = c * a10 - s * a00
        matrix[4] = c * a11 - s * a01
        matrix[5] = c * a12 - s * a02

        return matrix
    }

    static scale(matrix, [x, y])
    {
        matrix[0] *= x
        matrix[1] *= x
        matrix[2] *= x
        matrix[3] *= y
        matrix[4] *= y
        matrix[5] *= y

        return matrix
    }

    static fromTranslation([x, y], matrix = new Float32Array(9))
    {
        return setMat(matrix, 1, 0, 0, 0, 1, 0, x, y, 1)
    }

    static fromScaling([x, y], matrix = new Float32Array(9))
    {
        return setMat(matrix, x, 0, 0, 0, y, 0, 0, 0, 1)
    }

    static fromMatrix2(matrix, newMatrix = new Float32Array(9))
    {
        return setMat(
            newMatrix,
            matrix2[0], matrix2[1], 0, 
            matrix2[2], matrix2[3], 0, 
            matrix2[4], matrix2[5], 1)
    }

    static fromQuat([x, y, z, w], matrix = new Float32Array(9))
    {
        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const xx = x * x2
        const yx = y * x2
        const yy = y * y2
        const zx = z * x2
        const zy = z * y2
        const zz = z * z2
        const wx = w * x2
        const wy = w * y2
        const wz = w * z2

        return setMat(
            matrix,
            1 - yy - zz, yx - wz, zx + wy,
            yx + wz, 1 - xx - zz, zy - wx,
            zx - wy, zy + wx, 1 - xx - yy)
    }

    static normalFromMatrix4(matrix4, newMatrix = new Float32Array(9))
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix4

        const b00 = a00 * a11 - a01 * a10
        const b01 = a00 * a12 - a02 * a10
        const b02 = a00 * a13 - a03 * a10
        const b03 = a01 * a12 - a02 * a11
        const b04 = a01 * a13 - a03 * a11
        const b05 = a02 * a13 - a03 * a12
        const b06 = a20 * a31 - a21 * a30
        const b07 = a20 * a32 - a22 * a30
        const b08 = a20 * a33 - a23 * a30
        const b09 = a21 * a32 - a22 * a31
        const b10 = a21 * a33 - a23 * a31
        const b11 = a22 * a33 - a23 * a32

        // Calculate the determinant
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06

        if (!det)
            return newMatrix
        
        det = 1.0 / det

        setMat(
            newMatrix,
            (a11 * b11 - a12 * b10 + a13 * b09) * det,
            (a12 * b08 - a10 * b11 - a13 * b07) * det,
            (a10 * b10 - a11 * b08 + a13 * b06) * det,
            (a02 * b10 - a01 * b11 - a03 * b09) * det,
            (a00 * b11 - a02 * b08 + a03 * b07) * det,
            (a01 * b08 - a00 * b10 - a03 * b06) * det,
            (a31 * b05 - a32 * b04 + a33 * b03) * det,
            (a32 * b02 - a30 * b05 - a33 * b01) * det,
            (a30 * b04 - a31 * b02 + a33 * b00) * det)
    }

    static frob(matrix)
    {
        return (Math.sqrt(Math.pow(matrix[0], 2) + Math.pow(matrix[1], 2) + Math.pow(matrix[2], 2) + Math.pow(matrix[3], 2) + Math.pow(matrix[4], 2) + Math.pow(matrix[5], 2) + Math.pow(matrix[6], 2) + Math.pow(matrix[7], 2) + Math.pow(matrix[8], 2)))
    }
}
