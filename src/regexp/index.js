/**
 * 检测是否是ip地址
 * */
export function isIP(val) {
	return /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(val)
}

/**
 * 检测是否是手机号
 * */
export function isPhone(val) {
	return /^1[3|4|5|6|7|8][0-9]{9}$/.test(val)
}

/**
 * 检测是否是邮箱
 * */
export function isEmail(val) {
	return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(val)
}

export function isIdCard(val) {
	return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
		val
	)
}

export function isUrl(val) {
	return /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i.test(val)
}
