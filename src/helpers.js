class helpers {
    static createElement(element, text, cls) {
        const e = document.createElement(element)
        if (text) {e.textContent = text}
        if (cls) {e.classList.add(cls)}
        return e
    }
    
}

export {helpers}