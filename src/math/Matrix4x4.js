
// polyfill -> fill, 

const EPSILON = 0.000001

export default class Matrix4x4 extends Float32Array
{
    constructor()
    {
        super(16)

        this[0] = 1
        this[5] = 1
        this[10] = 1
        this[15] = 1
    }

    clone()
    {
        const clone = new Matrix4x4()
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
        this.fill(0)
        this[0] = 1
        this[5] = 1
        this[10] = 1
        this[15] = 1

        return this
    }

    add(mat4)
    {
        this[0] += mat4[0]
        this[1] += mat4[1]
        this[2] += mat4[2]
        this[3] += mat4[3]
        this[4] += mat4[4]
        this[5] += mat4[5]
        this[6] += mat4[6]
        this[7] += mat4[7]
        this[8] += mat4[8]
        this[9] += mat4[9]
        this[10] += mat4[10]
        this[11] += mat4[11]
        this[12] += mat4[12]
        this[13] += mat4[13]
        this[14] += mat4[14]
        this[15] += mat4[15]

        return this
    }

    subtract(mat4)
    {
        this[0] -= mat4[0]
        this[1] -= mat4[1]
        this[2] -= mat4[2]
        this[3] -= mat4[3]
        this[4] -= mat4[4]
        this[5] -= mat4[5]
        this[6] -= mat4[6]
        this[7] -= mat4[7]
        this[8] -= mat4[8]
        this[9] -= mat4[9]
        this[10] -= mat4[10]
        this[11] -= mat4[11]
        this[12] -= mat4[12]
        this[13] -= mat4[13]
        this[14] -= mat4[14]
        this[15] -= mat4[15]

        return this
    }

    multiplyScalar(mat4)
    {
        this[0] *= mat4
        this[1] *= mat4
        this[2] *= mat4
        this[3] *= mat4
        this[4] *= mat4
        this[5] *= mat4
        this[6] *= mat4
        this[7] *= mat4
        this[8] *= mat4
        this[9] *= mat4
        this[10] *= mat4
        this[11] *= mat4
        this[12] *= mat4
        this[13] *= mat4
        this[14] *= mat4
        this[15] *= mat4

        return this
    }

    multiplyScalarAndAdd(mat4, scale)
    {
        this[0] += mat4[0] * scale
        this[1] += mat4[1] * scale
        this[2] += mat4[2] * scale
        this[3] += mat4[3] * scale
        this[4] += mat4[4] * scale
        this[5] += mat4[5] * scale
        this[6] += mat4[6] * scale
        this[7] += mat4[7] * scale
        this[8] += mat4[8] * scale
        this[9] += mat4[9] * scale
        this[10] += mat4[10] * scale
        this[11] += mat4[11] * scale
        this[12] += mat4[12] * scale
        this[13] += mat4[13] * scale
        this[14] += mat4[14] * scale
        this[15] += mat4[15] * scale

        return this
    }

    exactEquals(mat4)
    {
        return this[0] === mat4[0] && this[1] === mat4[1] && this[2] === mat4[2] && this[3] === mat4[3] && this[4] === mat4[4] && this[5] === mat4[5] && this[6] === mat4[6] && this[7] === mat4[7] && this[8] === mat4[8] && this[9] === mat4[9] && this[10] === mat4[10] && this[11] === mat4[11] && this[12] === mat4[12] && this[13] === mat4[13] && this[14] === mat4[14] && this[15] === mat4[15]
    }

    equals(mat4)
    {
        const [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15] = this
        const [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15] = mat4

        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15)))
    }

    transpose(mat4)
    {
        if (mat4 === this)
        {
            const m1 = mat4[1]
            const m2 = mat4[2]
            const m3 = mat4[3]
            const m12 = mat4[6]
            const m13 = mat4[7]
            const m23 = mat4[11]

            this[1] = mat4[4]
            this[2] = mat4[8]
            this[3] = mat4[12]
            this[4] = m1
            this[6] = mat4[9]
            this[7] = mat4[13]
            this[8] = m2
            this[9] = m12
            this[11] = mat4[14]
            this[12] = m3
            this[13] = m13
            this[14] = m23
        }
        else
        {
            this[0] = mat4[0]
            this[1] = mat4[4]
            this[2] = mat4[8]
            this[3] = mat4[12]
            this[4] = mat4[1]
            this[5] = mat4[5]
            this[6] = mat4[9]
            this[7] = mat4[13]
            this[8] = mat4[2]
            this[9] = mat4[6]
            this[10] = mat4[10]
            this[11] = mat4[14]
            this[12] = mat4[3]
            this[13] = mat4[7]
            this[14] = mat4[11]
            this[15] = mat4[15]
        }

        return this
    }

    invert(mat4)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = this

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
        {
            return this
        }

        det = 1.0 / det

        this[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det
        this[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det
        this[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det
        this[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det
        this[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det
        this[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det
        this[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det
        this[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det
        this[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det
        this[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det
        this[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det
        this[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det
        this[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det
        this[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det
        this[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det
        this[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det

        return this
    }

    adjoint(mat4)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = this

        this[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22))
        this[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22))
        this[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12))
        this[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12))
        this[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22))
        this[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22))
        this[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12))
        this[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12))
        this[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21))
        this[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21))
        this[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11))
        this[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11))
        this[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21))
        this[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21))
        this[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11))
        this[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11))

        return this
    }

    determinant()
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

        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06
    }

    multiply(mat4)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = this

        // Cache only the current line of the second matrix
        let [b0, b1, b2, b3] = mat4
        this[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = mat4[4]
        b1 = mat4[5]
        b2 = mat4[6]
        b3 = mat4[7]

        this[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = mat4[8]
        b1 = mat4[9]
        b2 = mat4[10]
        b3 = mat4[11]
        this[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = mat4[12]
        b1 = mat4[13]
        b2 = mat4[14]
        b3 = mat4[15]
        this[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        return this
    }

    translate(vec3)
    {
        const [x, y, z] = vec3

        this[12] = this[0] * x + this[4] * y + this[8] * z + this[12]
        this[13] = this[1] * x + this[5] * y + this[9] * z + this[13]
        this[14] = this[2] * x + this[6] * y + this[10] * z + this[14]
        this[15] = this[3] * x + this[7] * y + this[11] * z + this[15]

        return this
    }

    scale(vec3)
    {
        const [x, y, z] = vec3

        this[0] *= x
        this[1] *= x
        this[2] *= x
        this[3] *= x
        this[4] *= y
        this[5] *= y
        this[6] *= y
        this[7] *= y
        this[8] *= z
        this[9] *= z
        this[10] *= z
        this[11] *= z

        return this
    }

    rotate(rad, axis)
    {
        let [x, y, z] = axis
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

            const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23] = this

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
            this[0] = a00 * b00 + a10 * b01 + a20 * b02
            this[1] = a01 * b00 + a11 * b01 + a21 * b02
            this[2] = a02 * b00 + a12 * b01 + a22 * b02
            this[3] = a03 * b00 + a13 * b01 + a23 * b02
            this[4] = a00 * b10 + a10 * b11 + a20 * b12
            this[5] = a01 * b10 + a11 * b11 + a21 * b12
            this[6] = a02 * b10 + a12 * b11 + a22 * b12
            this[7] = a03 * b10 + a13 * b11 + a23 * b12
            this[8] = a00 * b20 + a10 * b21 + a20 * b22
            this[9] = a01 * b20 + a11 * b21 + a21 * b22
            this[10] = a02 * b20 + a12 * b21 + a22 * b22
            this[11] = a03 * b20 + a13 * b21 + a23 * b22
        }

        return this
    }

    rotateX(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        const a10 = this[4]
        const a11 = this[5]
        const a12 = this[6]
        const a13 = this[7]
        const a20 = this[8]
        const a21 = this[9]
        const a22 = this[10]
        const a23 = this[11]

        // Perform axis-specific matrix multiplication
        this[4] = a10 * c + a20 * s
        this[5] = a11 * c + a21 * s
        this[6] = a12 * c + a22 * s
        this[7] = a13 * c + a23 * s
        this[8] = a20 * c - a10 * s
        this[9] = a21 * c - a11 * s
        this[10] = a22 * c - a12 * s
        this[11] = a23 * c - a13 * s

        return this
    }

    rotateY(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        const a00 = a[0]
        const a01 = a[1]
        const a02 = a[2]
        const a03 = a[3]
        const a20 = a[8]
        const a21 = a[9]
        const a22 = a[10]
        const a23 = a[11]

        // Perform axis-specific matrix multiplication
        this[0] = a00 * c - a20 * s
        this[1] = a01 * c - a21 * s
        this[2] = a02 * c - a22 * s
        this[3] = a03 * c - a23 * s
        this[8] = a00 * s + a20 * c
        this[9] = a01 * s + a21 * c
        this[10] = a02 * s + a22 * c
        this[11] = a03 * s + a23 * c

        return this
    }

    rotateZ(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        const [a00, a01, a0, a03, a10, a11, a12, a13] = this

        // Perform axis-specific matrix multiplication
        this[0] = a00 * c + a10 * s
        this[1] = a01 * c + a11 * s
        this[2] = a02 * c + a12 * s
        this[3] = a03 * c + a13 * s
        this[4] = a10 * c - a00 * s
        this[5] = a11 * c - a01 * s
        this[6] = a12 * c - a02 * s
        this[7] = a13 * c - a03 * s

        return this
    }

    fromTranslation(vec3)
    {
        this[0] = 1
        this.fill(0, 1, 4)
        this[5] = 1
        this.fill(0, 6, 9)
        this[10] = 1
        this[11] = 0
        this[12] = vec3[0]
        this[13] = vec3[1]
        this[14] = vec3[2]
        this[15] = 1

        return this
    }

    fromScaling(vec3)
    {
        this[0] = vec3[0]
        this.fill(0, 1, 4)
        this[5] = vec3[1]
        this.fill(0, 6, 9)
        this[10] = vec3[2]
        this.fill(0, 11, 14)
        this[15] = 1

        return this
    }

    fromRotation(rad, axis)
    {
        let [x, y, z] = axis
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
            this[0] = x * x * t + c
            this[1] = y * x * t + z * s
            this[2] = z * x * t - y * s
            this[3] = 0
            this[4] = x * y * t - z * s
            this[5] = y * y * t + c
            this[6] = z * y * t + x * s
            this[7] = 0
            this[8] = x * z * t + y * s
            this[9] = y * z * t - x * s
            this[10] = z * z * t + c
            this.fill(0, 11, 14)
            this[15] = 1
        }

        return this
    }

    fromXRotation(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        this[0] = 1
        this.fill(0, 1, 4)
        this[5] = c
        this[6] = s
        this.fill(0, 7, 8)
        this[9] = -s
        this[10] = c
        this.fill(0, 11, 14)
        this[15] = 1

        return this
    }

    fromYRotation(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        this[0] = c
        this[1] = 0
        this[2] = -s
        this.fill(0, 3, 4)
        this[5] = 1
        this.fill(0, 6, 7)
        this[8] = s
        this[9] = 0
        this[10] = c
        this.fill(0, 11, 14)
        this[15] = 1

        return this
    }

    fromZRotation(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        this[0] = c
        this[1] = s
        this.fill(0, 2, 3)
        this[4] = -s
        this[5] = c
        this.fill(0, 6, 9)
        this[10] = 1
        this.fill(0, 11, 14)
        this[15] = 1

        return this
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

        this[0] = 1 - yy - zz
        this[1] = yx + wz
        this[2] = zx - wy
        this[3] = 0
        this[4] = yx - wz
        this[5] = 1 - xx - zz
        this[6] = zy + wx
        this[7] = 0
        this[8] = zx + wy
        this[9] = zy - wx
        this[10] = 1 - xx - yy
        this.fill(0, 11, 14)
        this[15] = 1

        return this
    }

    fromRotationTranslation(quat, vec3)
    {
        // Quaternion math
        const [x, y, z, w] = quat

        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const xx = x * x2
        const xy = x * y2
        const xz = x * z2
        const yy = y * y2
        const yz = y * z2
        const zz = z * z2
        const wx = w * x2
        const wy = w * y2
        const wz = w * z2

        this[0] = 1 - (yy + zz)
        this[1] = xy + wz
        this[2] = xz - wy
        this[3] = 0
        this[4] = xy - wz
        this[5] = 1 - (xx + zz)
        this[6] = yz + wx
        this[7] = 0
        this[8] = xz + wy
        this[9] = yz - wx
        this[10] = 1 - (xx + yy)
        this[11] = 0
        this[12] = vec3[0]
        this[13] = vec3[1]
        this[14] = vec3[2]
        this[15] = 1

        return this
    }

    fromRotationTranslationScale(quat, vec3, scale)
    {
        // Quaternion math
        const [x, y, z, w] = quat
        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const xx = x * x2
        const xy = x * y2
        const xz = x * z2
        const yy = y * y2
        const yz = y * z2
        const zz = z * z2
        const wx = w * x2
        const wy = w * y2
        const wz = w * z2
        const [sx, sy, sz] = scale

        this[0] = (1 - (yy + zz)) * sx
        this[1] = (xy + wz) * sx
        this[2] = (xz - wy) * sx
        this[3] = 0
        this[4] = (xy - wz) * sy
        this[5] = (1 - (xx + zz)) * sy
        this[6] = (yz + wx) * sy
        this[7] = 0
        this[8] = (xz + wy) * sz
        this[9] = (yz - wx) * sz
        this[10] = (1 - (xx + yy)) * sz
        this[11] = 0
        this[12] = vec3[0]
        this[13] = vec3[1]
        this[14] = vec3[2]
        this[15] = 1

        return this
    }

    fromRotationTranslationScaleOrigin(rotation, translation, scale, origin)
    {
        // Quaternion math
        const [x, y, z, w] = rotation
        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const xx = x * x2
        const xy = x * y2
        const xz = x * z2
        const yy = y * y2
        const yz = y * z2
        const zz = z * z2
        const wx = w * x2
        const wy = w * y2
        const wz = w * z2

        const [sx, sy, sz] = scale
        const [ox, oy, oz] = origin

        this[0] = (1 - (yy + zz)) * sx
        this[1] = (xy + wz) * sx
        this[2] = (xz - wy) * sx
        this[3] = 0
        this[4] = (xy - wz) * sy
        this[5] = (1 - (xx + zz)) * sy
        this[6] = (yz + wx) * sy
        this[7] = 0
        this[8] = (xz + wy) * sz
        this[9] = (yz - wx) * sz
        this[10] = (1 - (xx + yy)) * sz
        this[11] = 0
        this[12] = translation[0] + ox - (this[0] * ox + this[4] * oy + this[8] * oz)
        this[13] = translation[1] + oy - (this[1] * ox + this[5] * oy + this[9] * oz)
        this[14] = translation[2] + oz - (this[2] * ox + this[6] * oy + this[10] * oz)
        this[15] = 1

        return this
    }

    getTranslation(mat, vec3 = new Float32Array(3))
    {
        vec3[0] = this[12]
        vec3[1] = this[13]
        vec3[2] = this[14]

        return vec3
    }

    getRotation(quat = new Float32Array(4))
    {
        // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
        var trace = this[0] + this[5] + this[10]

        if (trace > 0)
        {
            const S = Math.sqrt(trace + 1.0) * 2
            quat[0] = (this[6] - this[9]) / S
            quat[1] = (this[8] - this[2]) / S
            quat[2] = (this[1] - this[4]) / S
            quat[3] = 0.25 * S
        }
        else if (this[0] > this[5] & this[0] > this[10])
        {
            const S = Math.sqrt(1.0 + this[0] - this[5] - this[10]) * 2
            quat[0] = 0.25 * S
            quat[1] = (this[1] + this[4]) / S
            quat[2] = (this[8] + this[2]) / S
            quat[3] = (this[6] - this[9]) / S
        }
        else if (this[5] > this[10])
        {
            const S = Math.sqrt(1.0 + this[5] - this[0] - this[10])
            quat[0] = (this[1] + this[4]) / S * 2
            quat[1] = 0.25 * S
            quat[2] = (this[6] + this[9]) / S
            quat[3] = (this[8] - this[2]) / S
        }
        else
        {
            const S = Math.sqrt(1.0 + this[10] - this[0] - this[5]) * 2
            quat[0] = (this[8] + this[2]) / S
            quat[1] = (this[6] + this[9]) / S
            quat[2] = 0.25 * S
            quat[3] = (this[1] - this[4]) / S
        }

        return quat
    }

    frustrum(left, right, bottom, top, near, far)
    {
        const rl = 1 / (right - left)
        const tb = 1 / (top - bottom)
        const nf = 1 / (near - far)

        this[0] = (near * 2) * rl
        this.fill(0, 1, 4)
        this[5] = (near * 2) * tb
        this.fill(0, 6, 7)
        this[8] = (right + left) * rl
        this[9] = (top + bottom) * tb
        this[10] = (far + near) * nf
        this[11] = -1
        this.fill(0, 12, 13)
        this[14] = (far * near * 2) * nf
        this[15] = 0

        return this
    }

    perspective(fovy, aspect, near, far)
    {
        const f = 1.0 / Math.tan(fovy / 2)
        const nf = 1 / (near - far)

        this[0] = f / aspect
        this.fill(0, 1, 4)
        this[5] = f
        this.fill(0, 6, 9)
        this[10] = (far + near) * nf
        this[11] = -1
        this.fill(0, 12, 13)
        this[14] = (2 * far * near) * nf
        this[15] = 0

        return this
    }

    perspectiveFromFieldOfView(fov, near, far)
    {
        const upTan = Math.tan(fov.upDegrees * Math.PI / 180)
        const downTan = Math.tan(fov.downDegrees * Math.PI / 180)
        const leftTan = Math.tan(fov.leftDegrees * Math.PI / 180)
        const rightTan = Math.tan(fov.rightDegrees * Math.PI / 180)
        const xScale = 2 / (leftTan + rightTan)
        const yScale = 2 / (upTan + downTan)

        this[0] = xScale
        this.fill(0, 1, 4)
        this[5] = yScale
        this.fill(0, 6, 7)
        this[8] = -(leftTan - rightTan) * xScale * 0.5
        this[9] = (upTan - downTan) * yScale * 0.5
        this[10] = far / (near - far)
        this[11] = -1.0
        this.fill(0, 12, 13)
        this[14] = (far * near) / (near - far)
        this[15] = 0

        return this
    }

    ortho(left, right, bottom, top, near, far)
    {
        const lr = 1 / (left - right)
        const bt = 1 / (bottom - top)
        const nf = 1 / (near - far)

        this[0] = -2 * lr
        this.fill(0, 1, 4)
        this[5] = -2 * bt
        this.fill(0, 6, 9)
        this[10] = 2 * nf
        this[11] = 0
        this[12] = (left + right) * lr
        this[13] = (top + bottom) * bt
        this[14] = (far + near) * nf
        this[15] = 1

        return this
    }

    lookAt(eye, center, up)
    {
        const [eyex, eyey, eyez] = eye
        const [upx, upy, upz] = up
        const [centerx, centery, centerz] = center

        if (Math.abs(eyex - centerx) < EPSILON &&
            Math.abs(eyey - centery) < EPSILON &&
            Math.abs(eyez - centerz) < EPSILON)
        {
            return this.identity()
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

        this[0] = x0
        this[1] = y0
        this[2] = z0
        this[3] = 0
        this[4] = x1
        this[5] = y1
        this[6] = z1
        this[7] = 0
        this[8] = x2
        this[9] = y2
        this[10] = z2
        this[11] = 0
        this[12] = -(x0 * eyex + x1 * eyey + x2 * eyez)
        this[13] = -(y0 * eyex + y1 * eyey + y2 * eyez)
        this[14] = -(z0 * eyex + z1 * eyey + z2 * eyez)
        this[15] = 1

        return this
    }

    frob()
    {
        return (Math.sqrt(Math.pow(this[0], 2) + Math.pow(this[1], 2) + Math.pow(this[2], 2) + Math.pow(this[3], 2) + Math.pow(this[4], 2) + Math.pow(this[5], 2) + Math.pow(this[6], 2) + Math.pow(this[7], 2) + Math.pow(this[8], 2) + Math.pow(this[9], 2) + Math.pow(this[10], 2) + Math.pow(this[11], 2) + Math.pow(this[12], 2) + Math.pow(this[13], 2) + Math.pow(this[14], 2) + Math.pow(this[15], 2)))
    }
}
