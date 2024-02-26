<template>
  <VContainer>
    <VCol cols="12">
      <h1 style="text-align: center;">預約紀錄</h1>
    </VCol>
    <VCol cols="12">
      <VDataTable :items="check.result" :headers="headers">
        <template #[`item.date`]="{ item }">
          {{ new Date(item.date).toLocaleDateString() }} {{ new Date(item.date).getHours().toString().padStart(2, '0')
          }}:{{ new Date(item.date).getMinutes().toString().padStart(2, '0') }}
        </template>
        <template #[`item.action`]="{ item }">
          <VBtn variant="text" icon color="red" @click="deleteCheck(item._id)">
            <VIcon>mdi-delete</VIcon>
          </VBtn>
        </template>
        <template #[`item.service`]="{ item }">
          {{ item.service }}
        </template>
      </VDataTable>
    </VCol>
  </VContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const check = ref([])
const headers = [
  { title: '預約日期', value: 'date' },
  { title: '手機', value: 'phone' },
  { title: '姓名', value: 'name' },
  { title: '服務項目', value: 'service' },
  { title: '取消預約', value: 'action' }
]

const deleteCheck = async (id) => {
  try {
    await apiAuth.delete(`/reserve/${id}`)
    check.value.result = check.value.result.filter((item) => item._id !== id)
    createSnackbar({
      text: '刪除成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: '刪除失敗',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/reserve/me')
    check.value.result = data.result
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: '取得預約紀錄失敗',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})
</script>

<style scoped>
h1 {
  font-family: 'MyCustomFont';
  filter: drop-shadow(2px 2px 10px #422900e7);
}
</style>
