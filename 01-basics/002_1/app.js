const App = {
  data() {
    return {
      placeholder: 'Введите название заметки',
      title: 'Список заметок',
    }
  },
}

const app = Vue.createApp(App)

Vue.createApp(App).mount('#app')
