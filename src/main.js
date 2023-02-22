import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store.js'
import common from './assets/js/common.js'
import {post,fetch,patch,put} from '@/assets/js/http'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

// vant html组件
import { Button } from 'vant'
import { Swipe, SwipeItem } from 'vant';
import { NoticeBar } from 'vant';
import { Col, Row } from 'vant';
import { Icon } from 'vant';
import { Field } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Popup } from 'vant';
import { Cell, CellGroup } from 'vant';
import { CountDown } from 'vant';
import { Overlay } from 'vant';
import { NumberKeyboard } from 'vant';
import { Calendar } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Form } from 'vant';
import { Picker } from 'vant';
import { PullRefresh } from  'vant';
import { List } from 'vant';
import { Tab, Tabs } from 'vant';
import { Switch } from 'vant';

Vue.use(Switch);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NumberKeyboard);
Vue.use(Overlay);
Vue.use(CountDown);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
Vue.use(NoticeBar);
Vue.use(Button)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Calendar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(Picker);
Vue.use(PullRefresh);
Vue.use(List)
Vue.use(VueCookies)

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(store.state.isLogin){
      next()
    } else {
      next({path: '/login', query:{ redirect: to.fullPath}})
    }
  } else {
    next()
  }
})

new Vue({
  data: function(){
    return {
      //  全局变量  刷新后初始化
      common: common, // common方法
    }
  },
  render: h => h(App),
  router,
  store,
}).$mount('#app')
