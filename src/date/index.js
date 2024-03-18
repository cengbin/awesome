/**
 * 时间处理模块
 * @module date
 * */

/**
 * 格式化现在的已过时间
 * @param {Date} startTime
 * @return {String}
 * @example
 *
 * formatPassTime(new Date(2022-01-01 00:00:00)) ===> 1年前
 * formatPassTime(new Date(2021-21-01 10:00:00)) ===> 2月前
 */
export function formatPassTime(startTime) {
	let currentTime = Date.parse(new Date()),
		time = currentTime - startTime,
		day = parseInt(time / (1000 * 60 * 60 * 24)),
		hour = parseInt(time / (1000 * 60 * 60)),
		min = parseInt(time / (1000 * 60)),
		month = parseInt(day / 30),
		year = parseInt(month / 12)
	if (year) return year + '年前'
	if (month) return month + '个月前'
	if (day) return day + '天前'
	if (hour) return hour + '小时前'
	if (min) return min + '分钟前'
	else return '刚刚'
}

/**
 * 格式化时间戳
 * @param {number} time 时间戳
 * @param {string} fmt 格式
 * @return {String}
 * @example
 * formatTime(1700152449834) ===> 2023-11-17 00:34:09
 */
export function formatTime(time, fmt = 'yyyy-MM-dd hh:mm:ss') {
	let ret
	let date = new Date(time)
	let opt = {
		'y+': date.getFullYear().toString(),
		'M+': (date.getMonth() + 1).toString(), // 月份
		'd+': date.getDate().toString(), // 日
		'h+': date.getHours().toString(), // 小时
		'm+': date.getMinutes().toString(), // 分
		's+': date.getSeconds().toString() // 秒
	}
	for (let k in opt) {
		ret = new RegExp('(' + k + ')').exec(fmt)
		if (ret) {
			fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
		}
	}
	return fmt
}
