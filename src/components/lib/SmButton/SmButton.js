export default {
	name: 'sm-button',

	props: {
		color: {
			type: String,
		},
	},
	methods: {
		onClick() {
			this.$emit('click')
		}
	}
}
