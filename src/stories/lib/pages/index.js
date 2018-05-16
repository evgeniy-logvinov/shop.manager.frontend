import { storiesOf } from '@storybook/vue'
import { CenterDecorator, MinWidth } from 'src/stories/decorators'
// import * as pages from 'src/pages'

export default () => {
	storiesOf('Pages', module)
		.addDecorator(MinWidth(400))
		.addDecorator(CenterDecorator)
		// .add('leftMenu', () => ({
		// 	components: pages,
		// 	render(h) {
		// 		return <login/>
		// 	},
		// 	methods: { logEvent: action('input') }
		// }))
}
