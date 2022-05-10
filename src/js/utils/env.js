// 获取当前页面一级域名
function getDomain(domain) {
  var domainList = (domain || document.domain).split('.')
  if (domainList.length > 2) {
    domainList.shift()
  }
  return domainList.join('.')
}

// 获取当前页面的业务域名
function getBusinessDomain() {
  return 'xxx.google.com'
}

// 获取运行时环境
function getRunningEnv() {
  let host = window.location.host
  let env = `${/dfdevtest/g.test(host) // dfdevtestpartner.dmall.com.hk df来客测试环境
    ? 'dfdevtest'
    : /dfuat/g.test(host) // https://dfuatpartner.dmall.com.hk df来客UAT环境
      ? 'dfuat'
      : /test/g.test(host)
        ? 'test'
        : (/dev/g.test(host)
          ? 'dev'
          : (/uat/g.test(host))
            ? 'uat'
            : (/rd-/g.test(host))
              ? 'rd-'
              : (/mid/g.test(host))
                ? 'mid'
                : '')}`
  return env
}