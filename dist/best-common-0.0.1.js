(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BestCommon = {}));
})(this, (function (exports) { 'use strict';

  var name = "best-common";
  var version = "0.0.1";
  var repository = {
  	type: "git",
  	url: "https://github.com/cengbin/web-utils.git"
  };

  /**
   * console 对console模块的扩展
   * 参考：
   * https://github.com/chalk/chalk
   * https://juejin.cn/post/7087192401978064933?searchId=20231116233523CE494AE6E9FA148D7D6F
   *
   * @module web-utils/console
   * */

  let colors = ['blue', 'red', 'green'];

  colors.forEach((color) => {
  	console[color] = function (...arg) {
  		var logTime = new Date();

  		console.log(`${formatTimestamp(logTime)} ===> %c ${arg}`, `background-color:${color};color:white;`);
  	};
  });

  function formatTimestamp(timestamp) {
  	var year = timestamp.getFullYear();
  	var month = ('0' + (timestamp.getMonth() + 1)).slice(-2);
  	var date = timestamp.getDate();

  	var h = ('0' + timestamp.getHours()).slice(-2);
  	var m = ('0' + timestamp.getMinutes()).slice(-2);
  	var s = ('0' + timestamp.getSeconds()).slice(-2);
  	var ms = ('00' + timestamp.getMilliseconds()).slice(-3);
  	return '[' + year + '-' + month + '-' + date + ' ' + h + ':' + m + ':' + s + ':' + ms + ']'
  }

  /**
   * date 时间处理
   * @module web-utils/date
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
  function formatPassTime(startTime) {
  	let currentTime = Date.parse(new Date()),
  		time = currentTime - startTime,
  		day = parseInt(time / (1000 * 60 * 60 * 24)),
  		hour = parseInt(time / (1000 * 60 * 60)),
  		min = parseInt(time / (1000 * 60)),
  		month = parseInt(day / 30),
  		year = parseInt(month / 12);
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
  function formatTime(time, fmt = 'yyyy-MM-dd hh:mm:ss') {
  	let ret;
  	let date = new Date(time);
  	let opt = {
  		'y+': date.getFullYear().toString(),
  		'M+': (date.getMonth() + 1).toString(), //月份
  		'd+': date.getDate().toString(), //日
  		'h+': date.getHours().toString(), //小时
  		'm+': date.getMinutes().toString(), //分
  		's+': date.getSeconds().toString() //秒
  	};
  	for (let k in opt) {
  		ret = new RegExp('(' + k + ')').exec(fmt);
  		if (ret) {
  			fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
  		}
  	}
  	return fmt
  }

  var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatPassTime: formatPassTime,
    formatTime: formatTime
  });

  /**
   * dom DOM操作
   * @module web-utils/dom
   * */

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

  var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addScript: addScript,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass
  });

  /**
   * tools 常用的工具函数
   * @module web-utils/tools
   * */

  // 类型检测
  function getType(obj) {
  	return Object.prototype.toString.call(obj).slice(8, -1)
  }

  /**
   * 递归 深拷贝
   * @param data: 拷贝的数据
   */
  function deepCopyBy(data) {
  	const t = getType(data);
  	let o;
  	if (t === 'array') {
  		o = [];
  	} else if (t === 'object') {
  		o = {};
  	} else {
  		return data
  	}

  	if (t === 'array') {
  		for (let i = 0; i < data.length; i++) {
  			o.push(deepCopy(data[i]));
  		}
  	} else if (t === 'object') {
  		for (let i in data) {
  			o[i] = deepCopy(data[i]);
  		}
  	}
  	return o
  }

  /**
   * JSON 深拷贝
   * @param data: 拷贝的数据
   * @return data Object 复制后生成的对象
   */
  function deepCopy(data) {
  	return JSON.parse(JSON.stringify(data))
  }

  /**
   * 根据类型返回正则
   * @param str{string}: 检测的内容
   * @param type{string}: 检测类型
   */
  function checkType(str, type) {
  	const regexp = {
  		ip: /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(str),
  		port: /^(\d|[1-5]\d{4}|6[1-4]\d{3}|65[1-4]\d{2}|655[1-2]\d|6553[1-5])$/.test(str),
  		phone: /^1[3|4|5|6|7|8][0-9]{9}$/.test(str), //手机号
  		number: /^[0-9]+$/.test(str), //是否全数字,
  		email: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(str),
  		IDCard:
  			/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
  				str
  			),
  		url: /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i.test(str)
  	};
  	return regexp[type]
  }

  /**
   * 将手机号中间部分替换为星号
   * @param phone{string}: 手机号码
   */
  function formatPhone(phone) {
  	return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  }

  /**
   * 防抖
   * @param func {*}  执行函数
   * @param wait {*}  节流时间,毫秒
   */
  function debounce(func, wait) {
  	let timeout;
  	return function () {
  		let context = this;
  		let args = arguments;

  		if (timeout) clearTimeout(timeout);

  		timeout = setTimeout(() => {
  			func.apply(context, args);
  		}, wait);
  	}
  }

  /**
   * 节流
   * @param func {*}  执行函数
   * @param wait {*}  节流时间,毫秒
   */
  function throttle(func, wait) {
  	let previous = 0;
  	return function () {
  		let now = Date.now();
  		let context = this;
  		if (now - previous > wait) {
  			func.apply(context, arguments);
  			previous = now;
  		}
  	}
  }

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    deepCopyBy: deepCopyBy,
    deepCopy: deepCopy,
    checkType: checkType,
    formatPhone: formatPhone,
    debounce: debounce,
    throttle: throttle
  });

  let fullScreenLoading = null;

  const Loading = function () {
  	if (fullScreenLoading) {
  		return fullScreenLoading
  	}

  	let instance = {
  		showing: false,
  		el: null,
  		init() {
  			let loadingEle = document.createElement('div');
  			loadingEle.setAttribute('id', 'loading');

  			let span = document.createElement('div');
  			span.innerText = 'loading...';
  			span.setAttribute('class', 'text');
  			loadingEle.appendChild(span);

  			this.el = loadingEle;
  		},
  		setText(text) {
  			let span = this.el.querySelector('.text');
  			span.innerText = text || 'loading...';
  			return this
  		},
  		show() {
  			if (!this.showing) {
  				this.showing = true;
  				document.body.appendChild(this.el);
  			}
  			return this
  		},
  		hide() {
  			if (this.showing) {
  				this.showing = false;
  				document.body.removeChild(this.el);
  			}
  			return this
  		}
  	};
  	instance.init();

  	fullScreenLoading = instance;

  	return instance
  };

  console.log(
  	`%c ${name} %c v${version} %c ${repository.url}`,
  	'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
  	'padding: 2px 1px; border-radius: 0 0 0 0; color: #fff; background: #42c02e; font-weight: bold;',
  	'padding: 2px 2px 2px 2px; border-radius: 0 3px 3px 0; color: #fff; background: #ffc3dc; font-weight: bold;'
  );

  exports.Loading = Loading;
  exports.date = index$2;
  exports.dom = index$1;
  exports.util = index;
  exports.version = version;

}));
