import axios from 'axios'
import config from '~/config'
import Vue from 'vue'



export const state = () => ({
  loading: false,
  spheres: [],
  metrics: [],
  parameters: [],
  tests: [],
  delTests: [],
  test_questions: [],
  test_metrics: [],
  bootstrap: {
    metrics: false,
    tests: false,
    testsFresh: true,
  },
})

export const getters = {

}

export const mutations = {

}


export const actions = {

}

