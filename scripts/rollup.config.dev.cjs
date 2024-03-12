const json = require('@rollup/plugin-json')

module.exports = [
	{
		input: 'src/index.js',
		output: {
			file: `dist/awesome-common.js`,
			format: 'umd',
			name: 'AwesomeCommon'
		},
		plugins: [json()]
	}
]
