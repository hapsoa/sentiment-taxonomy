import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';


@Component({
})
export default class Home extends Vue {
  private value1: number[] = [0, 100];
  private timeSvgWidth: number = 203 - 15 - 15; // div보고 확인한 것
  private testFlag: boolean = false;

  private addSample() {
    this.$sampleCreator.open();
  }
}
