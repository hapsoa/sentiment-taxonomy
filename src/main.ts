import Vue from 'vue';
import './plugins/vuetify';
import App from './App';
import router from './router';
import store from './store';
import './registerServiceWorker';

import {
  SampleCreator
} from '@/plugins/ui';

Vue.use(SampleCreator);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
