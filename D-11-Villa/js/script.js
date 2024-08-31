const appartmentBtn = document.querySelector('#appartment')
console.log('appartmentBtn =>',appartmentBtn);
const villaHouseBtn = document.querySelector('#villa-house');
const penthouseBtn = document.querySelector('#penthouse')
const appartmentRow = document.querySelector('#appartment-row')
const villaRow = document.querySelector('#villa-row')
const pentRow = document.querySelector('#penthouse-row')


// Header Link
const homeLink = document.querySelector('.home');
console.log('homeLink ==>',homeLink);




document.addEventListener('DOMContentLoaded', function() {
    appartmentBtn.classList.add('active')
    appartmentRow.classList.add('deal-row-2-show')
    // homeLink.classList.add('header-area-menu li a.active ')
   

})

appartmentBtn.addEventListener('click', function() {
    appartmentRow.classList.add('deal-row-2-show')
    villaRow.classList.remove('deal-row-2-show')
    pentRow.classList.remove('deal-row-2-show')

    appartmentBtn.classList.add('active')
    villaHouseBtn.classList.remove('active')
    penthouseBtn.classList.remove('active')

})

villaHouseBtn.addEventListener('click', function() {
    appartmentRow.classList.remove('deal-row-2-show')
    villaRow.classList.add('deal-row-2-show')
    pentRow.classList.remove('deal-row-2-show')

    villaHouseBtn.classList.add('active')
    appartmentBtn.classList.remove('active')
    penthouseBtn.classList.remove('active')

})

penthouseBtn.addEventListener('click', function() {
    appartmentRow.classList.remove('deal-row-2-show')
    villaRow.classList.remove('deal-row-2-show')
    pentRow.classList.add('deal-row-2-show')

    penthouseBtn.classList.add('active')
    appartmentBtn.classList.remove('active')
    villaHouseBtn.classList.remove('active')

})




