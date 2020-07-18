import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, id) {
      let tasks = state.tasks.concat()
      const indx = tasks.findIndex(task => task.id === id)
      tasks.splice(indx, 1);
      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    deleteTask({commit} , id) {
      commit('deleteTask', id)
    }
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    }
  }
})