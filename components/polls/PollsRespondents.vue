<template>
  <section class="polls-respondents">
    <h2 class="polls-respondents__hd"> Добавить опрос</h2>
    <div class="polls-respondents__box">
      <div class="polls-respondents-item" v-for="(item, i) in items" :key="i + item.type">
        <div class="polls-respondents-item__main">
          <label>Условие {{ (i + 1) }}</label>
          <select v-model="item.type">
            <option v-for="(opt, idx) in types" :value="opt.type" :key="'opt-' + i + idx">{{ opt.title }}</option>
          </select>
        </div>
        <div class="polls-respondents-item__box">
          <template v-if="item.type === 'range'">
            <div v-for="(range, i) in item.ranges">
              <div>Диапазон {{ (i + 1) }}</div>
              <label>
                от <input type="number" value="range.from" v-model="range.from">
              </label>
              <label>
                до <input type="number" value="range.to" v-model="range.to">
              </label>
            </div>

            <button @click.stop="addRange(item)">Добавить Диапазон</button>
          </template>
        </div>
      </div>
    </div>
    <div class="polls-respondents__add" @click.stop="addItem">
      + Нажмите что бы добавить новое условие выборки.
      Все условия связываются между собой логическим "И"
    </div>
    <button @click.stop="submit">Отправить</button>
  </section>
</template>

<script>
const conditions = [
  {
    type: 'range',
    title: 'Возраст респондента',
    ranges: [],
  },
  {
    type: 'card-type',
    title: 'Тип карты лояльности',
    types: [{val: 'gold', text: 'Gold'}, {val:'silver', text: 'silver'}]
  },
  {
    type: 'card-status',
    title: 'Статус карты лояльности',
    statuses: [{val:'active', text: 'Активна'}, {val:'inactive', text: 'Не активна'}]
  }
]

export default {
  data() {
    return {
      items: [],
      conditions: conditions,
    }
  },
  computed: {
    types() {
      const types = [{type: 'new', title: 'не выбрано'}]
      this.conditions.forEach((item) => {
        types.push({type: item.type, title: item.title})
      })
      return types
    }
  },
  methods: {
    addItem() {
      this.items.push ({ type: 'new'})
    },
    addRange(item) {
      const items = item.ranges || []
      items.push({ from: '', to: ''})
      this.$set(item, 'ranges', items)
    },
    submit() {
      alert(JSON.stringify(this.items))
    },
  }
}
</script>
