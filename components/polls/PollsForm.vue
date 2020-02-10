<template>
  <form class="form-page" novalidate @submit.prevent="submit">
    <polls-menu @on-change="changeTab" :tab="tab"/>
    <template v-if="tab == 'respondents'">
      <polls-respondents />
    </template>
    <template v-else>
      {{ tab }}
    </template>
  </form>
</template>

<script>


import PollsMenu from '~/components/polls/PollsMenu.vue'
import PollsRespondents from '~/components/polls/PollsRespondents.vue'
export default {
  components: {
    PollsMenu,
    PollsRespondents,
  },
  data() {
    return {
      tab: 'respondents', // 'parameters'
    }
  },
  methods: {
    changeTab(tab) {
      this.tab = tab
    },
    submit() {

    },
  }
}
</script>
