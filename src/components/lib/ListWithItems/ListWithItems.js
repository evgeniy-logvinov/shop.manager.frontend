export default {
	name: 'list-with-items',
	props: {
		items: {
			type: Array,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		itemsIcon: {
			type: String
		}
	},
	methods: {
		alert(text) {
			console.log('text', text)
		}
	}
}
