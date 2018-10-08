// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VuerResource from 'vue-resource';
import App from './App';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Seller from './components/seller/seller';
import './common/stylus/index.styl';

// 1.注册
Vue.use(VueRouter);
Vue.use(VuerResource);

// 2.定义路由
const routes = [
  { path: './', component: App },
  { path: '/goods', component: Goods },
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
];

// 3.创建和挂载根实例，然后传 routes 配置
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
// 4.创建和挂载根实例。
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// 打开的默认路径
router.push('/goods');
