const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];


const corazon = document.querySelector("#hearth");


slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

setInterval(function(){
    Next();
},5000)



document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menuIcon');
    const header = document.querySelector('.header');

    if(window.innerWidth<=900){
        header.style.height = '50px';
    }

    menuIcon.addEventListener('click', function() {
        if (header.style.height!='50px')
            header.style.height = '50px';
        else
            header.style.height = '260px';
});
});
