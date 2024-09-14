module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
		jest: true,
	},
	globals: {
		// browser
		encode: false,
		// jquery
		$: true,
		jQuery: true,
		// 微信
		wx: true,
	},
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'spaced-comment': 'error'
	}
}
