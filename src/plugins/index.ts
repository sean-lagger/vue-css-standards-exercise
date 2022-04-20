import type { App } from 'vue';
import { initIconify } from './iconify';

export const loadPlugins = (app: App): void => {
  initIconify(app);
};
