import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub, faDiscord, faYoutube, faTwitter, faTailwindCss, faVuejs, faTypescript } from '@fortawesome/free-brands-svg-icons'
import { faVenus, faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faDiscord, faYoutube, faTwitter, faTailwindCss, faVuejs, faTypescript, faVenus, faCode, faPaintBrush)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
