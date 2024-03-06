import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import ui_components from './components/UI'


const app = createApp(App)
const all_components = [...components, ...ui_components]

all_components.forEach(el => {
    app.component(el.name, el.component)
})

app.use(store).use(router).mount('#app')


