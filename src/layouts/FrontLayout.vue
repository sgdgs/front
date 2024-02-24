<template lang="pug">
//- 手機版側欄
VNavigationDrawer(v-model="drawer" temporary location="left" v-if="isMobile")
  VList(nav)
    template(v-for="item in navItems" :key="item.to")
      VListItem(:to="item.to" v-if="item.show")
        template(#prepend)
          VIcon(:icon="item.icon")
        template(#append)
          VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" inline)
        VListItemTitle {{ item.text }}
    VListItem(v-if="user.isLogin" @click="logout")
      template(#prepend)
        VIcon(icon="mdi-logout")
      VListItemTitle 登出
//- 導覽列
VAppBar
  VContainer.d-flex.align-center
    VBtn(to="/" :active="false")
      VAppBarTitle(style="font-size: 2rem;") 剪單
    VSpacer
    //- 手機板導覽列
    template(v-if="isMobile")
      VAppBarNavIcon(@click="drawer = true")
<<<<<<< Updated upstream
=======
    //- 電腦版導覽列
>>>>>>> Stashed changes
    template(v-else)
    template(v-for="item in navItems" :key="item.to")
      VBtn(:to="item.to" :prepend-icon="item.icon" v-if="item.show")  {{ item.text }}
        VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" floating)
    VBtn(prepend-icon="mdi-logout" v-if="user.isLogin" @click="logout") 登出
    //- template(v-else)
    //-   template(v-for="item in navItems", :key="item.to")
    //-     v-menu(open-on-hover)
    //-       template(v-slot:activator="{ props }")
    //-         VBtn(v-bind="props", text,:key="item.to", :to="item.to" v-if="item.show")
    //-           v-icon(v-if="item.icon") {{ item.icon }}
    //-           | {{ item.text }}
    //-           VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" floating)
    //-       v-list(v-if="item.subItems && item.subItems.length > 0")
    //-         v-list-item(v-for="subItem in item.subItems", :key="subItem.to", :to="subItem.to")
    //-           v-list-item-title
    //-             VIcon(:icon="subItem.icon" :size="16" class="mx-2")
    //-             | {{ subItem.text }}
    //- VBtn(prepend-icon="mdi-logout" v-if="user.isLogin" @click="logout") 登出

//- 頁面內容
VMain
  RouterView(:key="$route.path")

v-footer
  v-row(justify="center", no-gutters)
    v-btn(v-for="link in links", :key="link", color="white", variant="text", class="mx-2", rounded="xl") {{ link }}
    v-col.text-center.mt-4(cols="12") {{ new Date().getFullYear() }} — <strong>剪單</strong>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()

// 手機版判斷
const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

// 手機版惻欄開關
const drawer = ref(false)

// 導覽列項目
const navItems = computed(() => {
  return [
<<<<<<< Updated upstream
    { to: '/serve', text: '服務', icon: 'mdi-head-heart', show: user.isLogin || !user.isLogin },
=======
    // { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !user.isLogin },
    // { to: '/login', text: '登入', icon: 'mdi-login', show: !user.isLogin },
    // {
    //   icon: 'mdi-calendar',
    //   text: '預約',
    //   show: user.isLogin,
    //   subItems: [
    //     { to: '/reserve', text: '立即預約', icon: 'mdi-calendar-plus' },
    //     { to: '/check', text: '預約紀錄', icon: 'mdi-calendar-text' }
    //   ]
    // },
    // {
    //   icon: 'mdi-cart',
    //   text: '商品',
    //   show: user.isLogin,
    //   subItems: [
    //     { to: '/buy', text: '商品列表', icon: 'mdi-cart' },
    //     { to: '/cart', text: '購物車', icon: 'mdi-cart' },
    //     { to: '/orders', text: '訂單', icon: 'mdi-list-box' }
    //   ]
    // },
    // { to: '/admin', text: '管理', icon: 'mdi-cog', show: user.isLogin && user.isAdmin },
    // { to: '/manage', text: '會員資料', icon: 'mdi-account', show: user.isLogin }
>>>>>>> Stashed changes
    { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !user.isLogin },
    { to: '/login', text: '登入', icon: 'mdi-login', show: !user.isLogin },
    { to: '/reserve', text: '預約', icon: 'mdi-calendar-plus', show: user.isLogin },
    { to: '/check', text: '預約紀錄', icon: 'mdi-calendar-text', show: user.isLogin },
    { to: '/buy', text: '商品列表', icon: 'mdi-cart', show: user.isLogin },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: user.isLogin },
    { to: '/orders', text: '訂單', icon: 'mdi-list-box', show: user.isLogin },
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: user.isLogin && user.isAdmin },
    { to: '/manage', text: '會員資料', icon: 'mdi-account', show: user.isLogin }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}

const links = computed(() => {
  return [
    'Home',
    'About Us',
    'Team',
    'Services',
    'Blog',
    'Contact Us'
  ]
})

</script>

<style scoped>
.v-app-bar {
  background-color: #bb9f91;
  color: #ffffff;
}

.v-main {
  background: #f6f1e7;
}

.v-footer {
  background-color: #BB9A88;
  color: #ffffff;
  text-align: center;
  bottom: 0;
  width: 100%;
}
</style>
