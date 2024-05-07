import * as css from './style.css'
import {todo, project} from './factory.js'
import {helpers} from './helpers.js'
import {home} from './home.js'

const example = new project('title')


const body = document.querySelector('body')
class index {
    static createHeader(content) {
        const container = helpers.createElement('div', '', 'header-container')
        container.appendChild(helpers.createElement('p',"Xavier's Todo App",'header-title'))
        container.appendChild(helpers.createElement('p', 'Become more productive.', 'header-description'))
        content.appendChild(container)
    }   
    static loadProjects() {
        this.projects = [example]
    }
    static deleteProject(p) {
        const index = this.projects.indexOf(p);
        if (index > -1) { 
          this.projects.splice(index, 1)
        }
        this.clear()
        this.build()
}
    static clear() {
        while (body.firstChild) {
            body.removeChild(body.lastChild);
          }
    }
    static expandProject(project) {
        console.log('expand')
    }

    static build() {
        this.createHeader(body)
        home.build(body, this.projects)

    }
}
index.loadProjects()
index.build()


export {index}