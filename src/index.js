/**
 * 用户信息
 * @typedef {Object} UserInfo
 * @property {string} name - 姓名
 * @property {number} age - 年龄
 */

/**
 * 函数说明
 * @param {UserInfo} userInfo - 用户信息
 */
function myFunction(userInfo) {
  // 函数实现
}

/**
 * 函数说明
 * @param {string} name - 名称
 * @throws {Error} 如果名称为空，则抛出异常
 */
function myFunction2(name) {
  if (!name) {
    throw new Error('名称不能为空')
  }
  // 函数实现
}

/**
 * 函数说明
 * @template T
 * @param {Array<T>} arr - 数组
 * @returns {T} 数组中的第一个元素
 */
function myFunction3(arr) {
  return arr[0]
}

/**
 * 函数说明
 * @param {string} name - 名称
 * @param {string} [type] - 类型（可选）
 * @returns {string} 字符串
 */
function myFunction4(name, type) {
  // 函数实现
}

/**
 * 函数说明
 * @param {string} name - 名称
 * @param {string} [type='default'] - 类型（可选，默认为 'default'）
 * @returns {string} 字符串
 */
function myFunction5(name, type = 'default') {
  // 函数实现
}

/**
 * 函数说明6
 * @param {string=} name - 名称
 * @param {string=} type - 类型（可选，默认为 'default'）
 * @returns {string} 字符串
 */
function myFunction6(name = '', type = 'default') {
  // 函数实现
}

/**
 * 函数说明
 * @name myfunc7
 * @param {Object} config - 配置项
 * @param {string=} config.name - 名称
 * @param {number} config.age - 年龄
 */
function myFunction7(config) {
  // 函数实现
}

/**
 * @name dmall属性
 * @description 全局属性window.dmall
 */
var dmall = null

/**
 * Set the shoe's color.
 *
 * @param {SHOE_COLORS} color - The shoe color. Must be an enumerated
 * value of {@link SHOE_COLORS}.
 */
var setColor = function (color) {
  // ...
}