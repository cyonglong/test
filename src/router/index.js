import Vue from 'vue'
import Router from 'vue-router'
// 懒加载
const HelloWorld = () => import('@/components/HelloWorld')
const home = () => import('../components/home')
const user = () => import('../components/user')
const child1 = () => import('../components/child1')
const child2 = () => import('../components/child2')
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '',
      // 默认路径
      redirect: "/home"
    }, {
      path: '/HelloWorld',
      meta:{
        title:'HelloWorld'
      },
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      meta:{
        title:'home'
      },
      component: home,
      children: [
      //   {
      //   path: '',
      //   redirect: 'child1'
      // }
      // , 
      {
        path: 'child1',
        component: child1,
      }, {
        path: 'child2/:id2',
        component: child2,
      },
      ]
    },
    {
      path: '/user/:useid',
      meta:{
        title:'user'
      },
      component: user
    },
  ],
  mode: "history",
  // 更改类名
  linkActiveClass: 'active',
  
})
router.beforeEach((to,from,next)=>{
  document.title= to.matched[0].meta.title
  //  console.log(to);
   next()})
  //  后置钩子
   router.afterEach((to,from)=>{
    //  console.log("----")
   })
export default router