/**
 * wxp模块，对wx api的扩展
 * @module wxp
 * */

/**
 * 跳转到指定路径
 * @param url {String} 路径
 * @param queryObj {Object} 路径参数
 * */
export function navigateToUrl(url, queryObj = {}) {
	const queryString = Object.keys(queryObj)
		.filter((key) => queryObj[key] != null || queryObj[key] != undefined)
		.map((key) => `${key}=${queryObj[key]}`)
		.join('&')

	url = `${url}?${queryString}`

	wx.navigateTo({ url })
}
