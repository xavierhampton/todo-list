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

    static save() {
        localStorage.setItem('projects', JSON.stringify(this.projects))
    }

    static loadProjects() {
        this.projects = []
        const storageObject = JSON.parse(localStorage.getItem('projects'))
        if (storageObject){
        for (let i = 0; i < storageObject.length; i +=1 ) {
            this.projects.push(storageObject[i])
        }
        }
    }

    static deleteProject(p) {
        const index = this.projects.indexOf(p);
        if (index > -1) { 
          this.projects.splice(index, 1)
        }
        this.clear()
        this.build()
        this.save()
    }

    static addProject(proj) {
        this.projects.push(proj)
        this.save()
    }

    static createProject() {
        this.clear()
        this.createHeader(body)
        creationPage.buildProject(body)
        this.save()

    }

    static addTodo(proj, todo) {
        proj.list.push(todo)
        this.save()
    }

    static createTodo(proj) {
        this.clear()
        this.createHeader(body)
        creationPage.buildTodo(body, proj)
        this.save()
    }

    static deleteTodo(p, t) {
        const index = p.list.indexOf(t);
        if (index > -1) { 
          p.list.splice(index, 1)
        }
        this.expandProject(p)
        this.save()
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