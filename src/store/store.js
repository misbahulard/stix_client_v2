import Vue from 'vue'
import Vuex from 'vuex'
import view from '@/store/modules/view'
import user from '@/store/modules/user'
import observedData from '@/store/modules/observedData'
import indicator from '@/store/modules/indicator'
import identity from '@/store/modules/identity'
import threatActor from '@/store/modules/threatActor'
import attackPattern from '@/store/modules/attackPattern'
import bundle from '@/store/modules/bundle'
import bundleDdos from '@/store/modules/bundleDdos'
import analytics from '@/store/modules/analytics'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
      view,
      user,
      observedData,
      indicator,
      identity,
      threatActor,
      attackPattern,
      bundle,
      analytics,
      bundleDdos
    }
})