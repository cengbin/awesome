const json = require('@rollup/plugin-json')
const terser = require('@rollup/plugin-terser')
const {babel} = require("@rollup/plugin-babel")

module.exports = [
  {
    input: 'src/index.js',
    output: [
      {
        file: `dist/awesome.js`,
        format: 'umd',
        name: 'Awesome',
      },
      {
        file: `dist/awesome.min.js`,
        format: 'umd',
        name: 'Awesome',
        plugins: [terser()]
      },
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
