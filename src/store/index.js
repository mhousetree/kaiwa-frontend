import { createStore } from "vuex";

export default createStore({
  state: {
    from_language: null,
    to_language: null,
    is_muted: null,
    is_dark_mode: null,
  },
  mutations: {
    init(state) {
      state.from_language = "jp"
      state.to_language = "es"
      state.is_muted = false
      state.is_dark_mode = false
    },
    changeLanguage(state, payload) {
      if (payload.target==="from") {
        state.from_language = payload.lang
      } else {
        state.to_language = payload.lang
      }
    },
    swapLanguages(state) {
      const tmp = state.from_language
      state.from_language = state.to_language
      state.to_language = tmp
    },
    toggleMute(state) {
      state.is_muted = !state.is_muted
    },
    toggleColorMode(state) {
      state.is_dark_mode = !state.is_dark_mode
    }
  },
  actions: {
    init(context) {
      context.commit('init')
    }
  },
  getters: {
    getIsMuted: state => state.is_muted,
    getToLanguage: state => state.to_language,
    getIsDarkMode: state => state.is_dark_mode,
  },
  modules: {},
});
