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
 * @memberof cookie
 * @example setCookie("tasty","strawberry2")
 * @example setCookie("yummy","choco2",getDate('s3'))
 */
function setCookie(name, value, expires, path, domain, secure) {
  document.cookie = name + '=' + escape(value) +
    ((expires) ? '; expires=' + expires.toUTCString() : '') +
    ((path) ? '; path=' + path : '') +
    ((domain) ? '; domain=' + domain : '') +
    ((secure) ? '; secure' : '')
}

/**
 * Gets the value of the specified cookie.
 *
 * name  Name of the desired cookie.
 *
 * Returns a string containing value of specified cookie,
 *   or null if cookie does not exist.
 * @memberof cookie
 * @example getCookie('tasty')
 */
function getCookie(name) {
  var dc = document.cookie
  var prefix = name + '='
  var begin = dc.indexOf('; ' + prefix)
  if (begin === -1) {
    begin = dc.indexOf(prefix)
    if (begin !== 0) return null
  } else {
    begin += 2
  }
  var end = document.cookie.indexOf(';', begin)
  if (end === -1) {
    end = dc.length
  }
  return unescape(dc.substring(begin + prefix.length, end))
}

/**
 * Deletes the specified cookie.
 *
 * name      name of the cookie
 * [path]    path of the cookie (must be same as path used to create cookie)
 * [domain]  domain of the cookie (must be same as domain used to create cookie)
 * @memberof cookie
 * @example deleteCookie('tasty','/grou-purchase','.abobe.com');
 */
function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + '=' +
      ((path) ? '; path=' + path : '') +
      ((domain) ? '; domain=' + domain : '') +
      '; expires=Thu, 01-Jan-70 00:00:01 GMT'
  }
}

/**
 * 获取当前时间之后的指定时间
 * @memberof cookie
 * @param number 数字
 * @param unit 单位(s秒 m分钟 h小时 d天)
 * @return {Date} 指定的时间Date对象
 * @example
 *
 * 30s之后的时间：getDate(30,'s') => Sun May 07 2023 14:25:55 GMT+0800 (中国标准时间)
 *
 * 30s之后的时间：getDate(30,'s')
 * =>
 * Sun May 07 2023 14:25:55 GMT+0800 (中国标准时间)
 *
 * */
function getDate(number, unit) {
  var time = 0
  if (unit === 's') {
    time = number * 1000
  } else if (unit === 'm') {
    time = number * 60 * 1000
  } else if (unit === 'h') {
    time = number * 60 * 60 * 1000
  } else if (unit === 'd') {
    time = number * 24 * 60 * 60 * 1000
  } else {
    time = number * 1000
  }
  var date = new Date()
  date.setTime(date.valueOf() + time)
  return date
}

/**
 * cookie 全局命名空间
 * @namespace cookie
 */
var cookie = {
  getDate,
  setCookie,
  getCookie,
  deleteCookie
}