const skillTemplate = document.createElement('template')

skillTemplate.innerHTML = `
    <style> @import "styles.css" </style>
    <div class="skills-item">
        <img width="80" height="80" />
        <label class="skill-label"></label>
    </div>
`

class Skill extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ 'mode': 'open' })
        this._shadowRoot.appendChild(skillTemplate.content.cloneNode(true))
    }

    get src() {
        return this.getAttribute('src')
    }

    get label() {
        return this.getAttribute('label')
    }

    get width() {
        return this.getAttribute('width')
    }

    get height() {
        return this.getAttribute('height')
    }

    connectedCallback() {
        const image = this._shadowRoot.querySelector('img')
        const label = this._shadowRoot.querySelector('label')

        image.setAttribute('src',this.src)
        image.setAttribute('alt',this.label)
        this.width !== null ? image.setAttribute('width', this.width): null
        this.height !== null ? image.setAttribute('height', this.height): null

        label.innerHTML = this.label
    }
}

window.customElements.define('skill-item',Skill)