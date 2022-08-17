const mobileMenu = document.querySelector('.mobile-menu');
const mobileSidebar = document.querySelector('.list');
const closeMenu = document.querySelector('.close-icon--items');

mobileMenu.addEventListener('click',function(e){
    mobileSidebar.classList.add('show');
})
closeMenu.addEventListener('click',function(){
    mobileSidebar.classList.remove('show');
})

document.addEventListener('click',function(e){
    if(e.target.matches('.list__link')){
        const li = e.target.parentElement;
        li.querySelector('.dropdown-list').classList.toggle('active');
    }
})
