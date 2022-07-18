import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab, far)


createApp(App)
    .use(Router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')