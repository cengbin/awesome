import { name, version, repository } from '../package.json'

console.log(
	`%c ${name} %c v${version} %c ${repository.url}`,
	'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
	'padding: 2px 1px; border-radius: 0 0 0 0; color: #fff; background: #42c02e; font-weight: bold;',
	'padding: 2px 2px 2px 2px; border-radius: 0 3px 3px 0; color: #fff; background: #ffc3dc; font-weight: bold;'
)

import './console/index'
import * as date from './date/index'
import * as dom from './dom/index'
import * as util from './tools/index'
import * as regexp from './regexp/index'

import Loading from './components/loading/index'

export { version, name, date, dom, util, regexp, Loading }
