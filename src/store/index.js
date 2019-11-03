import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const defaultNote = {
  id: +new Date(),
  title: 'Journey to...',
  content: 'I would like to go to...',
  favorite: false
}

const state = {
  notes: [defaultNote],
  activeNote: defaultNote,
  show: 'all'
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
