/**
 * 计算天数差的函数，通用
 * @param sDate1 开始日期 '2002-12-18'
 * @param sDate2 介绍日期
 * @example DateDiff('2020-10-22','2021-10-22')
 * */
export function dateDiff(sDate1, sDate2) {
  var aDate, oDate1, oDate2, iDays
  aDate = sDate1.split("-")
  //转换为12-18-2002格式
  oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
  aDate = sDate2.split("-")
  oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
  //把相差的毫秒数转换为天数
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)
  return iDays
}

// 时间格式转换
function formatDate(date, fmt) {
  if (!fmt) {
    fmt = 'yyyy-MM-dd HH:mm:ss'
  }

  if (typeof date === "string") {
    var mts = date.match(/(\/Date\((\d+)\)\/)/)
    if (mts && mts.length >= 3) {
      date = parseInt(mts[2])
    }
  }
  date = new Date(date)
  if (!date || date.toUTCString() == "Invalid Date") {
    return ""
  }

  var o = {
    "M+": date.getMonth() + 1,               // 月
    "d+": date.getDate(),                    // 日
    "H+": date.getHours(),                   // 小时
    "h+": date.getHours(),                   // 小时
    "m+": date.getMinutes(),                 // 分
    "s+": date.getSeconds(),                 // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    "S": date.getMilliseconds()             // 毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
  return fmt
}