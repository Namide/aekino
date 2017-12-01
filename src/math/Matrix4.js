
const EPSILON = 0.000001

// Improve performances and weight
function setMat(a, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15)
{
    a[0] = m0
    a[1] = m1
    a[2] = m2
    a[3] = m3
    a[4] = m4
    a[5] = m5
    a[6] = m6
    a[7] = m7
    a[8] = m8
    a[9] = m9
    a[10] = m10
    a[11] = m11
    a[12] = m12
    a[13] = m13
    a[14] = m14
    a[15] = m15

    return a
}

export default class Matrix4
{
    constructor()
    {
        console.warn('Matrix4 is a static class')
    }

    static create()
    {
        const matrix = new Float32Array(16)

        matrix[0] = 1
        matrix[5] = 1
        matrix[10] = 1
        matrix[15] = 1

        return matrix
    }

    static clone(matrix)
    {
        return Matrix4.copy(matrix)
    }

    static copy(from, to = new Float32Array(16))
    {
        to.set(from)

        return to
    }

    static identity(matrix)
    {
        return setMat(matrix, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
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
        m1[9] += m2[9]
        m1[10] += m2[10]
        m1[11] += m2[11]
        m1[12] += m2[12]
        m1[13] += m2[13]
        m1[14] += m2[14]
        m1[15] += m2[15]

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
        m1[9] -= m2[9]
        m1[10] -= m2[10]
        m1[11] -= m2[11]
        m1[12] -= m2[12]
        m1[13] -= m2[13]
        m1[14] -= m2[14]
        m1[15] -= m2[15]

        return m1
    }

    static multiplyScalar(scalar)
    {
        m1[0] *= scalar
        m1[1] *= scalar
        m1[2] *= scalar
        m1[3] *= scalar
        m1[4] *= scalar
        m1[5] *= scalar
        m1[6] *= scalar
        m1[7] *= scalar
        m1[8] *= scalar
        m1[9] *= scalar
        m1[10] *= scalar
        m1[11] *= scalar
        m1[12] *= scalar
        m1[13] *= scalar
        m1[14] *= scalar
        m1[15] *= scalar

        return m1
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
        m1[9] += m2[9] * scalar
        m1[10] += m2[10] * scalar
        m1[11] += m2[11] * scalar
        m1[12] += m2[12] * scalar
        m1[13] += m2[13] * scalar
        m1[14] += m2[14] * scalar
        m1[15] += m2[15] * scalar

        return m1
    }

    static exactEquals(m1, m2)
    {
        return m1[0] === m2[0] && m1[1] === m2[1] && m1[2] === m2[2] && m1[3] === m2[3] && m1[4] === m2[4] && m1[5] === m2[5] && m1[6] === m2[6] && m1[7] === m2[7] && m1[8] === m2[8] && m1[9] === m2[9] && m1[10] === m2[10] && m1[11] === m2[11] && m1[12] === m2[12] && m1[13] === m2[13] && m1[14] === m2[14] && m1[15] === m2[15]
    }

    static equals(m1, m2)
    {
        const [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15] = m1
        const [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15] = m2

        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0))
            && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1))
            && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2))
            && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3))
            && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4))
            && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5))
            && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6))
            && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7))
            && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8))
            && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9))
            && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10))
            && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11))
            && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12))
            && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13))
            && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14))
            && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15)))
    }

    static transpose(m1, m2)
    {
        if (m2 === m1)
        {
            const ma = m2[1]
            const mb = m2[2]
            const mc = m2[3]
            const md = m2[6]
            const me = m2[7]
            const mf = m2[11]
            
            m1[1] = m2[4]
            m1[2] = m2[8]
            m1[3] = m2[12]
            m1[4] = ma
            m1[6] = m2[9]
            m1[7] = m2[13]
            m1[8] = mb
            m1[9] = md
            m1[11] = m2[14]
            m1[12] = mc
            m1[13] = me
            m1[14] = mf
        }
        else
        {
            setMat(m1, m2[0], m2[4], m2[8], m2[12], m2[1], m2[5], m2[9], m2[13], m2[2], m2[6], m2[10], m2[14], m2[3], m2[7], m2[11], m2[15])
        }

        return m1
    }

    static invert(matrix)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = matrix

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
            return matrix

        det = 1.0 / det

        return setMat(
            matrix, 
            (a11 * b11 - a12 * b10 + a13 * b09) * det,
            (a02 * b10 - a01 * b11 - a03 * b09) * det,
            (a31 * b05 - a32 * b04 + a33 * b03) * det,
            (a22 * b04 - a21 * b05 - a23 * b03) * det,
            (a12 * b08 - a10 * b11 - a13 * b07) * det,
            (a00 * b11 - a02 * b08 + a03 * b07) * det,
            (a32 * b02 - a30 * b05 - a33 * b01) * det,
            (a20 * b05 - a22 * b02 + a23 * b01) * det,
            (a10 * b10 - a11 * b08 + a13 * b06) * det,
            (a01 * b08 - a00 * b10 - a03 * b06) * det,
            (a30 * b04 - a31 * b02 + a33 * b00) * det,
            (a21 * b02 - a20 * b04 - a23 * b00) * det,
            (a11 * b07 - a10 * b09 - a12 * b06) * det,
            (a00 * b09 - a01 * b07 + a02 * b06) * det,
            (a31 * b01 - a30 * b03 - a32 * b00) * det,
            (a20 * b03 - a21 * b01 + a22 * b00) * det
        )
    }

    static adjoint(matrix)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = matrix

        return setMat(
             matrix, 
             (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22)),
            -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22)),
             (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12)),
            -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12)),
            -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22)),
             (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22)),
            -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12)),
             (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12)),
             (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21)),
            -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21)),
             (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11)),
            -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11)),
            -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21)),
             (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21)),
            -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11)),
             (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11))
        )
    }

    static determinant(matrix)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix

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

        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06
    }

    static multiply(m1, m2)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = m1

        // Cache only the current line of the second matrix
        let [b0, b1, b2, b3] = m2
        m1[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        m1[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        m1[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        m1[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = m2[4]
        b1 = m2[5]
        b2 = m2[6]
        b3 = m2[7]
        m1[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        m1[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        m1[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        m1[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = m2[8]
        b1 = m2[9]
        b2 = m2[10]
        b3 = m2[11]
        m1[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        m1[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        m1[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        m1[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = m2[12]
        b1 = m2[13]
        b2 = m2[14]
        b3 = m2[15]
        m1[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        m1[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        m1[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        m1[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        return m1
    }

    static translate(matrix, [x, y, z])
    {
        matrix[12] = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12]
        matrix[13] = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13]
        matrix[14] = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]
        matrix[15] = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15]

        return matrix
    }

    static scale(matrix, [x, y, z])
    {
        matrix[0] *= x
        matrix[1] *= x
        matrix[2] *= x
        matrix[3] *= x
        matrix[4] *= y
        matrix[5] *= y
        matrix[6] *= y
        matrix[7] *= y
        matrix[8] *= z
        matrix[9] *= z
        matrix[10] *= z
        matrix[11] *= z

        return matrix
    }

    static rotate(matrix, rad, [x, y, z])
    {
        let len = Math.sqrt(x * x + y * y + z * z)

        if (Math.abs(len) > EPSILON)
        {
            len = 1 / len
            x *= len
            y *= len
            z *= len

            const s = Math.sin(rad)
            const c = Math.cos(rad)
            const t = 1 - c

            const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23] = matrix

            // Construct the elements of the rotation matrix
            const b00 = x * x * t + c
            const b01 = y * x * t + z * s
            const b02 = z * x * t - y * s
            const b10 = x * y * t - z * s
            const b11 = y * y * t + c
            const b12 = z * y * t + x * s
            const b20 = x * z * t + y * s
            const b21 = y * z * t - x * s
            const b22 = z * z * t + c

            // Perform rotation-specific matrix multiplication
            matrix[0] = a00 * b00 + a10 * b01 + a20 * b02
            matrix[1] = a01 * b00 + a11 * b01 + a21 * b02
            matrix[2] = a02 * b00 + a12 * b01 + a22 * b02
            matrix[3] = a03 * b00 + a13 * b01 + a23 * b02
            matrix[4] = a00 * b10 + a10 * b11 + a20 * b12
            matrix[5] = a01 * b10 + a11 * b11 + a21 * b12
            matrix[6] = a02 * b10 + a12 * b11 + a22 * b12
            matrix[7] = a03 * b10 + a13 * b11 + a23 * b12
            matrix[8] = a00 * b20 + a10 * b21 + a20 * b22
            matrix[9] = a01 * b20 + a11 * b21 + a21 * b22
            matrix[10] = a02 * b20 + a12 * b21 + a22 * b22
            matrix[11] = a03 * b20 + a13 * b21 + a23 * b22
        }

        return matrix
    }

    static rotateX(matrix, rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        const a10 = matrix[4]
        const a11 = matrix[5]
        const a12 = matrix[6]
        const a13 = matrix[7]
        const a20 = matrix[8]
        const a21 = matrix[9]
        const a22 = matrix[10]
        const a23 = matrix[11]

        // Perform axis-specific matrix multiplication
        matrix[4] = a10 * c + a20 * s
        matrix[5] = a11 * c + a21 * s
        matrix[6] = a12 * c + a22 * s
        matrix[7] = a13 * c + a23 * s
        matrix[8] = a20 * c - a10 * s
        matrix[9] = a21 * c - a11 * s
        matrix[10] = a22 * c - a12 * s
        matrix[11] = a23 * c - a13 * s

        return matrix
    }

    static rotateY(matrix, rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)
        const [a00, a01, a02, a03] = matrix
        const a20 = matrix[8]
        const a21 = matrix[9]
        const a22 = matrix[10]
        const a23 = matrix[11]

        // Perform axis-specific matrix multiplication
        matrix[0] = a00 * c - a20 * s
        matrix[1] = a01 * c - a21 * s
        matrix[2] = a02 * c - a22 * s
        matrix[3] = a03 * c - a23 * s
        matrix[8] = a00 * s + a20 * c
        matrix[9] = a01 * s + a21 * c
        matrix[10] = a02 * s + a22 * c
        matrix[11] = a03 * s + a23 * c

        return matrix
    }

    static rotateZ(matrix, rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)
        const [a00, a01, a02, a03, a10, a11, a12, a13] = matrix

        // Perform axis-specific matrix multiplication
        matrix[0] = a00 * c + a10 * s
        matrix[1] = a01 * c + a11 * s
        matrix[2] = a02 * c + a12 * s
        matrix[3] = a03 * c + a13 * s
        matrix[4] = a10 * c - a00 * s
        matrix[5] = a11 * c - a01 * s
        matrix[6] = a12 * c - a02 * s
        matrix[7] = a13 * c - a03 * s

        return matrix
    }

    static fromTranslation([x, y, z], matrix = new Float32Array(16))
    {
        return setMat(matrix, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1)
    }

    static fromScaling([x, y, z], matrix = new Float32Array(16))
    {
        return setMat(matrix, x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1)
    }

    static fromRotation(rad, [x, y, z], matrix = new Float32Array(16))
    {
        let len = Math.sqrt(x * x + y * y + z * z)

        if (Math.abs(len) > EPSILON)
        {
            len = 1 / len
            x *= len
            y *= len
            z *= len

            const s = Math.sin(rad)
            const c = Math.cos(rad)
            const t = 1 - c

            // Perform rotation-specific matrix multiplication
            setMat(matrix,
                x * x * t + c,
                y * x * t + z * s,
                z * x * t - y * s,
                0,
                x * y * t - z * s,
                y * y * t + c,
                z * y * t + x * s,
                0,
                x * z * t + y * s,
                y * z * t - x * s,
                z * z * t + c,
                0,
                0,
                0,
                0,
                1
            )
        }

        return matrix
    }

    static fromXRotation(rad, matrix = new Float32Array(16))
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        return setMat(matrix, 1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1)
    }

    static fromYRotation(rad, matrix = new Float32Array(16))
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        return setMat(matrix, c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1)
    }

    static fromZRotation(rad, matrix = new Float32Array(16))
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        return setMat(matrix, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
    }

    static fromQuat([x, y, z, w], matrix = new Float32Array(16))
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

        return setMat(matrix, 1 - yy - zz, yx + wz, zx - wy, 0, yx - wz, 1 - xx - zz, zy + wx, 0, zx + wy, zy - wx, 1 - xx - yy, 0, 0, 0, 0, 1)
    }

    static fromQuatTranslation([qx, qy, qz, qw], [x, y, z], matrix = new Float32Array(16))
    {
        // Quaternion math
        const x2 = qx + qx
        const y2 = qy + qy
        const z2 = qz + qz
        const xx = qx * x2
        const xy = qx * y2
        const xz = qx * z2
        const yy = qy * y2
        const yz = qy * z2
        const zz = qz * z2
        const wx = qw * x2
        const wy = qw * y2
        const wz = qw * z2

        return setMat(matrix, 1 - (yy + zz), xy + wz, xz - wy, 0, xy - wz, 1 - (xx + zz), yz + wx, 0, xz + wy, yz - wx, 1 - (xx + yy), 0, x, y, z, 1)
    }

    static fromQuatTranslationScale([qx, qy, qz, qw], [x, y, z], [sx, sy, sz], matrix = new Float32Array(16))
    {
        // Quaternion math
        const x2 = qx + qx
        const y2 = qy + qy
        const z2 = qz + qz
        const xx = qx * x2
        const xy = qx * y2
        const xz = qx * z2
        const yy = qy * y2
        const yz = qy * z2
        const zz = qz * z2
        const wx = qw * x2
        const wy = qw * y2
        const wz = qw * z2

        return setMat(matrix, (1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0, (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy, 0, (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz, 0, x, y, z, 1)
    }

    static fromQuatTranslationScaleOrigin([qx, qy, qz, qw], [x, y, z], [sx, sy, sz], [ox, oy, oz], matrix = new Float32Array(16))
    {
        // Quaternion math
        const x2 = qx + qx
        const y2 = qy + qy
        const z2 = qz + qz
        const xx = qx * x2
        const xy = qx * y2
        const xz = qx * z2
        const yy = qy * y2
        const yz = qy * z2
        const zz = qz * z2
        const wx = qw * x2
        const wy = qw * y2
        const wz = qw * z2

        setMat(
            matrix, 
            (1 - (yy + zz)) * sx,
            (xy + wz) * sx,
            (xz - wy) * sx,
            0,
            (xy - wz) * sy,
            (1 - (xx + zz)) * sy,
            (yz + wx) * sy,
            0,
            (xz + wy) * sz,
            (yz - wx) * sz,
            (1 - (xx + yy)) * sz,
            0,
            x + ox - (matrix[0] * ox + matrix[4] * oy + matrix[8] * oz),
            y + oy - (matrix[1] * ox + matrix[5] * oy + matrix[9] * oz),
            z + oz - (matrix[2] * ox + matrix[6] * oy + matrix[10] * oz),
            1
        )

        return matrix
    }

    static getTranslation(matrix, vec3 = new Float32Array(3))
    {
        vec3[0] = matrix[12]
        vec3[1] = matrix[13]
        vec3[2] = matrix[14]

        return vec3
    }

    static getQuat(matrix, quat = new Float32Array(4))
    {
        // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
        var trace = matrix[0] + matrix[5] + matrix[10]

        if (trace > 0)
        {
            const S = Math.sqrt(trace + 1.0) * 2
            quat[0] = (matrix[6] - matrix[9]) / S
            quat[1] = (matrix[8] - matrix[2]) / S
            quat[2] = (matrix[1] - matrix[4]) / S
            quat[3] = 0.25 * S
        }
        else if (matrix[0] > matrix[5] & matrix[0] > matrix[10])
        {
            const S = Math.sqrt(1.0 + matrix[0] - matrix[5] - matrix[10]) * 2
            quat[0] = 0.25 * S
            quat[1] = (matrix[1] + matrix[4]) / S
            quat[2] = (matrix[8] + matrix[2]) / S
            quat[3] = (matrix[6] - matrix[9]) / S
        }
        else if (matrix[5] > matrix[10])
        {
            const S = Math.sqrt(1.0 + matrix[5] - matrix[0] - matrix[10])
            quat[0] = (matrix[1] + matrix[4]) / S * 2
            quat[1] = 0.25 * S
            quat[2] = (matrix[6] + matrix[9]) / S
            quat[3] = (matrix[8] - matrix[2]) / S
        }
        else
        {
            const S = Math.sqrt(1.0 + matrix[10] - matrix[0] - matrix[5]) * 2
            quat[0] = (matrix[8] + matrix[2]) / S
            quat[1] = (matrix[6] + matrix[9]) / S
            quat[2] = 0.25 * S
            quat[3] = (matrix[1] - matrix[4]) / S
        }

        return quat
    }

    static frustrum(matrix, left, right, bottom, top, near, far)
    {
        const rl = 1 / (right - left)
        const tb = 1 / (top - bottom)
        const nf = 1 / (near - far)

        return setMat(
            matrix, 
            (near * 2) * rl,
            0,
            0,
            0,
            0,
            (near * 2) * tb,
            0,
            0,
            (right + left) * rl,
            (top + bottom) * tb,
            (far + near) * nf,
            -1,
            0,
            0,
            (far * near * 2) * nf,
            0
        )
    }

    static perspective(matrix, fovy, aspect, near, far)
    {
        const f = 1.0 / Math.tan(fovy / 2)
        const nf = 1 / (near - far)

        return setMat(matrix, f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, (2 * far * near) * nf, 0)
    }

    static perspectiveFromFieldOfView(matrix, fov, near, far)
    {
        const upTan = Math.tan(fov.upDegrees * Math.PI / 180)
        const downTan = Math.tan(fov.downDegrees * Math.PI / 180)
        const leftTan = Math.tan(fov.leftDegrees * Math.PI / 180)
        const rightTan = Math.tan(fov.rightDegrees * Math.PI / 180)
        const xScale = 2 / (leftTan + rightTan)
        const yScale = 2 / (upTan + downTan)

        return setMat(
            matrix,
            xScale, 0, 0, 0,
            0, yScale, 0, 0,
            -(leftTan - rightTan) * xScale * 0.5,
            (upTan - downTan) * yScale * 0.5,
            far / (near - far), -1.0, 0, 0,
            (far * near) / (near - far),
            0
        )
    }

    static ortho(matrix, left, right, bottom, top, near, far)
    {
        const lr = 1 / (left - right)
        const bt = 1 / (bottom - top)
        const nf = 1 / (near - far)

        return setMat(
            matrix, 
            -2 * lr, 0, 0, 0,
            0, -2 * bt, 0, 0,
            0, 0, 2 * nf, 0,
            (left + right) * lr,
            (top + bottom) * bt,
            (far + near) * nf,
            1
        )
    }

    static lookAt(matrix, eye, center, up)
    {
        const [eyex, eyey, eyez] = eye
        const [upx, upy, upz] = up
        const [centerx, centery, centerz] = center

        if (Math.abs(eyex - centerx) < EPSILON &&
            Math.abs(eyey - centery) < EPSILON &&
            Math.abs(eyez - centerz) < EPSILON)
        {
            return Matrix4.identity(matrix)
        }

        let z0 = eyex - centerx
        let z1 = eyey - centery
        let z2 = eyez - centerz

        let len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2)
        z0 *= len
        z1 *= len
        z2 *= len

        let x0 = upy * z2 - upz * z1
        let x1 = upz * z0 - upx * z2
        let x2 = upx * z1 - upy * z0

        len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2)
        if (!len)
        {
            x0 = 0
            x1 = 0
            x2 = 0
        }
        else
        {
            len = 1 / len
            x0 *= len
            x1 *= len
            x2 *= len
        }

        let y0 = z1 * x2 - z2 * x1
        let y1 = z2 * x0 - z0 * x2
        let y2 = z0 * x1 - z1 * x0

        len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2)
        if (!len)
        {
            y0 = 0
            y1 = 0
            y2 = 0
        }
        else
        {
            len = 1 / len
            y0 *= len
            y1 *= len
            y2 *= len
        }

        return setMat(
            matrix, 
            x0, y0, z0, 0,
            x1, y1, z1, 0,
            x2, y2, z2, 0,
            -(x0 * eyex + x1 * eyey + x2 * eyez),
            -(y0 * eyex + y1 * eyey + y2 * eyez),
            -(z0 * eyex + z1 * eyey + z2 * eyez),
            1
        )
    }

    static frob(matrix)
    {
        return (Math.sqrt(Math.pow(matrix[0], 2) + Math.pow(matrix[1], 2) + Math.pow(matrix[2], 2) + Math.pow(matrix[3], 2) + Math.pow(matrix[4], 2) + Math.pow(matrix[5], 2) + Math.pow(matrix[6], 2) + Math.pow(matrix[7], 2) + Math.pow(matrix[8], 2) + Math.pow(matrix[9], 2) + Math.pow(matrix[10], 2) + Math.pow(matrix[11], 2) + Math.pow(matrix[12], 2) + Math.pow(matrix[13], 2) + Math.pow(matrix[14], 2) + Math.pow(matrix[15], 2)))
    }
}
