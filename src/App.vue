<template>
  <div id="app">
    <transition :name="transitionName">
        <router-view class="router"></router-view>
    </transition>
  </div>
</template>

<script>
import "assets/js/wapauto.js";
export default {
  name: "app",
  data() {
    return {
      transitionName: 'left-fade'
    }
  },
  components: {},
  mounted() {

  },
  watch:{
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'left-fade';
      }else{
        this.transitionName = 'right-fade';
      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/iconfont.css";
@import "assets/css/style.css";
@import "assets/css/index.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  transition:  all cubic-bezier(.55,0,.1,1)   .5s ;
}
.left-fade-leave-to, .right-fade-enter{
  transform: translate3d(-100%, 0, 0);
}
.left-fade-enter, .right-fade-leave-to{
  transform: translate3d(100%, 0, 0);
}
</style>
