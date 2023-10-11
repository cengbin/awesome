module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	},
	globals: {
		$: true,
		jQuery: true,
		encode: false
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
