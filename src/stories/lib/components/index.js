import { storiesOf } from '@storybook/vue'
import { text, boolean, object, array, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { CenterDecorator, MinWidth } from 'src/stories/decorators'
import { listItems, menuItems, listWithItems } from 'src/static/'
import * as components from 'src/components'

export default () => {
	storiesOf('Components', module)
		.addDecorator(MinWidth(400))
		.addDecorator(CenterDecorator)
		.add('leftMenu', () => ({
			components,
			render(h) {
				return <left-menu onInput={this.logEvent} items={object('items', menuItems)} mini={boolean('mini', true)} />
			},
			methods: { logEvent: action('input') }
		}))
		.add('list', () => ({
			components,
			render(h) {
				return <list items={object('items', listItems)} />
			},
			methods: { logEvent: action('input') }
		}))
		.add('listWithItems', () => ({
			components,
			render(h) {
				return <list-with-items
					createItemIcon={text('create_item_icon', 'add_shopping_cart')}
					itemsIcon={text('items_icon', 'shopping_basket')}
					subItemsIcon={text('sub_items_icon', 'done')}
					title={text('title', 'Baskets')}
					items={object('items', listWithItems)} />
			},
			methods: { logEvent: action('input') }
		}))
		.add('SmButton', () => ({
			components,
			render(h) {
				return <sm-button color={text('color', 'red')} onClick={this.logEvent}>Text</sm-button>
			},
			methods: { logEvent: action('click') }
		}))
		.add('SmTextField', () => ({
			components,
			render(h) {
				return <sm-text-field name={text('name', 'name')}
					value={text('value', 'value')}
					label={text('label', 'label')} />
			},
		}))
}
