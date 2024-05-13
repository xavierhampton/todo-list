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
        console.log('hlelo')
    }

}
export {creationPage}
