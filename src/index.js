import * as css from './style.css'
import {home} from './home.js'

const body = document.querySelector('body')
class index {
    static build() {
        home.build(body)
    }
}
index.build()
