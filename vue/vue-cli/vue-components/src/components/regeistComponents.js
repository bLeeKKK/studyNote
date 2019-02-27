import Vue from 'vue';

import TabbarRouterLink from './TabbarRouterLink'; // vue 自带路由 tab切换
import Tabbar from './Tabbar';          // 自己写的 tab切换
import Header from './Header';          // 头部
import ScrollBox from './ScrollBox';    // 滚动

Vue.component("TabbarRouterLink" , TabbarRouterLink);
Vue.component("Tabbar-lb", Tabbar);
Vue.component("ScrollBox-lb", ScrollBox);
Vue.component("Header-lb", Header);