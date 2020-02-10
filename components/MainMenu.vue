<template>
  <nav class="main-menu">
    <nuxt-link class="main-menu__item" to="/polls/add" >Опросы</nuxt-link>
    <nuxt-link class="main-menu__item" :to="{ path: '/', query: { list: 'users' }}" >Пользователи</nuxt-link>
    <nuxt-link class="main-menu__item" :to="{ path: '/', query: { list: 'blacklists' }}">Черные списки</nuxt-link>
    <nuxt-link class="main-menu__item" to="/call" >Колл центр</nuxt-link>
  </nav>
</template>
