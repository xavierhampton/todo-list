import {helpers} from './helpers.js'
import {index} from './index.js'

class expand {
    static build(content, proj) {
        const container = helpers.createElement('div', null, 'todo-container')

        const expandContainer = helpers.createElement('div','','expand-container')
        const back = document.createElement('button')
        back.textContent = '<'
        back.classList.add('back-button')
        back.addEventListener('click', () => {index.build()})

        expandContainer.appendChild(back)

        expandContainer.appendChild(helpers.createElement('p', proj.name,'project-header'))

        const newTodo = document.createElement('button')
        newTodo.textContent = 'New Todo'
        newTodo.classList.add('new-todo')
        newTodo.addEventListener('click', () =>{index.createTodo(proj)})

        expandContainer.appendChild(newTodo)


        container.appendChild(expandContainer)
        if (proj.list.length == 0) {
            container.appendChild(helpers.createElement('p', 'This is where you will see your todo list. Create a todo to get started!', 'empty-list'))
        }
        for (let i = 0; i < proj.list.length; i += 1) {
            container.appendChild(this.buildTodoCard(proj, proj.list[i]))
        }

        content.appendChild(container)
    }

    static buildTodoCard(proj, todo) {
        const container = helpers.createElement('div', null, 'todo-card-container')
        container.style.boxShadow = `0px 0px 5px ${todo.priority} inset`
        const innerContainer = helpers.createElement('div', null, 'todo-card-inner-container')

        innerContainer.appendChild(helpers.createElement('p', todo.title, 'todo-card-title'))
        innerContainer.appendChild(helpers.createElement('p', todo.due, 'todo-card-date'))
        container.appendChild(innerContainer)

        container.appendChild(helpers.createElement('p', todo.desc, 'todo-card-desc'))

        const delButton = document.createElement('button')
        delButton.textContent = 'X'
        delButton.classList.add('delete-project')
        delButton.addEventListener('click', () => {index.deleteTodo(proj, todo)})
        
        container.appendChild(delButton)

        return container
    }
}
export {expand}