class home {
    static createElement(element, text, cls) {
        const e = document.createElement(element)
        if (text) {e.textContent = text}
        if (cls) {e.classList.add(cls)}
        return e
    }
    static build(content) {
        const homeContainer = this.createElement('div',null,'home-container')
        homeContainer.appendChild(this.createElement('p',"Xavier's Todo App",'home-header'))
        homeContainer.appendChild(this.createElement('p', 'This is an example description', 'home-description'))


        content.appendChild(homeContainer)
    }
}
export {home}