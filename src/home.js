import {helpers} from './helpers.js'
import {index} from './index.js'

class home {
    static createProjectList(projects) {
        const container = helpers.createElement('div', '', 'project-container')

        const projectHeaderContainer = helpers.createElement('div','','project-header-container')
        projectHeaderContainer.appendChild(helpers.createElement('p','Projects','project-header'))
        const projButton = document.createElement('button')
        projButton.textContent = 'New Project'
        projButton.classList.add('project-button')
        projButton.addEventListener('click', () => {index.createProject()})
        projectHeaderContainer.appendChild(projButton)

        container.appendChild(projectHeaderContainer)

        if (projects.length == 0) {
            container.appendChild(helpers.createElement('p', 'This is where you will see your project list. Create a project to get started!', 'empty-list'))
        }

        for (const e of projects) {
            container.appendChild(this.createProjectCard(e))
        }

        return container
    }
    static createProjectCard(project) {
        const container = helpers.createElement('div', null, 'project-card-container')
        const title = helpers.createElement('p', project.name, 'project-title')
        title.addEventListener('click',() => {index.expandProject(project)})
        container.appendChild(title)
        const delButton = document.createElement('button')
        delButton.addEventListener('click', function() {index.deleteProject(project)})
        delButton.textContent = 'X'
        delButton.classList.add('delete-project')
        container.appendChild(delButton)

        return container
    }
    static build(content, projects) {
        const projectContainer = this.createProjectList(projects)

        content.appendChild(projectContainer)
    }
}
export {home}