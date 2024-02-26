<template>
  <v-container>
    <h1>我們的服務</h1>
    <v-row>
      <v-col :cols="12" md="12">
        <v-card>
          <div class=" p">
            <v-img src="../../image/洗髮.jpg"></v-img>
          </div>
          <div>
            <v-card-title>洗髮</v-card-title>
            <v-card-subtitle>SHAMPOO</v-card-subtitle>
            <v-card-text>
              <p>■包含頸肩按摩、潤絲服務</p>
              <br>
              <p>價格:250元</p>
            </v-card-text>
          </div>
        </v-card>
        <v-card>
          <div class=" p">
            <v-img src="../../image/剪髮.jpg"></v-img>
          </div>
          <div>
            <v-card-title>剪髮</v-card-title>
            <v-card-subtitle>HAIR CUTTING</v-card-subtitle>
            <v-card-text>
              <p>■包含完整洗髮服務</p>
              <br>
              <p>價格:800元</p>
            </v-card-text>
          </div>
        </v-card>
        <v-card>
          <div class=" p">
            <v-img src="../../image/染髮.jpg"></v-img>
          </div>
          <div>
            <v-card-title>染髮</v-card-title>
            <v-card-subtitle>HAIR COLORING</v-card-subtitle>
            <v-card-text>
              <p>■包含完整洗髮、剪髮服務</p>
              <br>
              <p>價格:1500元</p>
            </v-card-text>
          </div>
        </v-card>
        <v-card>
          <div class=" p">
            <v-img src="../../image/燙髮.jpg"></v-img>
          </div>
          <div>
            <v-card-title>燙髮</v-card-title>
            <v-card-subtitle>HAIR PERM</v-card-subtitle>
            <v-card-text>
              <p>■包含完整洗髮、剪髮服務</p>
              <br>
              <p>價格:1500元</p>
            </v-card-text>
          </div>
        </v-card>
        <v-card>
          <div class=" p">
            <v-img src="../../image/護髮.jpg"></v-img>
          </div>
          <div>
            <v-card-title>護髮</v-card-title>
            <v-card-subtitle>HAIR TREATMENT</v-card-subtitle>
            <v-card-text>
              <p>■包含完整洗髮服務</p>
              <br>
              <p>價格:650元</p>
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
  width: 50%;
  background: none;
  box-shadow: none;
  display: flex;
  margin-left: 15%;
  font-family: 'MyCustomFont';
  filter: drop-shadow(2px 2px 10px #422900e7);
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
  width: 500px;
  height: 500px;
}

.p .v-img {
  width: 100%;
  object-fit: contain;
}

h1 {
  font-family: 'MyCustomFont';
  filter: drop-shadow(2px 2px 10px #422900e7);
}
</style>
