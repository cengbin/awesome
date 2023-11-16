let name = 'web-utils.js'
let version = '0.0.1'
let url = 'https://cengbin.github.io/web-utils'

console.log(
	`%c ${name} %c v${version} %c ${url}`,
	'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
	'padding: 2px 1px; border-radius: 0 0 0 0; color: #fff; background: #42c02e; font-weight: bold;',
	'padding: 2px 2px 2px 2px; border-radius: 0 3px 3px 0; color: #fff; background: #ffc3dc; font-weight: bold;'
)

export * from './console/index'
export * from './date/index'
export * from './dom/index'
export * from './tools/index'
