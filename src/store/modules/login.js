const login = {
  state: {
    obj: {},
  },

  mutations: {
    SET_OBJ: (state, obj) => {
      state.obj = obj
    },
  },

  actions: {
    setObj( { commit, state}, obj) {
      commit('SET_OBJ', obj)
    },
  },
};

export default login
