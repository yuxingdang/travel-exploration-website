// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import * as VueMaps from 'vue2-google-maps';

//Vue.config.productionTip = false

Vue.use(VueMaps, {
  load: {
    key: 'AIzaSyAGWMat-PuKc5EZYagC5xVQoqRh9bb9ZsA',
    libraries: 'places'
  }
})



/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
