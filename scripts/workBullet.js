const workBulletTemplate = document.createElement('template')

workBulletTemplate.innerHTML = `
    <style> @import "styles.css" </style>
    <li class="work-list-item"></li>
`

class WorkBullet extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ 'mode': 'open' })
        this._shadowRoot.appendChild(workBulletTemplate.content.cloneNode(true))
    }

    get bullet() {
        return this.getAttribute('bullet')
    }

    connectedCallback() {
        const listItem = this._shadowRoot.querySelector('li')
        listItem.innerHTML = this.bullet
    }
}

window.customElements.define('work-bullet',WorkBullet)