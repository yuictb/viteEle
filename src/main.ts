import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import directives from './directives'
import router from './router'
import VForm3 from 'vform3-builds'  //引入VForm3库
import 'vform3-builds/dist/designer.style.css'  //引入VForm3样式
createApp(App).use(VForm3).use(router).use(directives).mount('#app')
