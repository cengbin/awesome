const json = require('@rollup/plugin-json')

module.exports = [
	{
		input: 'src/index.js',
		output: {
			file: `dist/best-common.js`,
			format: 'umd',
			name: 'BestCommon'
		},
		plugins: [json()]
	}
]
