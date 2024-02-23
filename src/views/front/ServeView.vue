<template>
  <v-container>
    <h1>我們的服務</h1>
    <v-row>
      <v-col :cols="12" md="6">
        <v-card>
          <div class="p">
            <v-img src="../../image/FHmihw3.jpg"></v-img>
          </div>
          <div>
            <v-card-title>洗髮</v-card-title>
            <v-card-subtitle>SHAMPOO</v-card-subtitle>
            <v-card-text>
              <p>價格:250元</p>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col :cols="12" md="6">
        <v-card>
          <div class="p">
            <v-img src="../../image/VMb07rK.jpg"></v-img>
          </div>
          <div>
            <v-card-title>剪髮</v-card-title>
            <v-card-subtitle>CUT HAIR</v-card-subtitle>
            <v-card-text>
              <p>價格:250元</p>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col :cols="12" md="6">
        <v-card>
          <div class="p">
            <v-img src="../../image/qnj5yPS.jpg"></v-img>
          </div>
          <div>
            <v-card-title>燙髮</v-card-title>
            <v-card-subtitle>PERMENANT</v-card-subtitle>
            <v-card-text>
              <p>價格:850元</p>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col :cols="12" md="6">
        <v-card>
          <div class="p">
            <v-img src="../../image/gjR4KA0.jpg"></v-img>
          </div>
          <div>
            <v-card-title>護髮</v-card-title>
            <v-card-subtitle>HAIR TREATMENT</v-card-subtitle>
            <v-card-text>
              <p>價格:500元</p>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 10px;
}

.v-card {
  background: none;
  box-shadow: none;
  display: flex;
}

.s {
  display: flex;
  flex-direction: column;
}

.v-card-title {
  font-size: 30px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
}

.v-row {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.v-card-subtitle {
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 10px;
}

.v-card-text {
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 10px;
}

.p {
  width: 300px;
  height: 300px;
}

.p .v-img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
