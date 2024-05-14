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
        for (todo of proj.list) {
            container.appendChild(this.buildTodoCard(todo))
        }

        content.appendChild(container)
    }

    static buildTodoCard(todo) {
        return null
    }
}
export {expand}