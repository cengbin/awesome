import { name, version, homepage } from '../package.json'

console.log(
	`%c ${name} %c v${version} %c ${homepage}`,
	'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
	'padding: 2px 1px; border-radius: 0 0 0 0; color: #fff; background: #42c02e; font-weight: bold;',
	'padding: 2px 2px 2px 2px; border-radius: 0 3px 3px 0; color: #fff; background: #ffc3dc; font-weight: bold;'
)

import './console/index'
import * as util from './util/index'
import * as regexp from './regexp/index'
import * as cookie from './cookie/index'

export default {
	version,
	name,
	util,
	regexp,
	cookie
}
