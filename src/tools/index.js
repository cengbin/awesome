/**
 * tools 常用的工具函数
 * @module web-utils/tools
 * */

/**
 * 递归 深拷贝
 * @param data: 拷贝的数据
 */
export function deepCopyBy(data) {
	const t = getType(data)
	let o
	if (t === 'array') {
		o = []
	} else if (t === 'object') {
		o = {}
	} else {
		return data
	}

	if (t === 'array') {
		for (let i = 0; i < data.length; i++) {
			o.push(deepCopy(data[i]))
		}
	} else if (t === 'object') {
		for (let i in data) {
			o[i] = deepCopy(data[i])
		}
	}
	return o
}

function getType(obj) {
	return Object.prototype.toString.call(obj).slice(8, -1)
}

/**
 * JSON 深拷贝
 * @param data: 拷贝的数据
 * @return data Object 复制后生成的对象
 */
export function deepCopy(data) {
	return JSON.parse(JSON.stringify(data))
}

/**
 * 将手机号中间部分替换为星号
 * @param phone{string}: 手机号码
 */
export function formatPhone(phone) {
	return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * 防抖
 * @param func {*}  执行函数
 * @param wait {*}  防抖时间（毫秒）
 */
export function debounce(func, wait) {
	let id
	return function (...args) {
		id && clearTimeout(id)
		id = setTimeout(() => {
			func.apply(this, args)
		}, wait)
	}
}

/**
 * 节流
 * @param func {*}  执行函数
 * @param wait {*}  节流时间（毫秒）
 */
export function throttle(func, wait) {
	let lastTime = Date.now()
	return function (...args) {
		let now = Date.now()
		if (now - lastTime > wait) {
			lastTime = now
			func.apply(this, args)
		}
	}
}
