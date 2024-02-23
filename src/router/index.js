// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/front/HomeView.vue'),
        meta: {
          title: '剪單',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/front/RegisterView.vue'),
        meta: {
          title: '剪單 | 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/front/LoginView.vue'),
        meta: {
          title: '剪單 | 登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'Product',
        component: () => import('@/views/front/ProductView.vue'),
        meta: {
          title: '剪單 | 商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'reserve',
        name: 'Reserve',
        component: () => import('@/views/front/ReserveView.vue'),
        meta: {
          title: '剪單 | 預約',
          login: true,
          admin: false
        }
      },
      {
        path: 'check',
        name: 'Check',
        component: () => import('@/views/front/CheckView.vue'),
        meta: {
          title: '剪單 | 預約紀錄',
          login: true,
          admin: false
        }
      },
      {
        path: 'manage',
        name: 'Manage',
        component: () => import('@/views/front/ManageView.vue'),
        meta: {
          title: '剪單 | 會員資料',
          login: true,
          admin: false
        }
      },
      {
        path: 'buy',
        name: 'Buy',
        component: () => import('@/views/front/BuyView.vue'),
        meta: {
          title: '剪單 | 商品',
          login: true,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/front/CartView.vue'),
        meta: {
          title: '剪單 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/front/OrdersView.vue'),
        meta: {
          title: '剪單 | 訂單',
          login: true,
          admin: false
        }
      },
      {
        path: 'serve',
        name: 'Serve',
        component: () => import('@/views/front/ServeView.vue'),
        meta: {
          title: '剪單 | 服務',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('@/views/admin/HomeView.vue'),
        meta: {
          title: '剪單 | 管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('@/views/admin/ProductsView.vue'),
        meta: {
          title: '剪單 | 商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import('@/views/admin/OrdersView.vue'),
        meta: {
          title: '剪單 | 訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'check',
        name: 'AdminCheck',
        component: () => import('@/views/admin/CheckView.vue'),
        meta: {
          title: '剪單 | 預約管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'picture',
        name: 'AdminPicture',
        component: () => import('@/views/admin/PicturesView.vue'),
        meta: {
          title: '剪單 | 圖片管理',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/front/NotFoundView.vue'),
    meta: {
      title: '剪單 | 找不到',
      login: false,
      admin: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()

  if (from === START_LOCATION) {
    await user.getProfile()
  }

  if (user.isLogin && ['/register', '/login'].includes(to.path)) {
    // 如果有登入，要去註冊或登入頁，重新導向回首頁
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    // 如果要去的頁面要登入，但是沒登入，重新導向回登入頁
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    // 如果要去的頁面要管理員，但是不是管理員，重新導向回首頁
    next('/')
  } else {
    // 不重新導向
    next()
  }
})

export default router