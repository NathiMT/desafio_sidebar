let buttonOpenCloseMenu = document.getElementById('openCloseMenu')
let navBar = document.querySelector('nav')
let mainContent = document.querySelector('main')

buttonOpenCloseMenu.onclick = function() {
    navBar.classList.toggle("inactive")
    mainContent.classList.toggle("menu-inactive")
}