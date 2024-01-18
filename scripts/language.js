const projectLanguageTemplate = document.createElement('template')
projectLanguageTemplate.innerHTML = `
    <style>@import 'styles.css'</style>
    <div class="project-language"></div>
`
class ProjectLanguage extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ 'mode': 'open' })
        this._shadowRoot.appendChild(projectLanguageTemplate.content.cloneNode(true))
    }

    get name() {
        return this.getAttribute('name')
    }

    get color() {
        return this.getAttribute('color')
    }

    connectedCallback() {
        const div = this._shadowRoot.querySelector('.project-language')
        div.innerHTML = this.name
        div.style.backgroundColor = this.color
    }
}

window.customElements.define('project-language',ProjectLanguage)