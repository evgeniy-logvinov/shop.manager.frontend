/* eslint-disable react/react-in-jsx-scope */

import { storiesOf, addDecorator } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import * as components from 'src/components'
import { listItems, menuItems, listWithItems } from 'src/static/'
import { CenterDecorator, MinWidth } from './decorators'
import Vue from 'vue'
import Vuetify from 'vuetify'
    
Vue.use(Vuetify)

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

addDecorator(withKnobs)

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(MinWidth(400))
  .addDecorator(CenterDecorator)
  .add('leftMenu', () => ({
  components,
  render (h) {
    return <left-menu onInput={this.logEvent} items={object('items', menuItems)} mini={ boolean('mini', true)}/>
  },
  methods: { logEvent: action('input') }
})) 
  .add('list', () => ({
    components,
    render (h) {
      return <list items={object('items', listItems)}/>
    },
    methods: { logEvent: action('input') }
  }))
  .add('listWithItems', () => ({
    components,
    render (h) {
      return <list-with-items itemsIcon={text('items_icon', 'shopping_basket')} title={text('title', 'Baskets')} items={object('items', listWithItems)}/>
    },
    methods: { logEvent: action('input') }
  }))

/* eslint-enable react/react-in-jsx-scope */
