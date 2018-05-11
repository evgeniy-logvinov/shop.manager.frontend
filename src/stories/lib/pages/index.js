import { storiesOf } from '@storybook/vue'
import { CenterDecorator, MinWidth } from 'src/stories/decorators'

export default () => {
	storiesOf('Pages', module)
		.addDecorator(MinWidth(400))
		.addDecorator(CenterDecorator)
}
