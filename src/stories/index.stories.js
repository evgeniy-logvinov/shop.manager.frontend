/* eslint-disable react/react-in-jsx-scope */

import { storiesOf, addDecorator } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

// import * as Components from 'src/components'
// import * as Pages from 'src/pages'

import components from './lib/components'
import partials from './lib/partials'
import pages from './lib/pages'
import widgets from './lib/widgets'

import { CenterDecorator, MinWidth } from './decorators'

import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(Vuetify)
// Vue.use(Components)
// Vue.use(Pages)

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

addDecorator(withKnobs)

components()
partials()
pages()
widgets()


/* eslint-enable react/react-in-jsx-scope */
