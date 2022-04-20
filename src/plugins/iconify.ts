import type { App } from 'vue';
import { Icon } from '@iconify/vue';

export const initIconify = (app: App): void => {
  app.component('Icon', Icon);
};
