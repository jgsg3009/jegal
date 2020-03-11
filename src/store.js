import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v4' // id 자동 채번

Vue.use(Vuex)

// D Day 계산 함수
const _getDDay = currentDate => {
  return (
    Math.floor(
      (currentDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    ) + 1
  )
}

//* localStorage == 쿠키가 아닌 다른 방법으로 새로운 API 저장공간
const todoList = new Vuex.Store({
  state: {
    // 데이터 저장소
    currentActivity: {
      // default Data Set
      id: '',
      taskName: '',
      completed: false,
      date: '',
      errorMessage: '',
      selectValue: '하',
      detailTask: '',
      department: '',
      user: '',
      remark: '',
      sliderVal: 0
    },

    activities: [] // 저장(VUEX)데이터 Array
  },
  mutations: {
    // 데이터 추가
    ADD_ACTIVITY (state) {
      state.currentActivity.id = uuid() // id 체번
      state.currentActivity.dDay = _getDDay(state.currentActivity.date) // D Day Set
      state.activities.push(state.currentActivity) //  추가 데이터 activities Push
      state.currentActivity = {
        completed: false,
        selectValue: '하',
        sliderVal: 0
      } // 데이터 초기화 (기본데이터는 설정해주고 그렇지 않을경우 입력값이 입력이 된다.)
      localStorage.setItem('activities', JSON.stringify(state.activities)) // localStorage 에 데이터 저장
    },

    // 데이터 삭제
    DELETE_ACTIVITY (state, activity) {
      state.activities = state.activities.filter(ac => ac.id !== activity.id) // 삭제되는 id 가 아닌 데이터 filter
      localStorage.setItem('activities', JSON.stringify(state.activities)) // localStorage 에 데이터 저장
    },

    // 데이터 수정 (D Day, 완료 여부))
    UPDATE_ACTIVITY (state, activity) {
      state.activities.forEach(ac => {
        if (ac.id === activity.id) {
          const dDay = _getDDay(ac.date)
          ac.completed = !ac.completed
          ac.dDay = ac.completed ? '' : dDay
        }
      })

      localStorage.setItem('activities', JSON.stringify(state.activities))
    },

    INPUT_SLIDER (state, { id, val }) {
      state.activities.forEach(ac => {
        if (ac.id === id) {
          ac.sliderVal = val
        }
      })
      localStorage.setItem('activities', JSON.stringify(state.activities))
    }
  },

  actions: {
    // vue 단에서 호출 사용
    addActivity ({ commit }) {
      commit('ADD_ACTIVITY')
    },

    deleteActivity ({ commit }, { activity }) {
      commit('DELETE_ACTIVITY', activity)
    },

    updateActivity ({ commit }, { activity }) {
      commit('UPDATE_ACTIVITY', activity)
    },

    inputSlider ({ commit }, { id, val }) {
      commit('INPUT_SLIDER', { id, val })
    }
  },

  getters: {
    // 전달자의 값을 가지고 와 판단 하여 return
    activities (state) {
      return state.activities
    },

    currentActivity (state) {
      return state.currentActivity
    }
  }
})

export default todoList
