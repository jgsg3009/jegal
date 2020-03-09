// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import store from './store'

// element ui setting
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

// Vue 선언
import Vue from 'vue'
import VueCodemirror from 'vue-codemirror' // Code Mirror import
import 'codemirror/lib/codemirror.css' // Code Mirror 기본 Css import
Vue.use(VueCodemirror)// Vue에 Code Mirror 선언

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
