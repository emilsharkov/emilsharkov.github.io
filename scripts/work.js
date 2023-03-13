const workTemplate = document.createElement('template')

workTemplate.innerHTML = `
    <style> @import "styles.css" </style>
    <div class="work-container">
        <h3 class="work-title"></h3>
        <i class="work-duration"></i>
        <ul class="work-list"></ul>
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

    get descriptions() {
        return this.getAttribute('descriptions')
    }

    get parseDescriptions() {
        let descriptions = this.descriptions
        let bulletPoints = descriptions.split(':')
        return bulletPoints
    }

    connectedCallback() {
        const title = this._shadowRoot.querySelector('h3')
        const duration = this._shadowRoot.querySelector('i')
        const listContainer = this._shadowRoot.querySelector('ul')

        title.innerHTML = `
            ${this.title} <b> @ ${this.company}</b>
        `
        duration.innerHTML = this.duration
        this.parseDescriptions.forEach(description => {
            let listItem = document.createElement('li')
            listItem.innerHTML = description
            listItem.className = "work-list-item"
            listContainer.appendChild(listItem)
        });
    }
}

window.customElements.define('work-experience',Work)