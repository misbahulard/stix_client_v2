import {
  store
} from './store/store';
import * as types from './store/types';

export const guard = function (to, from, next) {
  if (!to.path.match('^/login')) {
    store.dispatch(types.TRY_AUTO_LOGIN);
    if (store.getters[types.IS_AUTHENTICATED]) {
      next();
    } else {
      next('/login');
    }
  } else {
    next('/login');
  }
}