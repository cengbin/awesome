/**
 *  * 通过Dmall.color访问
 *
 * * 支持在注释中些markdown语法，并解析
 * * 我是列表
 *    1. 我是2.1
 *    2. 我是2.2
 *
 * 我是表格
 *
 * |  TH  |  TH  |
 * | ---- | ---- |
 * |  TD  |  TD  |
 * |  TD  |  TD  |
 *
 * **加粗文本**
 *
 * @module color/mixer
 *
 * */

/* The name of the module. */
export const name = 'mixer'

/* The most recent blended color. */
export var lastColor = null

/**
 * Blend two colors together.
 * @param {string} color1 - The first color, in hexadecimal format.
 * @param {string} color2 - The second color, in hexadecimal format.
 * @return {string} The blended color.
 */
export async function blend(color1, color2) {}

// convert color to array of RGB values (0-255)
function rgbify(color) {}

/*
 * 内部函数
 * */
function innerFun() {

}

export {
  /**
   * Get the red, green, and blue values of a color.
   * @function
   * @param {string} color - A color, in hexadecimal format.
   * @returns {Array.<number>} An array of the red, green, and blue values,
   * each ranging from 0 to 255.
   */
    rgbify as toRgb
}