const showAllBtn = document.querySelector('#show-all')
// console.log('Show All =====>',showAllBtn);
const showAllRow = document.querySelector('#show-all-row')

const appartmentBtn = document.querySelector('#properties-appartment')
// console.log('appartmentBtn =>',appartmentBtn);
const villaHouseBtn = document.querySelector('#villa-house');
// console.log('villaHouseBtn =>',villaHouseBtn);

const penthouseBtn = document.querySelector('#penthouse')
// console.log('penthouseBtn =>',penthouseBtn);

const appartmentRow = document.querySelector('#appartment-row');
// console.log('appartmentRow =====>',appartmentRow);

const villaRow = document.querySelector('#villa-house-row');

const penthouseRow = document.querySelector('#penthouse-row')

document.addEventListener('DOMContentLoaded', function() {
    showAllBtn.classList.add('active')
    showAllRow.classList.add('properties-row-unhide')
  

})

showAllBtn.addEventListener('click',function() {
    showAllBtn.classList.add('active')
    showAllRow.classList.add('properties-row-unhide')
    appartmentBtn.classList.remove('active')
    appartmentRow.classList.remove('properties-row-unhide')
    villaRow.classList.remove('properties-row-unhide')
    villaHouseBtn.classList.remove('active')
    pentRow.classList.remove('properties-row-unhide')
    penthouseBtn.classList.remove('active')

})


appartmentBtn.addEventListener('click',function() {
    appartmentBtn.classList.add('active')
    appartmentRow.classList.add('properties-row-unhide')
    showAllRow.classList.remove('properties-row-unhide')
    showAllBtn.classList.remove('active')
    villaRow.classList.remove('properties-row-unhide')
    villaHouseBtn.classList.remove('active')
    pentRow.classList.remove('properties-row-unhide')
    penthouseBtn.classList.remove('active')
})


villaHouseBtn.addEventListener('click',function() {
    villaHouseBtn.classList.add('active')
    villaRow.classList.add('properties-row-unhide')
    appartmentBtn.classList.remove('active')
    appartmentRow.classList.remove('properties-row-unhide')
    showAllRow.classList.remove('properties-row-unhide')
    showAllBtn.classList.remove('active')
    penthouseRow.classList.remove('properties-row-unhide')
    penthouseBtn.classList.remove('active')
})



penthouseBtn.addEventListener('click',function() {
    penthouseBtn.classList.add('active')
    penthouseRow.classList.add('properties-row-unhide')
    villaHouseBtn.classList.remove('active')
    villaRow.classList.remove('properties-row-unhide')
    appartmentBtn.classList.remove('active')
    appartmentRow.classList.remove('properties-row-unhide')
    showAllRow.classList.remove('properties-row-unhide')
    showAllBtn.classList.remove('active')
    villaRow.classList.remove('properties-row-unhide')
    villaHouseBtn.classList.remove('active')

})
