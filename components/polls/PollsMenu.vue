<template>
  <ul class="tabs">
    <li class="tabs__item" :class="{'--curr' : curr == item.key}" v-for="item in items" @click="change(item.key)">{{ item.text }}</li>
  </ul>
</template>

<script>

const items = [
  {text: 'Параметры', key: 'parameters'},
  {text: 'Вопросы', key: 'questions'},
  {text: 'Логика', key: 'logics'},
  {text: 'Условия', key: 'conditions'},
  {text: 'Респонденты', key: 'respondents'},
]

export default {
  props: {
    tab: {
      default: null,
      type: String
    },
  },
  data() {
    return {
      items: items,
      curr: 'parameters',
    }
  },
  created() {
    if(this.tab) {
      this.curr = this.tab
    }
  },
  methods: {
    change(key) {
      this.curr = key
      this.$emit('on-change', key)
    },
  }
}
</script>
