const appartmentBtn = document.querySelector('#appartment')
// console.log('appartmentBtn =>',appartmentBtn);
const villaHouseBtn = document.querySelector('#villa-house');
const penthouseBtn = document.querySelector('#penthouse')
const appartmentRow = document.querySelector('#appartment-row')
const villaRow = document.querySelector('#villa-row')
const pentRow = document.querySelector('#penthouse-row')

// Cordian
const accordionButton = document.querySelectorAll('.accordion-button');
// console.log('accordionButton==>',accordionButton);

// console.log('accordionButton ===>',accordionButton);

const accordionBody = document.querySelector('.accordion-body')
 for(let i = 0; i < accordionButton.length; i++) {
  console.log(accordionButton[i]);
  let ele = true;
  accordionButton[i].addEventListener('click',function(eve) {
    console.log(eve.target.parentElement.nextElementSibling);
    
    if (ele == true) {
    ele = false;
    eve.target.parentElement.nextElementSibling.classList.add("accordion-body-s");
    eve.target.parentElement.nextElementSibling.classList.remove("accordion-body");
  } else {
    ele = true;
    eve.target.parentElement.nextElementSibling.classList.add("accordion-body");
    eve.target.parentElement.nextElementSibling.classList.remove("accordion-body-s");
  }
});

}







document.addEventListener('DOMContentLoaded', function() {
    appartmentBtn.classList.add('active')
    appartmentRow.classList.add('deal-row-2-show')
   

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




