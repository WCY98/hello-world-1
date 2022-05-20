<template >
<div id="watch-example" class="demo"  >
  <ul id="array-rendering" class="demo">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>

<ul>
  <template v-for="item in items2" :key="item.msg">
    <li>{{ item.msg }}</li>
  </template>
</ul>
  <div :class="{ active: isActive }">{{isActive}}</div>
  <div :class="{ activeOrNot }">{{activeOrNot}}</div>
  <div :class="[ activeOrNot ]">{{activeOrNot}}</div>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>

</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'watchCom',
  props: {propA: Number},
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      isActive: true,
      activeOrNot: 'active',
      see:false,
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      items2: [{ msg: 'Foo' }, { msg: 'Bar' }]
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    getAnswer() {
      this.answer = 'Thinking...'
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
        this.answer = response.data.answer
      })
        .catch(error => {
        this.answer = 'Error! Could not reach the API. ' + error
      })
    }
  }
}

</script>

<style>
  @import '../css/demo.css';
</style>