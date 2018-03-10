export default {
	name: 'left-menu',
	props: {
		items: {
			type: Array,
			required: true
		},
		isMini: {
			type: Boolean
		},
	},
	data() {
		return {
			drawer: null,
			mini: this.isMini
		}
	}
}
