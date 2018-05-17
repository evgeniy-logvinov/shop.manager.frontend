export default {
	name: 'sm-text-field',

	props: {
		name: {
			type: String,
		},
		value: {
			type: String,
		},
		label: {
			type: String,
		}
	},
	methods: {
		onInput(val) {
			this.$emit('input', val)
		}
	}
}
