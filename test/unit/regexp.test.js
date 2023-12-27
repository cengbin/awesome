import { isIP, isPhone } from '../../src/regexp'

describe('regexp 模块测试', () => {
	test('IP地址测试: 192.168.1.1 -> true', () => {
		expect(isIP('192.168.1.1')).toBe(true)
	})

	test('IP地址测试: abc.168.1.3 -> false', () => {
		expect(isIP('abc.168.1.3')).toBe(false)
	})

	test('手机号测试: 13552016432 -> true', () => {
		expect(isPhone('13552016432')).toBe(true)
	})
})
