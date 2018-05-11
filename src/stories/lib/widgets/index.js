import { storiesOf } from '@storybook/vue'
import { text, boolean, object, array, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { CenterDecorator, MinWidth } from 'src/stories/decorators'
import * as widgets from 'src/widgets'

export default () => {
	storiesOf('Widgets', module)
		.addDecorator(MinWidth(400))
		.addDecorator(CenterDecorator)
		.add('LoginForm', () => ({
			components: widgets,
			render(h) {
				return <sm-login-form />
			},
		}))
}
