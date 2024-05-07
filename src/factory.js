class todo {
    constructor(title, desc, due, priority) {
        this.title = title
        this.desc = desc
        this.due = due
        this.priority = priority
    }
}

class project {
    constructor(title) {
        this.name = title
        this.list = []
    }
    addTodo(todo) {
        this.list.append(todo)
    }
}

export {todo, project}