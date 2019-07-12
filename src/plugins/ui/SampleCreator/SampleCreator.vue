<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="paper code*" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="images-zone">
            <!-- <div class="images-zone"> -->
            <v-img
              v-for="(sampleImage, i) in sampleImages"
              :key="`sampleImage-${i}`"
              :src="sampleImage.imageUrl"
              :width="100"
              :max-width="100"
              :max-height="100"
              class="sample-image"
            ></v-img>
            <!-- </div> -->
          </v-layout>
          <v-layout justify-end>
            <v-btn flat @click="pickFile">load image</v-btn>
            <input
              type="file"
              multiple
              ref="imageInput"
              accept="image/*"
              @change="onFilePicked"
              style="display: none;"
            />
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src='./SampleCreator.ts' lang='ts' />

<style scoped lang='scss'>
@import './SampleCreator.scss';
</style>