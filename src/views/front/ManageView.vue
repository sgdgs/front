<template>
  <h1 style="text-align: center;">會員資料</h1>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ user.account }}會員您好</v-card-title>
          <v-list-item>
            <v-img :src="prependAvatar"></v-img>
          </v-list-item>
          <v-card-text>
            <v-form>
              <v-text-field v-model="user.account" label="帳號" readonly></v-text-field>
              <v-text-field v-model="user.email" label="信箱" readonly></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>修改密碼(至少4個字元)</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="user.password" label="舊密碼" minlength="4" maxlength="20"></v-text-field>
              <v-text-field v-model="user.newPassword" label="新密碼" minlength="4" maxlength="20"></v-text-field>
              <v-text-field v-model="user.confirmPassword" label="確認新密碼"></v-text-field>
              <v-btn @click="updatePassword" :disabled="!space" color="primary">修改密碼</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { computed } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const user = useUserStore()
const router = useRouter()
const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})

const { apiAuth } = useApi()

const createSnackbar = useSnackbar()

const space = computed(() => {
  return user.password && user.newPassword && user.confirmPassword
})

const updatePassword = async () => {
  if (user.newPassword !== user.confirmPassword) {
    createSnackbar({
      text: '新密碼與確認密碼不一致',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
    return
  } else if (user.newPassword.length < 4) {
    createSnackbar({
      text: '新密碼長度不足',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
    return
  } else if (user.password === user.newPassword) {
    createSnackbar({
      text: '新密碼與舊密碼相同',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
    return
  }
  try {
    await apiAuth.patch('/users/password', {
      password: user.password,
      newPassword: user.newPassword
    })
    createSnackbar({
      text: '修改成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    user.logout()
    router.push('/login')
  } catch (error) {
    createSnackbar({
      text: '修改失敗',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}

</script>

<style scoped>
.v-container {
  margin-top: 20px;
  display: flex;
}

.v-row {
  margin-left: 20px;
  text-align: center;
}

.v-img {
  width: 120px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
