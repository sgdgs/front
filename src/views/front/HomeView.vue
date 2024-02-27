<template>
  <VCol cols="12">
    <div class="title">
      <div class="txt">剪 單</div>
      <div class="bk">
        <img src="../../image/bg.jpg">
      </div>
    </div>
  </VCol>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 style="text-align: center; margin: 10px;">
          熱門造型</h1>
        <swiper :effect="'coverflow'" :autoplay="{ delay: 5000, disableOnInteraction: false, }" :centeredSlides="true"
          :slidesPerView="3" :coverflowEffect="{
            rotate: 60,
            stretch: 0,
            depth: 10,
            slideShadows: false,
          }" :pagination="true" :modules="modules" class="mySwiper2" :loop="true">
          <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image.image">
          </swiper-slide>
        </swiper>
      </VCol>
      <VCol cols="12">
        <h1 style="text-align: center; margin: 10px;">最新消息</h1>
      </VCol>
      <VCol cols="12" sm="4">
        <v-card class="mx-auto" max-width="344">
          <VImg src="https://picsum.photos/300/200/?random=2" height="200px" cover></VImg>
          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="brown-lighten-2" variant="text">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                Hey,
                you
                add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </VCol>
      <VCol cols="12" sm="4">
        <v-card class="mx-auto" max-width="344">
          <VImg src="https://picsum.photos/300/200/?random=3" height="200px" cover></VImg>
          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="brown-lighten-2" variant="text">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                Hey,
                you
                add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </VCol>
      <VCol cols="12" sm="4">
        <v-card class="mx-auto" max-width="344">
          <VImg src="https://picsum.photos/300/200/?random=1" height="200px" cover></VImg>
          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="brown-lighten-2" variant="text">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                Hey,
                you
                add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'

const modules = [Pagination, EffectCoverflow, Autoplay]
const show = ref(false)

const { api } = useApi()
const createSnackbar = useSnackbar()

const images = ref([])

onMounted(async () => {
  try {
    const { data } = await api.get('/pictures/all')
    images.value = data.result.data
  } catch (error) {
    createSnackbar('error', '取得圖片失敗')
  }
})
</script>

<style scoped>
.mySwiper2 {
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.mySwiper2 .swiper-slide {
  background-position: center;
  background-size: contain;
}

.mySwiper2 .swiper-slide img {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: 'MyCustomFont';
  src: url('../../../font/GenWanMin-EL.ttc');
}

.txt {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  display: flex;
  writing-mode: vertical-rl;
  justify-content: center;
  align-items: center;
  font-family: 'MyCustomFont';
  filter: drop-shadow(2px 2px 10px #422900e7);
}

.v-col {
  margin-bottom: 50px;
  padding: 0;
}

.bg {
  position: relative;
  width: 100%;
  height: 750px;
  background-color: #ffffff;
  opacity: 0.75;
  z-index: 0;
}

.title img {
  width: 100%;
  height: 950px;
  object-fit: cover;
}

.mx-auto {
  margin-bottom: 50px;
}

h1 {
  font-family: 'MyCustomFont';
  filter: drop-shadow(2px 2px 10px #422900e7);
}
</style>
