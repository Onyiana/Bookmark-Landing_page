const menuOpen = document.querySelector('.ri-menu-add-line')
const menuClose = document.querySelector('.ri-close-circle-fill')
const navMenu = document.querySelector('.navlinks')
const wraper = document.querySelector('.wraper')
const html = document.querySelector('html')
const logoImage = document.querySelector('.logoImage')
const accordionBtn = document.querySelectorAll('.Asked')
const navLists = document.querySelectorAll('li')
const arrowDropDown = document.querySelectorAll('.ri-arrow-drop-down-line')
console.log(arrowDropDown)

accordionBtn.forEach(element => {
    element.addEventListener('click', function(){
        element.classList.toggle("showFaq")
        // arrowDropDown.
    })
});

accordionBtn.forEach(e => {
    e.addEventListener('click', function(){
        e.classList.toggle('rotateArrow')
    })
})


// This was used to add click event on the toggler and also a blur


menuOpen.addEventListener('click', function(){
    navMenu.style.top = '0'
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
    wraper.classList.add('blur')
    html.classList.add('hideScroll')
    logoImage.style.display = 'none'
})

menuClose.addEventListener('click', function(){
    navMenu.style.top = '-1000px'
    menuOpen.style.display = 'block'
    menuClose.style.display = 'none'
    wraper.classList.remove('blur')
    html.classList.remove('hideScroll')
    logoImage.style.display = 'block'
})


navLists.forEach((element) => {
    element.addEventListener('click', function(){
        navMenu.style.top = '-1000px'
        menuOpen.style.display = 'block'
        menuClose.style.display = 'none'
        wraper.classList.remove('blur')
        html.classList.remove('hideScroll')
        logoImage.style.display = 'block'
    })
})