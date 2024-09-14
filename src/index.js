import { name, version } from '../package.json'

import * as util from './util/index'
import * as regexp from './regexp/index'
import * as os from './os/index'
import * as wxp from './wxp/index'

function getEffectiveCity(cities, cityNo) {
	let effectiveCity
	for (let i = 0; i < cities.length; i++) {
		const city = cities[i]
		if (city.cityNo == cityNo) {
			// 先匹配6位，匹配区县
			effectiveCity = city
			break
		} else if (String(city.cityNo).slice(0, 4) == String(cityNo).slice(0, 4) && city.level == '2') {
			// 再匹配4位，匹配市
			// 城市列表中有可能出现【市】在【区/县】的前面，所以要继续匹配。
			effectiveCity = city
		}
	}
	return effectiveCity
}

export default {
	version,
	name,
	util,
	regexp,
	os,
	wxp,
	getEffectiveCity
}
