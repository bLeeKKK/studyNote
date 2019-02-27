<template>
  <div class="Tabbar">
    <ul class="ulList"
        :style="{ height: boxHeight }">
        <li @click="cgTabbar(index)"
            class="item" 
            v-for="( tabbarItem, index) in tabbarArr" 
            :key="index">
            <div :style="{color: tabbarItem.select ? activeColor : ''}">
                <span>
                    <i  class="iconfont" 
                        :class="[tabbarItem.icon]"
                        :style="{'font-size': iconSize}"></i>
                </span> 
                <span :style="{ fontSize }">
                    {{tabbarItem.name}}
                </span>
            </div>
        </li>
    </ul>
    <div :style="{ height: boxHeight, width: '100vw' }"></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'Tabbar',
    props: {
        tabbarArr:{
            type:Array,
            required: true,
        },
        boxHeight: {        // 整体高度
            type: String,
            default: '50px'
        },
        activeColor: {      // 被选中颜色
            type: String,
            default: 'red'
        },
        iconSize: {         // icon大小
            type: String,
            default: '20px'
        },
        fontSize: {         //字体大小
            type: String,
            default: '14px'
        }
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
        }
    },
    methods:{
        cgTabbar(index){
            this.$router.push( this.tabbarArr[index].path )
        },
    },
    created() {
        for(let key in this.tabbarArr){
            Vue.set(this.tabbarArr[key], 'select' , false)
            if(this.$route.path === this.tabbarArr[key].path){
                Vue.set(this.tabbarArr[key], 'select' , true)
            }
        }
    },
    watch:{
        $route:{
            handler(val,oldVal){
                for(let key in this.tabbarArr){
                    Vue.set(this.tabbarArr[key], 'select' , false)
                    if(val.path === this.tabbarArr[key].path){
                        Vue.set(this.tabbarArr[key], 'select' , true)
                    }
                }
            },
            // 深度观察监听
            deep: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/css/configCss.less';
.ulList{
    position: absolute;
    bottom: 0;
    width: 100vw;
    background-color: rgb(255, 255, 255);
    display: flex;
    border-top: 1px solid #bebebe;
    box-sizing: border-box;
    justify-content: space-around;
    font-size: 14px;
    align-items: center;
    li{
        &.active>div{
            color: red;
        }
        &>div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            // padding: 5px 0;
            &>span{
                &:nth-of-type(1){
                    i{
                        &::before{
                            // font-weight: bold;
                            // font-size: 20px;
                        }
                    }
                }
                &:nth-of-type(2){
                    margin-top: 5px;
                }
            }
        }
    }
}
</style>