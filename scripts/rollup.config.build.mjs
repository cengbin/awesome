import terser from '@rollup/plugin-terser'

function defineConfig() {
	const entryFiles = ['src/index.js', 'src/date', 'src/dom', 'src/http', 'src/tools']
	const config = entryFiles.map((filePath) => {
		const fileName = filePath.split('/').pop()
		let input = `src/`
		let dist = `dist/`
		input += fileName === 'index.js' ? fileName : `${fileName}/index.js`
		dist += fileName === 'index.js' ? 'web-utils.min.js' : `web-utils.${fileName}.min.js`
		return {
			input: input,
			output: {
				file: dist,
				format: 'umd',
				name: 'utils'
			},
			plugins: [terser()]
		}
	})
	return config
}

const config = defineConfig()

export default config
