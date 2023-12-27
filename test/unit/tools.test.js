import { formatPhone } from '../../src/tools'

describe('tools 模块测试', () => {
	test('formatPhone() 格式话手机号：13552016432 -> 135****6432', () => {
		expect(formatPhone('13552016432')).toBe('135****6432')
	})
})
