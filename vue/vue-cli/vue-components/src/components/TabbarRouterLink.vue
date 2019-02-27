<template>
  <div class="Tabbar">
    <ul class="ulList"
        :style="{ height: boxHeight }"> 
        <router-link    v-for="(item,index) in tabbarArr"
                        :key="index + '-li'"
                        :to="item.path"
                        tag="li">
            <!-- <div :class='{ active: item.select }'> -->
            <div>
                <span>
                    <i class="iconfont" :class="item.icon"></i>
                </span>
                <span>
                    {{ item.name }}
                </span>
            </div>                 
        </router-link>
    </ul>
    <div :style="{ height: boxHeight, width: '100vw' }"></div>
  </div>
</template>

<script>
    export default {
        name: 'Tabbar',
        props: {
            tabbarArr:{
                type: Array,
                required: true,
            },
            boxHeight: {    //整体高度
                type: String,
                default: '50px'
            },
            activeColor: { //选中时的颜色
                type: String,
                default: 'blue'
            }
        },
        data () {
            return {
                selected: null,
            }
        },
        computed:{

        },
        methods:{

        },
        created() {

        },
        watch:{
            
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
                            font-size: 20px;
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