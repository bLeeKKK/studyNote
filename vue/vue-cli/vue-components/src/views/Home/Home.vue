<template>
  <div class="home">
    <router-view></router-view>
    <!-- <TabbarRouterLink :tabbarArr="tabbarArr" activeColor="red"/> -->
    <Tabbar-lb :tabbarArr="tabbarArr" 
                activeColor="green"
                iconSize="20px"
                fontSize="14px"
                boxHeight="50px"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return {
      tabbarArr: [
        {
          icon: 'icon-guanli1',
          path: '/homePage/page1',
          name: '首页',
        },
        {
          icon: 'icon-xiaoxi',
          path: '/homePage/page2',
          name: '消息',
        },
        {
          icon: 'icon-icon-yxj-empty-discover',
          path: '/homePage/page3',
          name: '发现',
        },
        {
          icon: 'icon-wode',
          path: '/homePage/page4',
          name: '我的',
        },
      ],
    }
  }
}
</script>
