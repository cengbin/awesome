const json = require('@rollup/plugin-json')
const terser = require('@rollup/plugin-terser')
const {babel} = require("@rollup/plugin-babel")
const {name, version} = require('../package.json')

module.exports = [
	{
		input: 'src/index.js',
		output: [
			{
				file: `dist/${name}.js`,
				format: 'umd',
				name: 'BestCommon',
			},
			{
				file: `dist/${name}.min.js`,
				format: 'umd',
				name: 'BestCommon',
				plugins: [terser()]
			},
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
			babel({
				babelHelpers: "bundled",
				exclude: /node_modules/
			}),
			json(),
		]
	}
]
