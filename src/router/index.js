import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import store from '../store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginVue')
  },
  {
    path: '/hotword/:word',
    name: 'hotword',
    component: () => import('@/views/Hotword')
  },
  {
    path: '/searchlist',
    name: 'searchlist',
    component: () => import('@/views/SearchList'),
    props: route => ({
      query: route.query.q
    })
  },
  {
    path: '/dayword',
    name: 'dayword',
    component: () => import('@/views/DayWord')
  },

  {
    path: '/timeline',
    name: 'timeline',
    component: () => import('@/views/TimeLine')
  },
  {
    path: '/:path(.*)*',
    name: 'notFound',
    component: () => import('@/views/404.vue'),

  }, {
    path: '/wordlist',
    name: 'wordlist',
    component: () => import('@/views/WordList.vue'),
  }
]

// 登录鉴权
//白名单
const whiteList = ['login']

const router = createRouter({
  history: createWebHashHistory(), //路由模式
  routes //路由规则
})
// 前置守卫
router.beforeEach((to, from, next) => {
  nprogress.start() //开始加载进度条
  console.log(store.state.user.token)
  // 用户已登录
  if (true) {
    //store.user.token

    // 不允许进入首页
    if (to.path === '/login') {
      next() //   '/'
    } else {
      // 判断用户信息是否存在,不存在，则获取用户信息
      next()
    }
  }
  // 未登录
  else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  nprogress.done(); //结束加载进度条
})

export default router