import {formatToNum, formatPhone, hasKeys, secondToHour, secondToMinute, hslToRgb} from '../../src/util'

describe('tools 模块测试', () => {
  test("formatToNum('1a3.456') ---> 13.45", () => {
    console.log(formatToNum('1a3.456'))
  })

  test("格式话手机号 formatPhone('13552016432')  ---> 135****6432", () => {
    expect(formatPhone('13552016432')).toBe('135****6432')
  })

  test("hasKeys({a:1,b:2},['a','b']) ---> true", () => {
    expect(hasKeys({a: 1, b: 2}, ['a', 'b'])).toBe(true)
  })

  test("hasKeys({a:1,b:2},['a','b','c']) ---> false", () => {
    expect(hasKeys({a: 1, b: 2}, ['a', 'b', 'c'])).toBe(false)
  })

  test("secondToHour(3600) ---> 1", () => {
    expect(secondToHour(60 * 60)).toBe(1)
  })

  test("secondToHour(3660) ---> 60", () => {
    expect(secondToMinute(60 * 60)).toBe(60)
  })

  test("hslToRgb(255,0,0) ---> 60", () => {
    console.log(hslToRgb(0, 1, 0.5))
  })
})
