<template>
  <h1 style="text-align: center;">預約日期</h1>
  <VContainer>
    <VRow>
      <VCol cols="12" sm="6">
        <DatePicker style="width: 80%; margin-left: 10%;" v-model="date.value.value" mode="dateTime" :rules="rules"
          :min-date="minDate" :disabled-dates="disabledDates" />
      </VCol>
      <VCol cols="12" sm="6">
        <VCol cols="12" style="margin-left: 50%; transform: translate(-50%);">
          <VForm :disabled="isSubmitting" @submit.prevent="submit">
            <VTextField :model-value="formattedDate" label="預約日期" readonly :error-messages="date.errorMessage.value">
            </VTextField>
            <VTextField v-model="name.value.value" label="姓名" :error-messages="name.errorMessage.value"></VTextField>
            <VTextField v-model="phone.value.value" label="電話" :error-messages="phone.errorMessage.value"></VTextField>
            <VSelect v-model="serviceItem" label="服務項目" :items="items" variant="outlined">
            </VSelect>
            <VBtn style="width: 30%; font-size: 1.5rem; margin-left: 50%; transform: translate(-50%);" color="primary"
              @click="submit" type="submit" :loading="isSubmitting">預約
            </VBtn>
          </VForm>
        </VCol>
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

const { api } = useApi()

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
  validationSchema: schema, initialValues: { name: '', phone: '', date: new Date(), service: '' }
})

const name = useField('name')
const phone = useField('phone')
const date = useField('date')
const items = ref(['洗髮', '剪髮', '燙髮', '染髮', '護髮', '燙染', '燙染護', '燙染護剪'])
const serviceItem = ref(null)

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/reservations', {
      name: values.name,
      phone: values.phone,
      date: values.date,
      service: serviceItem.value
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

<!-- 尚未修正當禮拜一時，是可以選取狀態 -->
