<template>
  <div class="home">
    <router-view></router-view>
    <Tabbar :tabbarArr="tabbarArr"/>
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
          select: true,
        },
        {
          icon: 'icon-xiaoxi',
          path: '/homePage/page2',
          name: '消息',
          select: false,
        },
        {
          icon: 'icon-icon-yxj-empty-discover',
          path: '/homePage/page3',
          name: '发现',
          select: false,
        },
        {
          icon: 'icon-wode',
          path: '/homePage/page4',
          name: '我的',
          select: false,
        },
      ],
    }
  }
}
</script>
