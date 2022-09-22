/**
 * 解析url转对象
 * @param {String} url 需要解析的地址
 * @return {Object} 解析url后的对象
 *
 * @example parseURL(window.location.href)
 * */
function parseURL(url) {
  var a = document.createElement('a')
  a.href = url
  return {
    origin: a.origin,
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: getQueryObj(a.search),
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
function getQueryObj(query) {
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
 * */
function stringifyQuery(obj) {
  const res = obj
    ? Object.keys(obj)
      .map(key => {
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
      })
      .filter(x => x.length > 0)
      .join('&')
    : null
  return res ? `?${res}` : ''
}