const experiencesTemplate = document.createElement('template')
experiencesTemplate.innerHTML = `
    <style>@import 'styles.css'</style>
    <div class="experiences-container">
        <div class="company-selector-container"></div>
        <slot></slot>
    </div>
`
class Experiences extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ 'mode': 'open' })
        this.selected = ""
        this.companies = []
        this._shadowRoot.appendChild(experiencesTemplate.content.cloneNode(true))
    }

    connectedCallback() {
        const companySelectorContainer = this._shadowRoot.querySelector('.company-selector-container')
        const slot = this._shadowRoot.querySelector('slot')
        const slotNodes = slot.assignedNodes()
        slotNodes.forEach((node,index) => {
            if(node.tagName === 'WORK-EXPERIENCE') {
                this.companies.push(node.company)
            }
        })

        this.companies.forEach((company,index) => {
            const h6 = document.createElement('h6')
            h6.innerHTML = company
            h6.className = 'company-selector'
            h6.addEventListener('click', () => {
                this.selected = company
                this.showExperience()
            });
            companySelectorContainer.appendChild(h6)

            if(index != this.companies.length - 1) {
                const hr = document.createElement('hr')
                hr.className = 'company-selector-break'
                companySelectorContainer.appendChild(hr)
            }
        })

        this.selected = this.companies[0]
        this.showExperience()
    }

    showExperience() {
        const slot = this._shadowRoot.querySelector('slot')
        const slotNodes = slot.assignedNodes()

        slotNodes.forEach((node,index) => {
            if(node.tagName === 'WORK-EXPERIENCE') {
                const workContainer = node._shadowRoot.querySelector('.work-container')
                if(this.selected == node.company) {
                    this.setWorkNodeStyle(workContainer,'display','')
                } else {
                    this.setWorkNodeStyle(workContainer,'display','none')
                }
            }
        })

        const h6s = this._shadowRoot.querySelectorAll('.company-selector')
        h6s.forEach(h6 => {
            if(h6.innerHTML === this.selected) {
                this.setWorkNodeStyle(h6,'color','#f6cc0f')

            } else {
                this.setWorkNodeStyle(h6,'color','#353935')
            }
        })
    }

    setWorkNodeStyle(node,cssPropertyName,value) {
        node.style[cssPropertyName] = value
    }
}

window.customElements.define('experience-selector',Experiences)