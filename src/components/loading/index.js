let fullScreenLoading = null

const Loading = function () {
	if (fullScreenLoading) {
		return fullScreenLoading
	}

	let instance = {
		showing: false,
		el: null,
		init() {
			let loadingEle = document.createElement('div')
			loadingEle.setAttribute('id', 'loading')

			let span = document.createElement('div')
			span.innerText = 'loading...'
			span.setAttribute('class', 'text')
			loadingEle.appendChild(span)

			this.el = loadingEle
		},
		setText(text) {
			let span = this.el.querySelector('.text')
			span.innerText = text || 'loading...'
			return this
		},
		show() {
			if (!this.showing) {
				this.showing = true
				document.body.appendChild(this.el)
			}
			return this
		},
		hide() {
			if (this.showing) {
				this.showing = false
				document.body.removeChild(this.el)
			}
			return this
		}
	}
	instance.init()

	fullScreenLoading = instance

	return instance
}

export default Loading
