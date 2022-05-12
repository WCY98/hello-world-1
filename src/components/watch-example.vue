<template>
<div id="watch-example" class="demo">
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
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
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