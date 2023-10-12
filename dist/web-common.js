(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.common = {}));
}(this, (function (exports) { 'use strict';

	/**
	 * class模块
	 * @module class
	 * */

	/**
	 * DOM添加类
	 * @param {HTMLElement} element - DOM元素
	 * @param {string} className - 类名
	 * */
	function addClass(element, className) {
		const regClassName = new RegExp('(^| )' + className + '( |$)');
		// ( /\s+/ 匹配任何空白符，包括\n,\r,\f,\t,\v等（换行、回车、空格、tab等）})
		if (!regClassName.test(element.className)) {
			element.className = element.className.split(/\s+/).concat(className).join(' ');
		}
	}

	/**
	 * DOM删除类
	 * @param {HTMLElement} element - DOM元素
	 * @param {string} className - 类名
	 * */
	function removeClass(element, className) {
		const regClassName = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
		element.className = element.className.replace(regClassName, '');
	}

	/**
	 * 判断DOM是否有某个类名
	 * @param {HTMLElement} element - DOM元素
	 * @param {string} className - 类名
	 * @return {Boolean} 判断后的值
	 * */
	function hasClass(element, className) {
		return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
	}

	/**
	 * DOM添加/删除类的切换操作
	 * @param {HTMLElement} element - DOM元素
	 * @param {string} className - 类名
	 * */
	function toggleClass(element, className) {
		if (hasClass(element, className)) {
			removeClass(element, className);
		} else {
			addClass(element, className);
		}
	}

	/**
	 * cookies模块
	 * @module cookies
	 * */

	/**
	 * Sets a Cookie with the given name and value.
	 *
	 * name       Name of the cookie
	 * value      Value of the cookie
	 * [expires]  Expiration date of the cookie (default: end of current session)
	 * [path]     Path where the cookie is valid (default: path of calling document)
	 * [domain]   Domain where the cookie is valid
	 *              (default: domain of calling document)
	 * [secure]   Boolean value indicating if the cookie transmission requires a
	 *              secure transmission
	 *
	 * @example setCookie("tasty","strawberry2")
	 * @example setCookie("yummy","choco2",getDate('s3'))
	 */
	function setCookie(name, value, expires, path, domain, secure) {
		document.cookie =
			name +
			'=' +
			escape(value) +
			(expires ? '; expires=' + expires.toUTCString() : '') +
			(path ? '; path=' + path : '') +
			(domain ? '; domain=' + domain : '') +
			(secure ? '; secure' : '');
	}

	/**
	 * Gets the value of the specified cookie.
	 *
	 * name  Name of the desired cookie.
	 *
	 * Returns a string containing value of specified cookie,
	 *   or null if cookie does not exist.
	 *
	 * @example getCookie('tasty')
	 */
	function getCookie(name) {
		var dc = document.cookie;
		var prefix = name + '=';
		var begin = dc.indexOf('; ' + prefix);
		if (begin === -1) {
			begin = dc.indexOf(prefix);
			if (begin !== 0) return null
		} else {
			begin += 2;
		}
		var end = document.cookie.indexOf(';', begin);
		if (end === -1) {
			end = dc.length;
		}
		return unescape(dc.substring(begin + prefix.length, end))
	}

	/**
	 * Deletes the specified cookie.
	 *
	 * name      name of the cookie
	 * [path]    path of the cookie (must be same as path used to create cookie)
	 * [domain]  domain of the cookie (must be same as domain used to create cookie)
	 *
	 * @example deleteCookie('tasty','/grou-purchase','.abobe.com');
	 */
	function deleteCookie(name, path, domain) {
		if (getCookie(name)) {
			document.cookie =
				name +
				'=' +
				(path ? '; path=' + path : '') +
				(domain ? '; domain=' + domain : '') +
				'; expires=Thu, 01-Jan-70 00:00:01 GMT';
		}
	}

	/**
	 * 获取想要的时间
	 * @param str s1一秒 h1一小时 d1一天
	 * @return {number} 当前时间+str的时间
	 * @example getDate('s30') 30s之后的时间
	 * */
	function getDate(str) {
		var str1 = str.substring(0, 1);
		var str2 = str.substring(1, str.length) * 1;
		var time = 0;
		if (str1 === 's') {
			time = str2 * 1000;
		} else if (str1 === 'h') {
			time = str2 * 60 * 60 * 1000;
		} else if (str1 === 'd') {
			time = str2 * 24 * 60 * 60 * 1000;
		}
		var data = new Date();
		data.setTime(data.valueOf() + time);
		return data
	}

	/**
	 * 添加script
	 * @param {string} url js url
	 * @param {function} [onload] 加载成功回调
	 * @param {function} [onerror] 加载失败回调
	 * @return {HTMLElement} script引用
	 */
	function addScript(url, onload, onerror) {
		var script = document.createElement('script');
		if (onload) {
			script.onload = function () {
				onload(script);
			};
		}
		script.onerror = function () {
			if (onerror) {
				onerror(script);
			} else if (onload) {
				onload(script);
			}
		};
		script.src = url;
		document.head.appendChild(script);
		return script
	}

	/**
	 * regexp模块
	 * @module regexp
	 * */

	/**
	 * 判断是否为手机号码
	 * */
	function isMobile(s) {
		var p = /^0*(13|14|15|16|17|18)\d{9}$/;
		return p.test(s)
	}

	/**
	 * 判断就否为电子邮箱
	 * */
	function isEmail(s) {
		var myreg = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		return myreg.test(s)
	}

	/**
	 * 判断是否为身份证
	 * */
	function isID(s) {
		var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		return myreg.test(s)
	}

	/**
	 * url模块
	 * @module url
	 * */

	/**
	 * 解析url
	 * @param {String} url 需要解析的地址
	 * @return {Object} 解析url后的对象
	 *
	 * @example parseUrl(window.location.href)
	 * */
	function parseUrl(url) {
		var a = document.createElement('a');
		a.href = url;
		return {
			origin: a.origin,
			source: url,
			protocol: a.protocol.replace(':', ''),
			host: a.hostname,
			port: a.port,
			query: a.search,
			params: parseQuery(a.search),
			file: (a.pathname.match(/([^/?#]+)$/i) || [null, ''])[1],
			hash: a.hash.replace('#', ''),
			path: a.pathname.replace(/^([^/])/, '/$1'),
			relative: (a.href.match(/tps?:\/[^/]+(.+)/) || [null, ''])[1],
			segments: a.pathname.replace(/^\//, '').split('/')
		}
	}

	/**
	 * 解析query转对象
	 * */
	function parseQuery(query) {
		query = query || window.location.search;

		return query
			.replace(/(^\?)/, '')
			.split('&')
			.reduce((searchParams, keyValuePair) => {
				keyValuePair = keyValuePair.split('=');
				searchParams[keyValuePair[0]] = keyValuePair[1];
				return searchParams
			}, {})
	}

	/**
	 * 对象转query字符串
	 * @param query对象
	 * @return {String} query字符串
	 * */
	function stringifyQuery(obj) {
		const res = obj
			? Object.keys(obj)
					.map((key) => {
						const val = obj[key];

						if (val === undefined) {
							return ''
						}

						if (val === null) {
							return encode(key)
						}

						if (Array.isArray(val)) {
							const result = [];
							val.forEach((val2) => {
								if (val2 === undefined) {
									return
								}
								if (val2 === null) {
									result.push(encode(key));
								} else {
									result.push(encode(key) + '=' + encode(val2));
								}
							});
							return result.join('&')
						}

						return encode(key) + '=' + encode(val)
					})
					.filter((val) => val.length > 0)
					.join('&')
			: null;
		return res ? `?${res}` : ''
	}

	const formatTime = (date) => {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hour = date.getHours();
		const minute = date.getMinutes();
		const second = date.getSeconds();

		return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
	};

	const formatNumber = (n) => {
		n = n.toString();
		return n[1] ? n : `0${n}`
	};

	exports.addClass = addClass;
	exports.addScript = addScript;
	exports.deleteCookie = deleteCookie;
	exports.formatTime = formatTime;
	exports.getCookie = getCookie;
	exports.getDate = getDate;
	exports.hasClass = hasClass;
	exports.isEmail = isEmail;
	exports.isID = isID;
	exports.isMobile = isMobile;
	exports.parseQuery = parseQuery;
	exports.parseUrl = parseUrl;
	exports.removeClass = removeClass;
	exports.setCookie = setCookie;
	exports.stringifyQuery = stringifyQuery;
	exports.toggleClass = toggleClass;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
