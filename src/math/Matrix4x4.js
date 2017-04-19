
// polyfill -> fill, 

class Matrix4x4 extends Float32Array
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

        if (Math.abs(len) > 0.000001)
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

    fromTranslation = function(vec3)
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


        if (Math.abs(len) > 0.000001)
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
}
