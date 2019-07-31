<template>
    <div id="app">
      <router-view></router-view>
      <footer-guide v-show="$route.meta.showFooter"></footer-guide>  <!--$route 代表当前路由-->
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide'
	export default {
	    name: "App",
        components: {
	    	FooterGuide
        }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 #app
    width: 100%;
    height: 100%;
    background: #f5f5f5

</style>