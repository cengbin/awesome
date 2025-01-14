const json = require('@rollup/plugin-json')

module.exports = [
	{
		input: 'src/index.js',
		output: {
			file: `dist/awesome.js`,
            format: 'umd',
            name: "Awesome",
		},
		plugins: [json()]
	}
]
