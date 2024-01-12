/**
 * 常用工具函数模块
 * @module util
 * */

/**
 * 递归 深拷贝
 * @param data {Object} 拷贝的数据
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

/**
 * JSON 深拷贝
 * @param data {Object} 拷贝的数据
 * @return data {Object} 复制后生成的对象
 */
export function deepCopy(data) {
	return JSON.parse(JSON.stringify(data))
}

/**
 * 将手机号中间部分替换为星号
 * @param phone {String}: 手机号码
 */
export function formatPhone(phone) {
	return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * 防抖
 * @param func {Function}  执行函数
 * @param wait {Number}  防抖时间（毫秒）
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
 * @param func {Function}  执行函数
 * @param wait {Number}  节流时间（毫秒）
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

/**
 * 检测对象是否含有某组属性
 * @param obj {Object} 检测对象
 * @param keys {Array} 属性列表
 * @example
 * var obj={name:"test",age:18};
 * hasKey(obj,["name","age"]) // true
 * hasKey(obj,["name","age","sex"]); // false
 */
export function hasKeys(obj, keys) {
	if (obj instanceof Object && keys instanceof Array) {
		var ble = false
		for (var i = 0, n = keys.length; i < n; i++) {
			if (Object.prototype.hasOwnProperty.call(obj, keys[i])) {
				ble = true
			} else {
				ble = false
				break
			}
		}
		return ble
	}
}

function getType(obj) {
	return Object.prototype.toString.call(obj).slice(8, -1)
}
