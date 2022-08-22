const mobileMenu = document.querySelector('.mobile-menu');
const mobileSidebar = document.querySelector('.list');
const closeMenu = document.querySelector('.close-icon--items');
const dropdownItems = document.querySelectorAll('.nav__list-dropdown-item');
const dropdownList = document.querySelectorAll('.dropdown-list');


mobileMenu.addEventListener('click',function(e){
    mobileSidebar.classList.add('show');
})
closeMenu.addEventListener('click',function(){
    mobileSidebar.classList.remove('show');
})

dropdownItems.forEach(item => {
    item.addEventListener('click',function(){
        dropdownList.forEach(listItem => {
            listItem.classList.remove('active');
        })
    this.children[1].classList.add('active');
    })
})

document.addEventListener('click',function(e){
    dropdownItems.forEach(item =>{
        if(!item.contains(e.target)){
            item.children[1].classList.remove('active');
        }
    })
})