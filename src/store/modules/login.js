const login = {
  state: {
    phoneno: '',
  },

  mutations: {
    SET_PHONENO: (state, phoneno) => {
      state.phoneno = phoneno
    },
  },

  actions: {
    setPhoneno( { commit, state}, phoneno) {
      commit('SET_PHONENO', phoneno)
    },
  },
};

export default login
