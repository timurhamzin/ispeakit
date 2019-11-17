import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Book from '@/components/Book'
import Read from '@/components/Read'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    }
  ]
})
