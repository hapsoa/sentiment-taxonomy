import Vue from 'vue';
import SampleCreator from './SampleCreator';

declare module 'vue/types/vue' {
  interface Vue {
    $sampleCreator: SampleCreator;
  }
}

export default {
  install(vue: typeof Vue, opts: any) {
    if (Vue.prototype.$menuModifier !== undefined) {
      Vue.prototype.$sampleCreator.$destroy();
    }
    const instance = new SampleCreator();
    Vue.prototype.$sampleCreator = instance;
    instance.$mount(document.body.appendChild(document.createElement('div')));
  }
};
