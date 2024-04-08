(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.lodme = factory());
})(this, (function () { 'use strict';

  var name = "lodme";
  var version = "0.0.1";
  var homepage = "https://cengbin.github.io/lodme";

  /**
   * console模块是对console的扩展
   * @module console
   * */

  /*
   * 参考：
   * https://github.com/chalk/chalk
   * https://juejin.cn/post/7087192401978064933?searchId=20231116233523CE494AE6E9FA148D7D6F
   * */

  var colors = ['blue', 'red', 'green'];
  colors.forEach(function (color) {
    console[color] = function () {
      var logTime = new Date();
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }
      console.log("".concat(formatTimestamp(logTime), " ===> %c ").concat(arg), "background-color:".concat(color, ";color:white;"));
    };
  });
  function formatTimestamp(timestamp) {
    var year = timestamp.getFullYear();
    var month = ('0' + (timestamp.getMonth() + 1)).slice(-2);
    var date = ('0' + timestamp.getDate()).slice(-2);
    var h = ('0' + timestamp.getHours()).slice(-2);
    var m = ('0' + timestamp.getMinutes()).slice(-2);
    var s = ('0' + timestamp.getSeconds()).slice(-2);
    var ms = ('00' + timestamp.getMilliseconds()).slice(-3);
    return '[' + year + '-' + month + '-' + date + ' ' + h + ':' + m + ':' + s + ':' + ms + ']';
  }

  /**
   * 常用工具函数模块
   * @module util
   * */

  /**
   * 递归 深拷贝
   * @param data {Object} 拷贝的数据
   */
  function deepCopyBy(data) {
    var t = getType(data);
    var o;
    if (t === 'array') {
      o = [];
    } else if (t === 'object') {
      o = {};
    } else {
      return data;
    }
    if (t === 'array') {
      for (var i = 0; i < data.length; i++) {
        o.push(deepCopy(data[i]));
      }
    } else if (t === 'object') {
      for (var _i in data) {
        o[_i] = deepCopy(data[_i]);
      }
    }
    return o;
  }

  /**
   * JSON 深拷贝
   * @param data {Object} 拷贝的数据
   * @return data {Object} 复制后生成的对象
   */
  function deepCopy(data) {
    return JSON.parse(JSON.stringify(data));
  }

  /**
   * 将手机号中间部分替换为星号
   * @param phone {String}: 手机号码
   */
  function formatPhone(phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  }

  /**
   * 防抖
   * @param func {Function}  执行函数
   * @param wait {Number}  防抖时间（毫秒）
   */
  function debounce(func, wait) {
    var id;
    return function () {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      id && clearTimeout(id);
      id = setTimeout(function () {
        func.apply(_this, args);
      }, wait);
    };
  }

  /**
   * 节流
   * @param func {Function}  执行函数
   * @param wait {Number}  节流时间（毫秒）
   */
  function throttle(func, wait) {
    var lastTime = Date.now();
    return function () {
      var now = Date.now();
      if (now - lastTime > wait) {
        lastTime = now;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        func.apply(this, args);
      }
    };
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
  function hasKeys(obj, keys) {
    if (obj instanceof Object && keys instanceof Array) {
      var ble = false;
      for (var i = 0, n = keys.length; i < n; i++) {
        if (Object.prototype.hasOwnProperty.call(obj, keys[i])) {
          ble = true;
        } else {
          ble = false;
          break;
        }
      }
      return ble;
    }
  }

  /**
   * 格式化字符串成数字，保留2位小数
   * @param value 格式化的字符串
   * */
  function getNum(value) {
    value = value.toString();
    // 只能输入"数字"和"."
    value = value.replace(/[^\d.]/g, '');
    // 第一位字符不能为"."
    value = value.replace(/^\./g, '');
    // 只能输入一个小数点且只保留一个
    value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    // 只能输入1位小数
    // value = value.replace(/^(\-)*(\d+)\.(\d).*$/, "$1$2.$3");
    // 只能输入两个小数
    // eslint-disable-next-line
    value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
    return value;
  }

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
    var currentTime = Date.parse(new Date()),
      time = currentTime - startTime,
      day = parseInt(time / (1000 * 60 * 60 * 24)),
      hour = parseInt(time / (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
    if (year) return year + '年前';
    if (month) return month + '个月前';
    if (day) return day + '天前';
    if (hour) return hour + '小时前';
    if (min) return min + '分钟前';else return '刚刚';
  }

  /**
   * 格式化时间戳
   * @param {number} time 时间戳
   * @param {string} fmt 格式
   * @return {String}
   * @example
   * formatTime(1700152449834) ===> 2023-11-17 00:34:09
   */
  function formatTime(time) {
    var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd hh:mm:ss';
    var ret;
    var date = new Date(time);
    var opt = {
      'y+': date.getFullYear().toString(),
      'M+': (date.getMonth() + 1).toString(),
      // 月份
      'd+': date.getDate().toString(),
      // 日
      'h+': date.getHours().toString(),
      // 小时
      'm+': date.getMinutes().toString(),
      // 分
      's+': date.getSeconds().toString() // 秒
    };

    for (var k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
      }
    }
    return fmt;
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
    return script;
  }

  /**
   * DOM添加类
   * @param {HTMLElement} element - DOM元素
   * @param {string} className - 类名
   * */
  function addClass(element, className) {
    var regClassName = new RegExp('(^| )' + className + '( |$)');
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
    var regClassName = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
    element.className = element.className.replace(regClassName, '');
  }

  /**
   * 判断DOM是否有某个类名
   * @param {HTMLElement} element - DOM元素
   * @param {string} className - 类名
   * @return {Boolean} 判断后的值
   * */
  function hasClass(element, className) {
    return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
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
  function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
  }

  var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    deepCopyBy: deepCopyBy,
    deepCopy: deepCopy,
    formatPhone: formatPhone,
    debounce: debounce,
    throttle: throttle,
    hasKeys: hasKeys,
    getNum: getNum,
    formatPassTime: formatPassTime,
    formatTime: formatTime,
    addScript: addScript,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass
  });

  /**
   * 正则模块
   * @module regexp
   * */

  /**
   * 检测是否是ip地址
   * @param {String} value 检测的值
   * @return {Boolean} true|false
   * */
  function isIP(val) {
    return /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(val);
  }

  /**
   * 检测是否是手机号
   * @param {String} value 检测的值
   * @return {Boolean} true|false
   * */
  function isPhone(val) {
    return /^1[3|4|5|6|7|8][0-9]{9}$/.test(val);
  }

  /**
   * 检测是否是邮箱
   * @param {String} value 检测的值
   * @return {Boolean} true|false
   * */
  function isEmail(val) {
    return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(val);
  }

  /**
   * 检测是否是身份证号
   * @param {String} value 检测的值
   * @return {Boolean} true|false
   * */
  function isIdCard(val) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(val);
  }

  /**
   * 检测是否是URL
   * @param {String} value 检测的值
   * @return {Boolean} true|false
   * */
  function isUrl(val) {
    return /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i.test(val);
  }

  var regexp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isIP: isIP,
    isPhone: isPhone,
    isEmail: isEmail,
    isIdCard: isIdCard,
    isUrl: isUrl
  });

  /**
   * OS模块，获取系统/平台信息
   * @module os
   * */

  /**
   * 是否是 window 系统
   * */
  function isWindows() {}

  /**
   * 是否是 MacOS 系统
   * */
  function isMacOS() {}

  /**
   * 是否是 Android 系统
   * */
  function isAndroid() {}

  /**
   * 是否是京东App平台
   * */
  function isJDApp() {}

  /**
   * 是否是淘宝App平台
   * */
  function isTaobaoApp() {}

  var os = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isWindows: isWindows,
    isMacOS: isMacOS,
    isAndroid: isAndroid,
    isJDApp: isJDApp,
    isTaobaoApp: isTaobaoApp
  });

  console.log("%c ".concat(name, " %c v").concat(version, " %c ").concat(homepage), 'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;', 'padding: 2px 1px; border-radius: 0 0 0 0; color: #fff; background: #42c02e; font-weight: bold;', 'padding: 2px 2px 2px 2px; border-radius: 0 3px 3px 0; color: #fff; background: #ffc3dc; font-weight: bold;');
  var index = {
    version: version,
    name: name,
    util: util,
    regexp: regexp,
    os: os
  };

  return index;

}));
