document.addEventListener("DOMContentLoaded",function(){
    const hamburgerMenu = document.getElementById ('hamburgerMenu');
    const mobileMenu = document.getElementById ('mobileMenu');
    const animatedElement = document.getElementById("texto-gradiente-1"); // Selecciona el elemento con el id "texto-gradiente-1" y lo almacena en la variable "animatedElement"

    hamburgerMenu.addEventListener('click', function (event){
        console.log('Hamburguesa clickeada');
        mobileMenu.classList.toggle('open');
        event.stopPropagation(); // Evita que el evento se propague al documento
    });

    document.addEventListener('click', function (event) {
        if (!hamburgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('open');
        }
    });
    
    // Agrega un evento de scroll a la ventana
    window.addEventListener("scroll",function(){
        const scrollPosition = window.scrollY; // Obtiene la posición actual de scroll en la página
        const elementPosition = animatedElement.offsetTop; // Obtiene la posición del elemento "animatedElement" en la página
        const windowHeight = window.innerHeight; // Obtiene la altura de la ventana
        
        // Verifica si la posición de scroll más la altura de la ventana es mayor que la posición del elemento
        if (scrollPosition + windowHeight > elementPosition) {
            animatedElement.classList.add("show"); // Agrega la clase "show" al elemento "animatedElement"
        }
    })
});

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}