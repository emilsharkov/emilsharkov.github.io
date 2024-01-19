const navbarTemplate = document.createElement('template')
navbarTemplate.innerHTML = `
    <style>@import 'styles.css'</style>
    <nav id="menu-container" class="menu-container-inactive">
        <a class='menu-items-inactive' id="menu-item" href="#about-me">About</a>
        <hr class="menu-break-inactive">
        <a class='menu-items-inactive' id="menu-item" href="#experience">Experience</a>
        <hr class="menu-break-inactive">
        <a class='menu-items-inactive' id="menu-item" href="#personal-projects">Personal Projects</a>
        <hr class="menu-break-inactive">
        <a class='menu-items-inactive' id="menu-item" href="#skills">Skills</a>
        <hr class="menu-break-inactive">
        <a class='menu-items-inactive' id="menu-item" href="#tools">Tools</a>
        <hr class="menu-break-inactive">
        <a class='menu-items-inactive' id="menu-item" href="#contact-me">Contact Me</a>
        <hr class="menu-break-inactive">
        <a class='menu-items-inactive' id="menu-item" target="_blank" href="./media/Emil_Sharkov_Resume.pdf">Resume</a>
        <hr class="menu-break-inactive">
    </nav>

    <div class="navbar-container">
        <img class="logo" width="151" height="31" src="./images/emil-sharkov-logo.png">
        <nav class="navbar">
            <a class="nav-element navbar-text" href="#about-me">About</a>
            <a class="nav-element navbar-text" href="#experience">Experience</a>
            <a class="nav-element navbar-text" href="#personal-projects">Personal Projects</a>
            <a class="nav-element navbar-text" href="#skills">Skills</a>
            <a class="nav-element navbar-text" href="#tools">Tools</a>
            <a class="nav-element navbar-text" href="#contact-me">Contact Me</a>
            <a class="nav-element navbar-text" target="_blank" href="./media/Emil_Sharkov_Resume.pdf">Resume</a>
            <button id="hamburger-menu" class="nav-element hamburger-menu">
                <img class="hamburger-icon" src="./images/hamburger-menu.png"/>
            </button>
        </nav>
    </div> 
`
class Navbar extends HTMLElement {
    constructor() {
        super()
        this.displayNavbar = false
        this._shadowRoot = this.attachShadow({ 'mode': 'open' })
        this._shadowRoot.appendChild(navbarTemplate.content.cloneNode(true))
    }

    generateNavbar() {
        const menuContainer = this._shadowRoot.getElementById('menu-container')
        const menuItems = this._shadowRoot.querySelectorAll('[id=menu-item]')
        const lineBreaks = this._shadowRoot.querySelectorAll('[class=menu-break-inactive]')
        
        menuContainer.className = 'menu-container-active'
        lineBreaks.forEach((lineBreak) => {
            lineBreak.className = 'menu-break-active'
        })
        menuItems.forEach((menuItem) => {
            menuItem.className = 'menu-items-active'
        })
    }
    
    degenerateNavbar() {
        const menuContainer = this._shadowRoot.getElementById('menu-container')
        const menuItems = this._shadowRoot.querySelectorAll('[id=menu-item]')
        const lineBreaks = this._shadowRoot.querySelectorAll('[class=menu-break-active]')
        
        lineBreaks.forEach((lineBreak) => {
            lineBreak.className = 'menu-break-inactive'
        })
        menuItems.forEach((menuItem) => {
            menuItem.className = 'menu-items-inactive'
        })
        menuContainer.className = 'menu-container-inactive'
    }

    connectedCallback() {
        const hamburgerMenu = this._shadowRoot.getElementById('hamburger-menu')
        console.log(hamburgerMenu)
        hamburgerMenu.addEventListener('click',() => {
            this.displayNavbar = !this.displayNavbar
            this.displayNavbar ? this.generateNavbar(): this.degenerateNavbar()
        })
    }
}

window.customElements.define('portfolio-navbar',Navbar)