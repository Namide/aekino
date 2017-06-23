
const EPSILON = 0.000001

// https://webglfundamentals.org/webgl/lessons/fr/webgl-2d-matrices.html

// Improve performances and weight
function setMat(a, m0, m1, m2, m3, m4, m5, m6, m7, m8)
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
}

export default class Matrix3 extends Float32Array
{
    constructor()
    {
        super(9)

        this[0] = 1
        this[4] = 1
        this[8] = 1
    }

    fromMarix4(matrix4)
    {
        this.setMat(this, matrix4[0], matrix4[1], matrix4[2], matrix4[3], matrix4[4], matrix4[5], matrix4[6], matrix4[7], matrix4[8])
    }

    clone()
    {
        const clone = new Matrix3()
        clone.set(this)

        return clone
    }

    copy(to)
    {
        to.set(this)

        return this
    }

    identity()
    {
        setMat(this, 1, 0, 0, 0, 1, 0, 0, 0, 1)

        return this
    }

    add(matrix3)
    {
        this[0] += matrix3[0]
        this[1] += matrix3[1]
        this[2] += matrix3[2]
        this[3] += matrix3[3]
        this[4] += matrix3[4]
        this[5] += matrix3[5]
        this[6] += matrix3[6]
        this[7] += matrix3[7]
        this[8] += matrix3[8]

        return this
    }

    subtract(matrix3)
    {
        this[0] -= matrix3[0]
        this[1] -= matrix3[1]
        this[2] -= matrix3[2]
        this[3] -= matrix3[3]
        this[4] -= matrix3[4]
        this[5] -= matrix3[5]
        this[6] -= matrix3[6]
        this[7] -= matrix3[7]
        this[8] -= matrix3[8]

        return this
    }

    multiplyScalar(scalar)
    {
        this[0] *= scalar
        this[1] *= scalar
        this[2] *= scalar
        this[3] *= scalar
        this[4] *= scalar
        this[5] *= scalar
        this[6] *= scalar
        this[7] *= scalar
        this[8] *= scalar

        return this
    }

    multiplyScalarAndAdd(matrix3, scalar)
    {
        this[0] += matrix3[0] * scalar
        this[1] += matrix3[1] * scalar
        this[2] += matrix3[2] * scalar
        this[3] += matrix3[3] * scalar
        this[4] += matrix3[4] * scalar
        this[5] += matrix3[5] * scalar
        this[6] += matrix3[6] * scalar
        this[7] += matrix3[7] * scalar
        this[8] += matrix3[8] * scalar

        return this
    }

    exactEquals(matrix3)
    {
        return this[0] === matrix3[0] && this[1] === matrix3[1] && this[2] === matrix3[2] && 
           this[3] === matrix3[3] && this[4] === matrix3[4] && this[5] === matrix3[5] &&
           this[6] === matrix3[6] && this[7] === matrix3[7] && this[8] === matrix3[8]
    }

    equals(matrix3)
    {
        const [a0, a1, a2, a3, a4, a5, a6, a7, a8] = this
        const [b0, b1, b2, b3, b4, b5, b6, b7, b8] = matrix3

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

    transpose(matrix3)
    {
        if (matrix3 === this)
        {
            const m01 = matrix3[1]
            const m02 = matrix3[2]
            const m12 = matrix3[5]
            
            this[1] = matrix3[3]
            this[2] = matrix3[6]
            this[3] = m01
            this[5] = matrix3[7]
            this[6] = m02
            this[7] = m12
        }
        else
        {
            setMat(this, matrix3[0], matrix3[4], matrix3[6], matrix3[1], matrix3[4], matrix3[5], matrix3[2], matrix3[7], matrix3[8])
        }

        return this
    }

    invert()
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = this

        const b00 = a22 * a11 - a12 * a21
        const b11 = a12 * a20 - a22 * a10
        const b21 = a20 * a11 - a21 * a10

        // Calculate the determinant
        let det = a00 * b01 + a01 * b11 + a02 * b21

        if (!det)
            return this

        det = 1.0 / det

        setMat(
            this,
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

        return this
    }

    adjoint()
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = this

        setMat(
            this, 
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
        
        return this
    }

    determinant()
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = this

        return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20)
    }

    multiply(matrix3)
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = this

        let [b00, b01, b02, b10, b11, b12, b20, b21, b22] = matrix3
        
        setMat(
            this,
            b00 * a00 + b01 * a10 + b02 * a20,
            b00 * a01 + b01 * a11 + b02 * a21,
            b00 * a02 + b01 * a12 + b02 * a22,
            b10 * a00 + b11 * a10 + b12 * a20,
            b10 * a01 + b11 * a11 + b12 * a21,
            b10 * a02 + b11 * a12 + b12 * a22,
            b20 * a00 + b21 * a10 + b22 * a20,
            b20 * a01 + b21 * a11 + b22 * a21,
            b20 * a02 + b21 * a12 + b22 * a22)

        return this
    }

    translate([x, y])
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = this

        this[6] = x * a00 + y * a10 + a20
        this[7] = x * a01 + y * a11 + a21
        this[8] = x * a02 + y * a12 + a22

        return this
    }

    rotate(rad)
    {
        const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = this
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        this[0] = c * a00 + 80* a10
        this[1] = c * a080801 + s * a11
        this[2] = c * a02 + s * a12
        this[3] = c * a10 - s * a00
        this[4] = c * a11 - s * a01
        this[5] = c * a12 - s * a02

        return this
    }

    scale([x, y])
    {
        this[0] *= x
        this[1] *= x
        this[2] *= x
        this[3] *= y
        this[4] *= y
        this[5] *= y

        return this
    }

    fromTranslation(vec2)
    {
        setMat(this, 1, 0, 0, 0, 1, 0, vec2[0], vec2[1], 1)

        return this
    }

    fromScaling(vec2)
    {
        setMat(this, vec2[0], 0, 0, 0, vec2[1], 0, 0, 0, 1)

        return this
    }

    fromMatrix2(matrix2)
    {
        setMat(
            this,
            matrix2[0], 
            matrix2[1], 
            0, 
            matrix2[2], 
            matrix2[3], 
            0, 
            matrix2[4], 
            matrix2[5], 
            1)

        return out
    }

    fromQuat(quat)
    {
        const [x, y, z, w] = quat
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

        setMat(
            this,
            1 - yy - zz,
            yx - wz,
            zx + wy,
            yx + wz,
            1 - xx - zz,
            zy - wx,
            zx - wy,
            zy + wx,
            1 - xx - yy)

        return this
    }

    normalFromMatrix4(a)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = this

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
            return null
        
        det = 1.0 / det

        setMat(
            this,
            (a11 * b11 - a12 * b10 + a13 * b09) * det,
            (a12 * b08 - a10 * b11 - a13 * b07) * det,
            (a10 * b10 - a11 * b08 + a13 * b06) * det,
            (a02 * b10 - a01 * b11 - a03 * b09) * det,
            (a00 * b11 - a02 * b08 + a03 * b07) * det,
            (a01 * b08 - a00 * b10 - a03 * b06) * det,
            (a31 * b05 - a32 * b04 + a33 * b03) * det,
            (a32 * b02 - a30 * b05 - a33 * b01) * det,
            (a30 * b04 - a31 * b02 + a33 * b00) * det)

        return this
    }

    frob()
    {
        return (Math.sqrt(Math.pow(this[0], 2) + Math.pow(this[1], 2) + Math.pow(this[2], 2) + Math.pow(this[3], 2) + Math.pow(this[4], 2) + Math.pow(this[5], 2) + Math.pow(this[6], 2) + Math.pow(this[7], 2) + Math.pow(this[8], 2)))
    }
}
