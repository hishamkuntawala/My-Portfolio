// let header = document.getElementsByTagName('header');

// window.onscroll = function(){
//     "use strict";
//     if(document.body.scrollTop >= 200){
//         header.classList.add('nav-colored');
//         header.classList.remove('nav-transparent')
//     }
//     else {
//         header.classList.add('nav-transparent');
//         header.classList.remove('nav-colored');
//     }
// };
    
var header = document.querySelector('header'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    this.console.log(window.scrollY)
    if (window.scrollY <= 150) { // Just an example
        header.style.backgroundColor = 'transparent'; // or default color
    } 
    else  {
        header.style.backgroundColor = '#9e5f40';
        header.style.transition= 'all .3s ease-in-out';
    }
});