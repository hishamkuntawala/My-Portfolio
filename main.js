
const filterButtons=document.querySelector("#filter-btns").children;

for(let i=0; i<filterButtons.length; i++ ) {
    filterButtons[i].addEventListener("click",function(){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
    })
    
}


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

