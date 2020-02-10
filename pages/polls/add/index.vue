<template>
  <div>
    <polls-form />
  </div>
</template>

<script>

import PollsForm from '~/components/polls/PollsForm.vue'

export default {
  layout: "aside",
  components: {
    PollsForm,
  },
}
</script>

