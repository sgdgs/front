<template>
  <VContainer>
    <h1 style="text-align: center;">預約日期</h1>
    <VRow>
      <VCol cols="12" sm="6">
        <DatePicker style="width: 80%; margin-left: 10%;" v-model="date.value.value" mode="dateTime" :rules="rules"
          :min-date="minDate" :disabled-dates="disabledDates" />
        <VCol cols="12" style="width: 80%; margin-left: 10%;">
          <VForm :disabled="isSubmitting" @submit.prevent="submit">
            <VTextField :model-value="formattedDate" label="預約日期" readonly :error-messages="date.errorMessage.value">
            </VTextField>
            <VTextField v-model="name.value.value" label="姓名" :error-messages="name.errorMessage.value"></VTextField>
            <VTextField v-model="phone.value.value" label="電話" :error-messages="phone.errorMessage.value"></VTextField>
            <VSelect v-model="serviceItem" label="服務項目" :items="items" variant="outlined">
            </VSelect>
            <VBtn style="width: 30%; font-size: 1.5rem; margin-left: 50%; transform: translate(-50%);"
              color="brown-lighten-1" @click="submit" type="submit" :loading="isSubmitting">預約
            </VBtn>
          </VForm>
        </VCol>
      </VCol>
      <VCol cols="12" sm="6">
        <v-card style="margin-top: 20%;">
          <v-card-text style="margin: 10px;">
            <h2>預約注意事項</h2>
            <p>●每週一固定公休</p>
            <p>●為服務流程方便操作避免穿著高領衣物</p>
            <p>●建議大家可以選擇平日下午前來剪單髮廊，可以避開人潮較多時段</p>
            <p>●剪髮：流程約 1 hr</p>
            <p>●染髮：流程約 1-2 hr</p>
            <p>●燙髮：流程約 2-3 hr</p>
            <p>●特殊 燙/染 ：流程約 2-3 hr</p>
            <p>●護髮：流程約 1 hr</p>
          </v-card-text>
        </v-card>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { useApi } from '@/composables/axios'

const { apiAuth } = useApi()

const router = useRouter()
const createSnackbar = useSnackbar()

const schema = yup.object({
  name: yup
    .string()
    .required('姓名為必填欄位'),
  phone: yup
    .string()
    .required('電話為必填欄位')
    .test(
      'isPhone', '電話格式錯誤',
      (value) => {
        return validator.isMobilePhone(value, 'zh-TW')
      }
    )
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema, initialValues: { name: '', phone: '', date: new Date(), service: '', user: '' }
})

const name = useField('name')
const phone = useField('phone')
const date = useField('date')
const items = ref(['洗髮', '剪髮', '燙髮', '染髮', '護髮'])
const serviceItem = ref(null)

const submit = handleSubmit(async (values) => {
  try {
    await apiAuth.post('/reserve/', {
      date: values.date,
      name: values.name,
      phone: values.phone,
      service: serviceItem.value,
      user: values.user
    })
    createSnackbar({
      text: '預約成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/check')
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: '預約失敗',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})

const rules = {
  hours: { min: 10, max: 17 },
  minutes: { interval: 60 }
}
const disabledDates = ref([
  {
    repeat: {
      weekdays: [2]
    }
  }
])

const minDate = ref(new Date())
setInterval(() => {
  minDate.value = new Date()
}, 60000)

const formattedDate = computed(() => {
  return `${date.value.value.toLocaleDateString()}/ ${date.value.value.getHours()}:${date.value.value.getMinutes().toString().padStart(2, '0')}`
})

</script>

<style scoped>
p {
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 10px;
}

.v-card {
  background: #ffffff63;
}
</style>
