import _ from 'lodash';
import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';


declare module 'vue/types/vue' {
  interface SampleCreator {
    // open: (menu: FirestoreDocument<Menu>) => void;
    open: () => void;
  }
}

interface SampleImage {
  file: File; imageUrl: string;
}

@Component({})
export default class SampleCreator extends Vue {
  public $refs!: {
    imageInput: HTMLInputElement;
  };

  private dialog: boolean = false;
  private sampleImages: SampleImage[] = [];

  public open() {
    this.dialog = true;
  }

  private pickFile() {
    this.$refs.imageInput.click();
  }

  private onFilePicked(e: any) {
    const files: File[] = e.target.files;

    // 여러개의 이미지를 넣을 수 있도록 한다.
    console.log('files', files);
    _.forEach(files, file => {

      if (files[0] !== undefined) {
        const imageName = file.name;
        if (imageName.lastIndexOf('.') <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener('load', () => {
          const imageUrl = fr.result as string;
          const imageFile = file;
          this.sampleImages.push({
            file,
            imageUrl
          });
        });
      }
    });




  }
}
