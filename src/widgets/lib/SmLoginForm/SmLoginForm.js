import _ from 'lodash'
import axios from 'axios'
import * as components from 'src/components'
import { extractData } from 'src/util'
import { Cookies } from 'src/store/constants'

const sm = axios.create({
	baseURL: process.env.SHOP_URL,
})

export default {
	name: 'sm-login-form',
	components,
	methods: {
		async signIn() {
			
			const response = await sm.post(`/api/v1/security/login`, { email: 'aaaa', password: 'bbb' })
			const token = _.get(response, 'data.token', null)

			if (response.status !== 200 || token) {
				throw new Error('Response have not token')
			}

			this.$store.commit(Cookies.SET, {
				name: 'smToken',
				value: token,
				options: {
					// expires: Timeout.SESSION_TIMEOUT.getEndDate(),
					httpOnly: false,
				},
			}, { root: true })
			console.log('sign in')
		},
		signUp() {
			console.log('sign up')
		}
	}
}
