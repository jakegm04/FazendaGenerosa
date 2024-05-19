
const header = document.querySelector('.header')
const btnMenu = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.nav-menu')

window.addEventListener('scroll', () => {
    window.scrollY > 10 ? header.classList.add('scrolled') : header.classList.remove('scrolled')
})

//  menu responsivo
function openMenuAside(e) {
    navMenu.classList.toggle('active')
    if(navMenu.classList.contains('active')){
        btnMenu.innerHTML = '<span class="material-symbols-outlined">close</span>'
    }
    else{
        btnMenu.innerHTML = '<span class="material-symbols-outlined menu-icon">menu</span>'
    }
}

btnMenu.addEventListener('click', openMenuAside)

