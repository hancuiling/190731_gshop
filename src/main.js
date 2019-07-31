/*入口文件*/

import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
	el:'#app',
	render: h => h(App),
	router //多了几个标签  router-view  router-link keep-alive  多了2个属性 $route $router
})


