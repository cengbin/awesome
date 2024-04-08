const json = require('@rollup/plugin-json')
const {name, version} = require('../package.json')

module.exports = [
	{
		input: 'src/index.js',
		output: {
			file: `dist/${name}.js`,
            format: 'umd',
            name: name,
		},
		plugins: [json()]
	}
]
