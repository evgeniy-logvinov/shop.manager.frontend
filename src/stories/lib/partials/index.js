import { storiesOf } from '@storybook/vue'
import { text, boolean, object, array, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { CenterDecorator, MinWidth } from 'src/stories/decorators'
import * as partials from 'src/partials'

export default () => {
	storiesOf('Partials/UI', module)
		.addDecorator(MinWidth(400))
		.addDecorator(CenterDecorator)
}
