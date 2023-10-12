/**
 * class模块
 * @module class
 * */

/**
 * DOM添加类
 * @param {HTMLElement} element - DOM元素
 * @param {string} className - 类名
 * */
export function addClass(element, className) {
	const regClassName = new RegExp('(^| )' + className + '( |$)')
	// ( /\s+/ 匹配任何空白符，包括\n,\r,\f,\t,\v等（换行、回车、空格、tab等）})
	if (!regClassName.test(element.className)) {
		element.className = element.className.split(/\s+/).concat(className).join(' ')
	}
}

/**
 * DOM删除类
 * @param {HTMLElement} element - DOM元素
 * @param {string} className - 类名
 * */
export function removeClass(element, className) {
	const regClassName = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
	element.className = element.className.replace(regClassName, '')
}

/**
 * 判断DOM是否有某个类名
 * @param {HTMLElement} element - DOM元素
 * @param {string} className - 类名
 * @return {Boolean} 判断后的值
 * */
export function hasClass(element, className) {
	return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

/**
 * DOM添加/删除类的切换操作
 * @param {HTMLElement} element - DOM元素
 * @param {string} className - 类名
 * */
export function toggleClass(element, className) {
	if (hasClass(element, className)) {
		removeClass(element, className)
	} else {
		addClass(element, className)
	}
}
