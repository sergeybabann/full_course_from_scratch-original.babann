const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
  },
}

const app = Vue.createApp(App)

Vue.createApp(App).mount('#app')
