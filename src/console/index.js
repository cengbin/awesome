/**
 * console 对console模块的扩展
 * 参考：
 * https://github.com/chalk/chalk
 * https://juejin.cn/post/7087192401978064933?searchId=20231116233523CE494AE6E9FA148D7D6F
 *
 * @module web-utils/console
 * */

let colors = ['blue', 'red', 'green']

colors.forEach((color) => {
	console[color] = function (...arg) {
		var logTime = new Date()

		console.log(`${formatTimestamp(logTime)} ===> %c ${arg}`, `background-color:${color};color:white;`)
	}
})

function formatTimestamp(timestamp) {
	var year = timestamp.getFullYear()
	var month = ('0' + (timestamp.getMonth() + 1)).slice(-2)
	var date = timestamp.getDate()

	var h = ('0' + timestamp.getHours()).slice(-2)
	var m = ('0' + timestamp.getMinutes()).slice(-2)
	var s = ('0' + timestamp.getSeconds()).slice(-2)
	var ms = ('00' + timestamp.getMilliseconds()).slice(-3)
	return '[' + year + '-' + month + '-' + date + ' ' + h + ':' + m + ':' + s + ':' + ms + ']'
}
