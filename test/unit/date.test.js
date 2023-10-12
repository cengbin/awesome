import { date } from '../../src/date'

describe('date 模块', () => {
	test('formatPassTime()测试', () => {
		expect(date.formatPassTime(1586934316925)).toBe('3年前')
	})

	test('formatPassTime()测试', () => {
		expect(date.formatPassTime(Date.now())).toBe('刚刚')
	})

	test('formatTime()默认格式，返回时间格式是否正常', () => {
		expect(date.formatTime(1586934316925)).toBe('2020-04-15 15:05:16')
	})

	test('formatTime()传参数，返回时间格式是否正常', () => {
		expect(date.formatTime(1586934316925, 'yyyy.MM.dd')).toBe('2020.04.15')
	})
})
