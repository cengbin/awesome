import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

export default [
	{
		input: 'src/index.js',
		output: [
			{
				file: 'dist/web-utils.js',
				format: 'umd',
				name: 'utils',
			},
			{
				file: 'dist/web-utils.min.js',
				format: 'umd',
				name: 'utils',
				plugins: [terser()]
			}
		],
		plugins: [
			json()
		]
	}
]
