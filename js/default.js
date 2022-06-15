let subNav = document.querySelector('.sub-nav');
let mainNav = document.querySelector('.main-nav');

function displayMenu(){
    subNav.classList.toggle('active');
}

mainNav.addEventListener('mouseover',displayMenu);
mainNav.addEventListener('mouseout',displayMenu);
subNav.addEventListener('mouseover',displayMenu);
subNav.addEventListener('mouseout',displayMenu);