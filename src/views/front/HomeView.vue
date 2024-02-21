<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 style="text-align: center; margin: 10px;">---作品分享---</h1>
        <swiper :effect="'coverflow'" :autoplay="{ delay: 5000, disableOnInteraction: false, }" :centeredSlides="true"
          :slidesPerView="3" :coverflowEffect="{
            rotate: 60,
            stretch: 0,
            depth: 10,
            slideShadows: false,
          }" :pagination="true" :modules="modules" class="mySwiper" loop>
          <swiper-slide><img src="https://picsum.photos/1200/1200/?random=1"></swiper-slide>
          <swiper-slide><img src="https://picsum.photos/1200/1200/?random=2"></swiper-slide>
          <swiper-slide><img src="https://picsum.photos/1200/1200/?random=3"></swiper-slide>
          <swiper-slide><img src="https://picsum.photos/1200/1200/?random=4"></swiper-slide>
          <swiper-slide><img src="https://picsum.photos/1200/1200/?random=5"></swiper-slide>
          <swiper-slide><img src="https://picsum.photos/1200/1200/?random=6"></swiper-slide>
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
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'

const modules = [Pagination, EffectCoverflow, Autoplay]
const show = ref(false)
</script>

<style scoped>
.swiper {
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: contain;
}

.swiper-slide img {
  width: 100%;
}
</style>
