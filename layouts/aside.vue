<template>
  <default-layout class="layout-aside">
    <div class="layout-aside__aside">
      <nuxt-link to="/" class="main-logo">Main</nuxt-link>
      <main-menu class="sticky-menu" />
    </div>

    <div class="layout-aside__content">
      <nuxt />
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '~/layouts/default.vue'
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    DefaultLayout,
    MainMenu
  }
}
</script>
