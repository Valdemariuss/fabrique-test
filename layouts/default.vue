<template>
  <div>
    <slot>
      <nuxt/>
    </slot>
  </div>
</template>

<script>
  export default {
    computed: {
      loading() {
        return this.$store.state.loading
      },
    }
  }
</script>
