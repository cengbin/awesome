const glob = require('glob')
const path = require('path')
const { terser } = require('rollup-plugin-terser')

function defineConfig() {
	const entryFiles = glob.sync(path.resolve(__dirname, '../src') + '/*')
	const config = entryFiles.map((filePath) => {
		const fileName = filePath.split('/').pop()
		let input = `src/`
		let dist = `dist/`
		input += fileName === 'index.js' ? fileName : `${fileName}/index.js`
		dist += fileName === 'index.js' ? 'web-common.min.js' : `web-common.${fileName}.min.js`
		return {
			input: input,
			output: {
				file: dist,
				format: 'umd',
				name: 'common'
			},
			plugins: [terser()]
		}
	})
	return config
}

const config = defineConfig()

export default config
