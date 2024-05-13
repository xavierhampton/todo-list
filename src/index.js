import * as css from './style.css'
import {todo, project} from './factory.js'
import {helpers} from './helpers.js'
import {home} from './home.js'
import {creationPage} from './creationPage.js'
import {expand} from './expand.js'

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
        this.projects = []
    }

    static deleteProject(p) {
        const index = this.projects.indexOf(p);
        if (index > -1) { 
          this.projects.splice(index, 1)
        }
        this.clear()
        this.build()
    }

    static addProject(proj) {
        this.projects.push(proj)
    }

    static createProject() {
        this.clear()
        this.createHeader(body)
        creationPage.buildProject(body)

    }

    static addTodo(proj, todo) {
        proj.list.push(todo)
    }

    static createTodo(proj) {
        this.clear()
        this.createHeader(body)
        creationPage.buildTodo(body)
    }

    static clear() {
        while (body.firstChild) {
            body.removeChild(body.lastChild);
          }
    }

    static expandProject(project) {
        this.clear()
        this.createHeader(body)
        expand.build(body, project)
        
    }

    static build() {
        this.clear()
        this.createHeader(body)
        home.build(body, this.projects)

    }
}
index.loadProjects()
index.build()


export {index}