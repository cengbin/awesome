import terser from '@rollup/plugin-terser'

function defineConfig() {
	const entryFiles = ['src/index.js', 'src/date/index.js', 'src/dom/index.js', 'src/http/index.js', 'src/util/index.js']
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
