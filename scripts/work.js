const workTemplate = document.createElement('template')

workTemplate.innerHTML = `
    <style> @import "styles.css" </style>
    <div class="work-container">
        <h3 class="work-title"></h3>
        <i class="work-duration"></i>
        <ul class="work-list">
            <slot></slot>
        </ul>
    </div>
`

class Work extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ 'mode': 'open' })
        this._shadowRoot.appendChild(workTemplate.content.cloneNode(true))
    }

    get title() {
        return this.getAttribute('title')
    }

    get company() {
        return this.getAttribute('company')
    }

    get duration() {
        return this.getAttribute('duration')
    }

    connectedCallback() {
        const title = this._shadowRoot.querySelector('h3')
        const duration = this._shadowRoot.querySelector('i')
        const listContainer = this._shadowRoot.querySelector('ul')

        title.innerHTML = `
            ${this.title} <b> @ ${this.company}</b>
        `
        duration.innerHTML = this.duration
    }
}

window.customElements.define('work-experience',Work)