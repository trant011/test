import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hellotest from '@/components/Hellotest'
import writings from '@/components/writings'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
   {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hellotest/',
      name: 'Hellotest',
      component: Hellotest
    },
      {
      path: '/writings/',
      name: 'writings',
      component: writings
    },
    
    
  ]
})
