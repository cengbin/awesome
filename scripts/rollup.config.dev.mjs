import json from '@rollup/plugin-json';

export default [
	{
		input: 'src/index.js',
		output: {
			file: 'dist/web-utils.js',
			format: 'umd',
			name: 'utils'
		},
		plugins: [json()]
	}
]
