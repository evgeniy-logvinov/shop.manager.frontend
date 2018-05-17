import _ from 'lodash'
import axios from 'axios'
import * as components from 'src/components'
import {
	extractData
} from 'src/util'
import {
	Cookies,
	Config
} from 'src/store/constants'



export default {
	name: 'sm-login-form',
	components,

	data() {
		return {
			email: 'admin@test.com',
			password: 'myAdmin'
		}
	},
	methods: {
		async signIn() {
			const sm = axios.create({
				baseURL: this.$store.getters[Config.GETER_BACKEND_URL],
			})
			const response = await sm.post(`/api/v1/security/login`, {
				email: this.email,
				password: this.password
			})
			const token = _.get(response, 'data.token', null)
			
			if (response.status !== 200 || !token) {
				throw new Error('Response have not token')
			}

			this.$store.commit(Cookies.SET, {
				name: 'smToken',
				value: token,
				options: {
					// expires: Timeout.SESSION_TIMEOUT.getEndDate(),
					httpOnly: false,
				},
			}, {
				root: true
			})
			this.$router.push('baskets')
			console.log('sign in')
		},
		signUp() {
			console.log('sign up')
		}
	}
}
