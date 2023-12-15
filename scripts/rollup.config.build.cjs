const json = require('@rollup/plugin-json')
const terser = require('@rollup/plugin-terser')
const {name,version} = require('../package.json')

module.exports = [
	{
		input: 'src/index.js',
		output: [
			{
				file: `dist/${name}-${version}.js`,
				format: 'umd',
				name: 'BestCommon',
			},
			{
				file: `dist/${name}-${version}.min.js`,
				format: 'umd',
				name: 'BestCommon',
				plugins: [terser()]
			}
		],
		plugins: [
			json()
		]
	}
]
