let displayNavBar = false

const bindHamburgerMenu = () => {
    const hamburgerMenu = document.getElementById('hamburger-menu')
    hamburgerMenu.addEventListener('click',clickHamburgerMenu)
}

const clickHamburgerMenu = () => {
    displayNavBar = !displayNavBar
    displayNavBar ? generateNavBar(): degenerateNavBar()
}

const generateNavBar = () => {
    const menuContainer = document.getElementById('menu-container')
    const menuItems = document.querySelectorAll('[id=menu-item]')
    const lineBreaks = document.querySelectorAll('[class=menu-break-inactive]')
    
    menuContainer.className = 'menu-container-active'
    lineBreaks.forEach((lineBreak) => {
        lineBreak.className = 'menu-break-active'
    })
    menuItems.forEach((menuItem) => {
        menuItem.className = 'menu-items-active'
    })
    
}

const degenerateNavBar = () => {
    const menuContainer = document.getElementById('menu-container')
    const menuItems = document.querySelectorAll('[id=menu-item]')
    const lineBreaks = document.querySelectorAll('[class=menu-break-active]')
    
    lineBreaks.forEach((lineBreak) => {
        lineBreak.className = 'menu-break-inactive'
    })
    menuItems.forEach((menuItem) => {
        menuItem.className = 'menu-items-inactive'
    })
    menuContainer.className = 'menu-container-inactive'
}

export { bindHamburgerMenu }