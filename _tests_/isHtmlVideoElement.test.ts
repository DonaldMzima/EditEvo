import { isHtmlVideoElement } from '../utils'

describe('isHtmlVideoElement function', () => {
  test('returns true for HTMLVideoElement', () => {
    const videoElement = document.createElement('video')
    expect(isHtmlVideoElement(videoElement)).toBe(true)
  })

  test('returns false for HTMLImageElement', () => {
    const imageElement = document.createElement('img')
    expect(isHtmlVideoElement(imageElement)).toBe(false)
  })

  test('returns false for HTMLCanvasElement', () => {
    const canvasElement = document.createElement('canvas')
    expect(isHtmlVideoElement(canvasElement)).toBe(false)
  })

  test('returns false for null', () => {
    expect(isHtmlVideoElement(null)).toBe(false)
  })

  test('returns false for HTMLElement other than HTMLVideoElement', () => {
    const divElement = document.createElement('div')
    expect(isHtmlVideoElement(divElement)).toBe(false)
  })
})
