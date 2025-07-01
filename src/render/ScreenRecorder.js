/* 
 * The MIT License
 *
 * Copyright 2017 Damien Doussaud (namide.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import Texture from '../data/texture/Texture'
import RenderBuffer from './RenderBuffer'
import FrameBuffer from './FrameBuffer'

export default class ScreenRecorder {
  constructor(width, height, captureDepth = true, recordDepth = false) {
    this.captureDepth = captureDepth
    this.recordDepth = recordDepth

    this.width = width
    this.height = height

    this.updated = false

    this._pingpong = false
    this._colorTextures = [
      this._genColorTexture('frameBufferColor0', width, height),
      this._genColorTexture('frameBufferColor1', width, height)
    ]



    this.frameBuffer = new FrameBuffer()
    // this.frameBufferIndex = new FrameBuffer()

    // this.pointer = null
  }

  _genDepthTexture(label, width, height) {
    const depthTexture = new Texture()

    depthTexture.mipmap = false
    depthTexture.setInternalFormat(6402)
    depthTexture.setFormat(6402)
    depthTexture.setType(5123)

    // gl.TEXTURE_WRAP_S , gl.CLAMP_TO_EDGE
    depthTexture.setParam(10242, 33071)

    // gl.TEXTURE_WRAP_T , gl.CLAMP_TO_EDGE
    depthTexture.setParam(10243, 33071)

    // gl.TEXTURE_MIN_FILTER , gl.NEAREST
    depthTexture.setParam(10241, 9728)

    // gl.TEXTURE_MAG_FILTER , gl.NEAREST
    depthTexture.setParam(10240, 9728)

    depthTexture.setImg(null, width, height)

    return depthTexture
  }

  _genColorTexture(label, width, height) {
    const colorTexture = new Texture(label)

    colorTexture.mipmap = false

    // Delete linear filter
    if (false) {
      // gl.TEXTURE_WRAP_S , gl.CLAMP_TO_EDGE
      colorTexture.setParam(10242, 33071)

      // gl.TEXTURE_WRAP_T , gl.CLAMP_TO_EDGE
      colorTexture.setParam(10243, 33071)

      // gl.TEXTURE_MIN_FILTER , gl.NEAREST
      colorTexture.setParam(10241, 9728)

      // gl.TEXTURE_MAG_FILTER , gl.NEAREST
      colorTexture.setParam(10240, 9728)
    }

    colorTexture.setImg(null, width, height)

    return colorTexture
  }

  pingpong() {
    this._pingpong = !this._pingpong
  }

  get colorTexture() {
    return this._colorTextures[this._pingpong ? 1 : 0]
  }

  resize(width, height, gl) {
    this.width = width
    this.height = height


    this.pingpong()
    this.colorTexture.resize(width, height, gl)

    this.pingpong()
    this.colorTexture.resize(width, height, gl)


    if (this.depthTexture)
      this.depthTexture.resize(width, height, gl)

    if (this.renderBuffer)
      this.renderBuffer.resize(width, height, gl)
  }

  isInitialized() {
    return !!this.frameBuffer.pointer
  }

  static SET_DATA(gl) {
    ScreenRecorder.WEBGL_depth_texture = gl.getExtension('WEBGL_depth_texture') ||
      gl.getExtension('WEBKIT_WEBGL_depth_texture') ||
      gl.getExtension('MOZ_WEBGL_depth_texture')

    ScreenRecorder._DATA_INITIALIZED = true
  }

  init(gl) {
    if (!ScreenRecorder._DATA_INITIALIZED) {
      ScreenRecorder.SET_DATA(gl)
    }

    if (this.recordDepth) {
      if (!ScreenRecorder.WEBGL_depth_texture) {
        console.warn('WEBGL_depth_texture Extension not available!')
        this.recordDepth = false
      }
      else {
        this.depthTexture = this._genDepthTexture('frameBufferDepth', this.width, this.height)
        this.depthTexture.init(gl)
      }
    }

    if (this.captureDepth) {
      this.renderBuffer = new RenderBuffer(this.width, this.height)
      this.renderBuffer.init(gl)
    }

    this.frameBuffer.init(gl)

    this.pingpong()
    this.colorTexture.init(gl)

    this.pingpong()
    this.colorTexture.init(gl)


    // gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorTexture.pointer, 0)


    if (this.depthTexture)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, /*gl.DEPTH_STENCIL_ATTACHMENT ||*/ gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture.pointer, 0)
    else if (this.renderBuffer)
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, /*gl.DEPTH_STENCIL_ATTACHMENT ||*/ gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer.pointer)


    gl.bindTexture(gl.TEXTURE_2D, null)
    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.bindRenderbuffer(gl.RENDERBUFFER, null)

    return true
  }

  start(gl, captureDepth = true) {
    this.frameBuffer.bind(gl)

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorTexture.pointer, 0)

    if (this.depthTexture)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, /*gl.DEPTH_STENCIL_ATTACHMENT ||*/ gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, captureDepth ? this.depthTexture.pointer : null, 0)
    else if (this.renderBuffer)
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, /*gl.DEPTH_STENCIL_ATTACHMENT ||*/ gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, captureDepth ? this.renderBuffer.pointer : null)


    // this.frameBufferIndex.bind(gl)
  }

  stop(gl) {
    // console.log(gl.FRAMEBUFFER_COMPLETE, gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT, gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT, gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS, gl.FRAMEBUFFER_UNSUPPORTED)
    // console.log(gl.checkFramebufferStatus(gl.FRAMEBUFFER))
    this.frameBuffer.free(gl)
    // this.frameBufferIndex.free(gl)
  }

  /* draw(gl, location, index)
  {
      
  }*/
}