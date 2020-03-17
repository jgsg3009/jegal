import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

<<<<<<< HEAD
Vue.use(ElementUI, { locale });
import App from './App.vue'
=======
Vue.use(ElementUI);
import App from './App.vue';
>>>>>>> 99ef3b4711c8dcd2f717e43dd012712d1f333361

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app')