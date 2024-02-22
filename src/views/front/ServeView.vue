<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">服務</h1>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" class="text-center">
            <h2>我們的服務</h2>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" md="6">
                <v-card>
                  <v-img src="../../../src/image/FHmihw3.jpg" aspect-ratio="5"></v-img>
                  <div class="s">
                    <v-card-title>洗髮SHAMPOO</v-card-title>
                    <v-card-text>價格:250元</v-card-text>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  background: none;
  box-shadow: none;
  display: flex;
}

.s {
  display: flex;
  flex-direction: column;
}

.v-img {
  height: 350px;
}

.v-card-title {
  font-size: 35px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
