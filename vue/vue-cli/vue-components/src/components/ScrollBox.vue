<template>
    <div>
        <div    class="scrollBox"
                :style="{position: 'fixed', width: '100vw',top: top,bottom: bottom}">
            <div  ref="refscroll" 
                :style="{position: 'fixed', width: '100vw',top: top,bottom: bottom,overflow:'hidden'}">
                <div class="moveBox">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div :style="{ width:'100vw', height: `calc( 100vh - ${top} - ${bottom})` }"></div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scrollBox',
  props: {
    top:{
        type:String,
        default:'40px'
    },
    bottom:{
        type:String,
        default:'50px'
    }
  },
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
      addperson(){
          this.$router.push('/addperson')
      }
  },
  created() {
    this.$nextTick(()=>{
        const options = {};
        options.pullUpLoad = {
            threshold: -30 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
        }
        let muneScro = new BScroll(this.$refs.refscroll,options)
        this.$emit('getScoll', muneScro)
    })
    // let that = this
    // setTimeout(function(){
    //         that.$nextTick(()=>{
    //             let muneScro = new BScroll(that.$refs.refscroll)
    //         console.log('baginScro')
    //     },500)
    // })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .zhan{
    height: 75px;
    width: 100vw;
} */

.moveBox{
    z-index: 1
}
.scrollBox{
    
}
</style>