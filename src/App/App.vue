<template>
  <v-app>
    <v-toolbar app flat :height="81">
      <v-toolbar-title>
        <div class="headline">SentimentVis Browser</div>
        <div
          class="subheading font-weight-light"
        >A Visual Survey of Sentiment Visualization Techniques (CGF survey article)</div>
        <div class="subheading font-weight-light">Provided by ISOVIS group</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="toolbar-button">About</span>
      </v-btn>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="toolbar-button">Summary</span>
      </v-btn>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="toolbar-button">Add entry</span>
      </v-btn>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="toolbar-button">Other surveys</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer class="pa-3">
      <v-layout column>
        <div
          class="footer-text"
        >ISOVIS group 2016–2019. All rights for the technique images belong to their respective owners.</div>
        <div class="footer-text">Version 1.3.0. Last updated: May 17, 2019</div>
        <div
          class="footer-text"
        >This website is using Google Analytics (for statistical purposes only) and cookies (for dismissible dialogs only).</div>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang='ts' src='./App.ts'>
</script>

<style lang='scss'>
@import './App.scss';
</style>
