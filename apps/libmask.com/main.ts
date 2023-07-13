import { bootstrap } from '@libmask/mask'
import { createIcons, Github } from 'lucide'
import App from './components/app'
import './styles.css'

bootstrap(App)

createIcons({
  icons: {
    Github
  }
})
