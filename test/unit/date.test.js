import { formatPassTime, formatTime } from '../../src/date'

describe('date 模块测试', () => {
	test('formatPassTime()测试', () => {
		expect(formatPassTime(1586934316925)).toBe('3年前')
	})

	test('formatPassTime()测试', () => {
		expect(formatPassTime(Date.now())).toBe('刚刚')
	})

	test('formatTime()默认格式，返回时间格式是否正常', () => {
		expect(formatTime(1586934316925)).toBe('2020-04-15 15:05:16')
	})

	test('formatTime()传参数，返回时间格式是否正常', () => {
		expect(formatTime(1586934316925, 'yyyy.MM.dd')).toBe('2020.04.15')
	})
})
