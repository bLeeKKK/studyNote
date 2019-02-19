<template>
  <div class="lb-header">
    <!-- <slot name="right"></slot> -->
    <header class="header" :style="{backgroundColor:bgColor,boxShadow:bxShadow,color:color,borderBottom,zIndex}">
      <span>
        <i  class="iconfont icon-iconfontyoujiantou-copy-copy-copy" 
            @click="backIconShow ? backRourer() : noBack()"
            :style="{color: iconColor}"></i>
      </span>
       <span :style="{color}">
         {{title}}
       </span>
       <span>
          <slot></slot>
       </span>
    </header>
    <div class="headerZhan">
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState } from 'vuex'
export default {
  props:{
    title:{//标题
      type:String,
      default:'标题'
    },
    borderBottom:{//底部border
      type: String,
      default:'1px solid #ddd'
    },
    backPath:{ //返回指定路径 ( 需要配合 vuex 调用，并使用框架调用返回键的回调 )
      type: String,
      default: null
    },
    bgColor:{ //背景颜色
      type:String,
      default:"#fff"
    },
    color:{ //字体颜色
      type:String,
      default:"#424242"
    },
    bxShadow:{ //头部的阴影
      type: String,
      default: ''
    },
    iconColor:{ //icon的颜色
      type: String,
      default:'#424242'
    },
    backIconShow:{//是否展示返回的icon
      type: Boolean,
      default: true
    },
    zIndex:{//层级
      type: Number,
      defaul: 10000
    }
  },
  name: 'lb-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    // ...mapState(['backPath']),
  },
  methods:{
    backRourer(){
      if(this.backPath){
        this.$router.push(this.backPath)
      }else{
        this.$router.go(-1)
      } 
    },
    noBack(){
      
    },
    ...mapMutations(['setBackPath'])
  },
  created(){
    this.setBackPath(this.backPath)
  },
  watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* linear-gradient(#4ed378,#86ed68) */
/* .header{
    background-color: #fff;
    color: #424242;
    box-shadow: 0 0 5px 0px#4ed378;
    height: 8vh;
    font-size: 20px;
    font-weight: 600;
    z-index: 1000;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 100vw
}

.icon-infenicon17{
    font-size: 28px
} */
header{
  /* z-index: 1000; */
  position: fixed;
  top: 0;
  width: 100vw;
  /* background-color: #fff; */
  height: 40px;
  font-size: 18px;
  /* font-weight: 600; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;
  z-index: 1;
}
.iconfont{
    font-size: 17px
} 
span:nth-of-type(1),span:nth-of-type(3){
    width: 30px
}
span:nth-of-type(3){
    /* text-align: right; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.headerZhan{
  height: 40px;
  width: 100vw;
}
</style>