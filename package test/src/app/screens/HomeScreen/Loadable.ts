import {lazyLoad} from 'utils/loadable';

export const HomeScreen = lazyLoad(
  () => import('./index'),
  module => module.HomeScreen,
);
