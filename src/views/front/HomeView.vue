<template>
  <VCol cols="12">
    <swiper :effect="'fade'" :autoplay="{ delay: 10000, disableOnInteraction: false, }" :navigation="true"
      :modules="modules" class="mySwiper1" loop="true">
      <swiper-slide>
        <img src="../../image/1.webp" />
        <div class="txt">剪單，但不簡單</div>
      </swiper-slide>
      <swiper-slide>
        <img src="../../image/2.jpg" />
        <div class="txt">讓我們來實現您的想法</div>
      </swiper-slide>
      <swiper-slide>
        <img src="../../image/3.jpg" />
        <div class="txt">給自己一個改變的契機</div>
      </swiper-slide>
    </swiper>
  </VCol>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 style="text-align: center; margin: 10px;">---最新作品---</h1>
        <swiper :effect="'coverflow'" :autoplay="{ delay: 5000, disableOnInteraction: false, }" :centeredSlides="true"
          :slidesPerView="3" :coverflowEffect="{
            rotate: 60,
            stretch: 0,
            depth: 10,
            slideShadows: false,
          }" :pagination="true" :modules="modules" class="mySwiper2" loop="true">
          <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image.image">
          </swiper-slide>
        </swiper>
      </VCol>
      <VCol cols="12">
        <h1 style="text-align: center; margin: 10px;">---最新消息---</h1>
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
            <v-btn color="orange-lighten-2" variant="text">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey,
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
            <v-btn color="orange-lighten-2" variant="text">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey,
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
            <v-btn color="orange-lighten-2" variant="text">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey,
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
.mySwiper1 {
  width: 100%;
  height: 750px;
  margin-bottom: 65px;
}

.mySwiper1 .swiper-slide img {
  width: 100%;
  height: 100%;
  filter: blur(2px);
  object-fit: cover;
}

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
  width: 500px;
  height: 500px;

}

.txt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 75px;
  font-weight: 400;
  color: rgb(255, 255, 255);
}

.v-col {
  margin: 0;
  padding: 0;
}
</style>
