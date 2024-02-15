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
          <v-card-title>修改密碼</v-card-title>(至少4個字元)
          <v-card-text>
            <v-form :disabled="isSubmitting" @submit.prevent="submit">
              <v-text-field v-model="password.value.value" label="舊密碼" counter minlength="4" maxlength="20"
                :error-messages="password.errorMessages.value"></v-text-field>
              <v-text-field v-model="newPassword.value.value" label="新密碼" counter minlength="4" maxlength="20"
                :error-messages="newPassword.errorMessages.value"></v-text-field>
              <v-text-field v-model="confirmPassword.value.value" counter label="確認新密碼"></v-text-field>
              <v-btn type="submit" @click="updatePassword" color="primary">修改密碼</v-btn>
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
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const user = useUserStore()
const router = useRouter()
const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})

const { api } = useApi()

const createSnackbar = useSnackbar()

const schema = yup.object({
  password: yup
    .string()
    .required('舊密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符'),
  newPassword: yup
    .string()
    .required('新密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符'),
  confirmPassword: yup
    .string()
    .required('確認新密碼為必填欄位')
    .oneOf([yup.ref('newPassword')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const password = useField('password')
const newPassword = useField('newPassword')
const confirmPassword = useField('confirmPassword')

const updatePassword = handleSubmit(
  async () => {
    try {
      await api.put('/users/password', {
        password: password.value.value,
        newPassword: newPassword.value.value
      })
      createSnackbar({
        text: '密碼修改成功',
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000,
          color: 'green',
          location: 'bottom'
        }
      })
      user.logout()
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
)

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
