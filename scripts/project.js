const projectTemplate = document.createElement('template')
projectTemplate.innerHTML = `
    <style>@import 'styles.css'</style>
    <div class="project-item">
        <a target="_blank">
            <img class="project-item-image" width="500"/>
        </a>
        <h3 class="project-item-title"></h3>
        <h4 class="project-item-description"></h4>
    </div>
`
class Project extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ 'mode': 'open' })
        this._shadowRoot.appendChild(projectTemplate.content.cloneNode(true))
    }

    get href() {
        return this.getAttribute('href')
    }

    get src() {
        return this.getAttribute('src')
    }

    get alt() {
        return this.getAttribute('alt')
    }

    get title() {
        return this.getAttribute('title')
    }

    get description() {
        return this.getAttribute('description')
    }

    connectedCallback() {
        const link = this._shadowRoot.querySelector('a')
        const image = this._shadowRoot.querySelector('img')
        const title = this._shadowRoot.querySelector('h3')
        const description = this._shadowRoot.querySelector('h4')
        console.log(description)
    
        link.setAttribute('href',this.href)
        image.setAttribute('src',this.src)
        image.setAttribute('alt',this.alt)
        title.innerHTML = this.title
        description.innerHTML = this.description
    }
}

window.customElements.define('project-item',Project)