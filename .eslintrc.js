module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	},
	globals: {
		// browser
		encode: false,
		// jquery
		$: true,
		jQuery: true,
		// jest
		describe: false,
		test: false,
		expect: false,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error'
	}
}
