module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
		jest:true,
	},
	globals: {
		// browser
		encode: false,
		// jquery
		$: true,
		jQuery: true,
	},
  extends: ['eslint:recommended', 'prettier'],
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error'
	}
}
