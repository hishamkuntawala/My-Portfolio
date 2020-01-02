<<<<<<< HEAD

const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;

for(let i=0; i<filterButtons.length; i++ ) {
    filterButtons[i].addEventListener("click",function(){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target=this.getAttribute("data-target")

        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block";
            }
            
            if(target=="all"){
                items[k].style.display="block";

            }
        }
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

=======

const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;

for(let i=0; i<filterButtons.length; i++ ) {
    filterButtons[i].addEventListener("click",function(){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target=this.getAttribute("data-target")

        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block";
            }
            
            if(target=="all"){
                items[k].style.display="block";

            }
        }
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

>>>>>>> 898f61d2bc6d59cda117c3de6f227d1e3f9754ae
