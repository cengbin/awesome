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
export function parseUrl(url) {
  var a = document.createElement('a')
  a.href = url
  return {
    origin: a.origin,
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: parseQuery(a.search),
    file: (a.pathname.match(/([^/?#]+)$/i) || [, ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^/])/, '/$1'),
    relative: (a.href.match(/tps?:\/[^/]+(.+)/) || [, ''])[1],
    segments: a.pathname.replace(/^\//, '').split('/')
  }
}

/**
 * 解析query转对象
 * */
export function parseQuery(query) {
  query = query || window.location.search

  return query
    .replace(/(^\?)/, '')
    .split('&')
    .reduce((searchParams, keyValuePair) => {
      keyValuePair = keyValuePair.split('=')
      searchParams[keyValuePair[0]] = keyValuePair[1]
      return searchParams
    }, {})
}

/**
 * 对象转query字符串
 * @param query对象
 * @return {String} query字符串
 * */
export function stringifyQuery(obj) {
  const res = obj
    ? Object.keys(obj).map(key => {
      const val = obj[key]

      if (val === undefined) {
        return ''
      }

      if (val === null) {
        return encode(key)
      }

      if (Array.isArray(val)) {
        const result = []
        val.forEach(val2 => {
          if (val2 === undefined) {
            return
          }
          if (val2 === null) {
            result.push(encode(key))
          } else {
            result.push(encode(key) + '=' + encode(val2))
          }
        })
        return result.join('&')
      }

      return encode(key) + '=' + encode(val)
    }).filter(val => val.length > 0).join('&')
    : null
  return res ? `?${res}` : ''
}