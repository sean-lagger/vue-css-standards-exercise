import type { App } from 'vue';
import { initIconify } from './iconify';

export const initPlugins = (app: App): void => {
  initIconify(app);
};
