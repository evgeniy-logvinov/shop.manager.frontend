import {
	Config
} from 'src/store/constants'

export default {
	data: () => ({
		drawer: null,
		mini: true,
		title: ''
	}),
	props: {
		source: String
	},
	created() {
		this.title = this.$store.getters[Config.GETER_APP_TITLE]
	},
	methods: {
		goTo(path) {
			this.$router.push(path)
		}
	}
}
