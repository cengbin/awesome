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
export function setCookie(name, value, expires, path, domain, secure) {
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
 *
 * @example getCookie('tasty')
 */
export function getCookie(name) {
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
 *
 * @example deleteCookie('tasty','/grou-purchase','.abobe.com');
 */
export function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + '=' +
      ((path) ? '; path=' + path : '') +
      ((domain) ? '; domain=' + domain : '') +
      '; expires=Thu, 01-Jan-70 00:00:01 GMT'
  }
}

/**
 * 获取想要的时间
 * @param str s1一秒 h1一小时 d1一天
 * @return {number} 当前时间+str的时间
 * @example getDate('s30') 30s之后的时间
 * */
export function getDate(str) {
  var str1 = str.substring(0, 1)
  var str2 = str.substring(1, str.length) * 1
  var time = 0
  if (str1 === 's') {
    time = str2 * 1000
  } else if (str1 === 'h') {
    time = str2 * 60 * 60 * 1000
  } else if (str1 === 'd') {
    time = str2 * 24 * 60 * 60 * 1000
  }
  var data = new Date()
  data.setTime(data.valueOf() + time)
  return data
}