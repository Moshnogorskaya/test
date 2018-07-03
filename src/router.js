import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';
import MyList from './views/MyList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'search',
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/my-list',
      name: 'my-list',
      component: MyList,
    },
  ],
});
