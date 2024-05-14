import {todo, project} from './factory.js'
import {helpers} from './helpers.js'
import {index} from './index.js'

class creationPage {
    static buildProject(content) {
        const container = helpers.createElement('div', null, 'create-project-container')
        
        const fieldset = document.createElement('fieldset')
        fieldset.classList.add('create-project-field')
        const legend = document.createElement('legend')
        legend.textContent = 'Project Title'
        fieldset.appendChild(legend)
        const input = document.createElement('input')
        input.type = 'text'
        input.maxLength = 10
        fieldset.appendChild(input)
        container.appendChild(fieldset)

        const buttonContainer = helpers.createElement('div', null, 'create-project-button-container')
        const cancelButton = document.createElement('button')
        cancelButton.classList.add('cancel')
        cancelButton.textContent = 'Cancel'
        buttonContainer.appendChild(cancelButton)


        cancelButton.addEventListener('click', () => {index.build()})
        const submitButton = document.createElement('button')
        submitButton.classList.add('submit')
        submitButton.textContent = 'Create Project'
        submitButton.addEventListener('click', () => {
            if (input.value !== '') {
            const proj = new project(input.value)
            index.addProject(proj)
            index.build()
            }
            else {
            input.style.borderColor = 'red'
            }
        })
        buttonContainer.appendChild(submitButton)

        container.appendChild(buttonContainer)
        content.appendChild(container)
    }
    static buildTodo(content, proj) {
        const container = helpers.createElement('div', null, 'create-todo-container')
        
        const title_fieldset = document.createElement('fieldset')
        title_fieldset.classList.add('todo-title-field')
        const title_legend = document.createElement('legend')
        title_legend.textContent = 'Todo Title*'
        title_fieldset.appendChild(title_legend)
        const title_input = document.createElement('input')
        title_input.type = 'text'
        title_input.maxLength = 10
        title_fieldset.appendChild(title_input)
        container.appendChild(title_fieldset)

        const desc_fieldset = document.createElement('fieldset')
        desc_fieldset.classList.add('todo-desc-field')
        const desc_legend = document.createElement('legend')
        desc_legend.textContent = 'Todo Description'
        desc_fieldset.appendChild(desc_legend)
        const desc_input = document.createElement('textarea')
        desc_input.rows = '3'
        desc_input.cols = '30'
        
        desc_input.maxLength = 80
        desc_fieldset.appendChild(desc_input)
        container.appendChild(desc_fieldset)

        const date_fieldset = document.createElement('fieldset')
        date_fieldset.classList.add('todo-date-field')
        const date_legend = document.createElement('legend')
        date_legend.textContent = 'Due Date*'
        date_fieldset.appendChild(date_legend)
        const date_input = document.createElement('input')
        date_input.type = 'date'
        date_fieldset.appendChild(date_input)
        container.appendChild(date_fieldset)

        const priority_fieldset = document.createElement('fieldset')
        priority_fieldset.classList.add('todo-priority-fieldset')
        priority_fieldset.appendChild(helpers.createElement('legend','Priority', null))

        const button1 = document.createElement('input')
        button1.type = 'radio'
        button1.value = '0';
        button1.name = 'priority'
        button1.id = 'low'
        button1.checked = 'checked'

        const label1 = document.createElement('label')
        label1.classList.add('low')
        label1.for = 'low'
        label1.textContent = 'Low Priority'

        const button2 = document.createElement('input')
        button2.type = 'radio'
        button2.value = '1';
        button2.name = 'priority'
        button2.id = 'med'

        const label2 = document.createElement('label')
        label2.for = 'med'
        label2.classList.add('med')
        label2.textContent = 'Medium Priority'

        const button3 = document.createElement('input')
        button3.type = 'radio'
        button3.value = '2';
        button3.name = 'priority'
        button3.id = 'high'

        const label3 = document.createElement('label')
        label3.classList.add('high')
        label3.for = 'high'
        label3.textContent = 'High Priority'

        priority_fieldset.appendChild(label1)
        priority_fieldset.appendChild(button1)
        
        priority_fieldset.appendChild(label2)
        priority_fieldset.appendChild(button2)
        
        priority_fieldset.appendChild(label3)
        priority_fieldset.appendChild(button3)

        container.appendChild(priority_fieldset)

        const buttonContainer = helpers.createElement('div', null, 'create-project-button-container')
        const cancelButton = document.createElement('button')
        cancelButton.classList.add('cancel')
        cancelButton.textContent = 'Cancel'
        buttonContainer.appendChild(cancelButton)


        cancelButton.addEventListener('click', () => {index.expandProject(proj)})
        const submitButton = document.createElement('button')
        submitButton.classList.add('submit')
        submitButton.textContent = 'Create Todo'
        submitButton.addEventListener('click', () => {
            let unparsedDate = date_input.value
            let date = ''
            date = date.concat(unparsedDate.slice(5,7), '-', unparsedDate.slice(8,10), '-', unparsedDate.slice(0,4))

            const title = title_input.value
            const desc = desc_input.value
            const priorityVal = document.querySelector('input[name="priority"]:checked').value
            let priority = null
            switch (priorityVal) {
                case '0':
                    priority = 'green'
                    break
                case '1':
                    priority = 'yellow'
                    break
                case '2':
                    priority = 'red'
                    break
            }
            if (!title) {
                title_input.style.borderColor = 'red'
            }
            if (!date) {
                date_input.style.borderColor = 'red'
            }
            if (title && date) {
            index.addTodo(proj, new todo(title, desc, date, priority))
            index.expandProject(proj)
            }
        })

        buttonContainer.appendChild(submitButton)
        container.appendChild(buttonContainer)

        content.appendChild(container)
    }
}
export {creationPage}