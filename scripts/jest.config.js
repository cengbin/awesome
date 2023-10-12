const path = require('path')

module.exports = {
	verbose: true,
	moduleFileExtensions: ['js', 'json'],
	rootDir: path.resolve(__dirname, '../'),
	testMatch: [
		// 匹配测试用例的文件
		'<rootDir>/test/unit/*.test.js'
	],
	transform: {
		'^.+\\.jsx?$': 'babel-jest', //这个是jest的默认配置
	},
	transformIgnorePatterns: ['/node_modules/']
}
