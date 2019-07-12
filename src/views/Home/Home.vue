<template>
  <v-container fluid ma-0 pa-3>
    <v-layout>
      <div class="left-configure">
        <div class="configure-element">
          <div>Techniques displayed:</div>
          <div class="headline font-weight-bold">170</div>
        </div>
        <div class="configure-element">
          <div>Search:</div>
          <v-text-field hide-details clearable></v-text-field>
        </div>
        <div class="configure-element">
          <div>Time filter:</div>
          <v-range-slider v-model="value1"></v-range-slider>
          <svg :width="timeSvgWidth" :height="50" />
        </div>
        <div class="configure-element">
          <div>Analytic Tasks</div>
          <div>
            <v-btn :flat="testFlag" icon color="primary" class="icon-button">
              <v-icon @click="testFlag = !testFlag">favorite</v-icon>
            </v-btn>
            <v-btn flat icon color="primary" class="icon-button">
              <v-icon>home</v-icon>
            </v-btn>
            <v-btn flat icon color="primary" class="icon-button">
              <v-icon>home</v-icon>
            </v-btn>
            <v-btn flat icon color="primary" class="icon-button">
              <v-icon>home</v-icon>
            </v-btn>
          </div>
        </div>
        <div class="configure-element">
          <div>Visualization Tasks</div>
          <div>
            <v-btn :flat="testFlag" icon color="primary" class="icon-button">
              <v-icon @click="testFlag = !testFlag">favorite</v-icon>
            </v-btn>
            <v-btn flat icon color="primary" class="icon-button">
              <v-icon>home</v-icon>
            </v-btn>
            <v-btn flat icon color="primary" class="icon-button">
              <v-icon>home</v-icon>
            </v-btn>
            <v-btn flat icon color="primary" class="icon-button">
              <v-icon>home</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <v-flex xs12>
        <v-layout row wrap>
          <div class="image-container" v-for="i in 100" :key="`img-${i}`">
            <v-img src="http://sentimentvis.lnu.se/thumbs100/Karduni2019.png" :width="100"></v-img>
          </div>
        </v-layout>
      </v-flex>
      <v-btn @click="addSample" fixed dark fab bottom right color="primary">
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src='./Home.ts'>
</script>

<style lang='scss'>
@import './Home.scss';
</style>

