const json = require('@rollup/plugin-json')
const {version} = require('../package.json')

module.exports = [
	{
		input: 'src/index.js',
		output: {
			file: `dist/best-common-${version}.js`,
			format: 'umd',
			name: 'BestCommon'
		},
		plugins: [json()]
	}
]
