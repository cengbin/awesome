import { formatPhone, hasKeys } from '../../src/util'

describe('tools 模块测试', () => {
	test("格式话手机号 formatPhone('13552016432')  -> 135****6432", () => {
		expect(formatPhone('13552016432')).toBe('135****6432')
	})

	test("hasKeys({a:1,b:2},['a','b']) ---> true", () => {
		expect(hasKeys({ a: 1, b: 2 }, ['a', 'b'])).toBe(true)
	})

	test("hasKeys({a:1,b:2},['a','b','c']) ---> false", () => {
		expect(hasKeys({ a: 1, b: 2 }, ['a', 'b', 'c'])).toBe(false)
	})
})
