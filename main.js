//BG IMAGE
const rotateCoeff = 20;

const icons = document.querySelector('.introduction');
const bioImage = document.querySelector('.bioPicture');
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;


icons.addEventListener('mousemove',function (ev) {

    let inverseRatio = screenHeight / screenWidth;
    let centerX = (screenWidth - (icons.clientX || icons.clientLeft)) / 2;
    let centerY = (screenHeight - (icons.clientY || icons.clientTop)) / 2;
    let relativeX =(ev.clientX - centerX) / screenWidth / 2 ;
    let relativeY = (ev.clientY - centerY)  / screenHeight / 2;
    icons.style.transform = 'perspective(1000px)' + 'rotateY('+ (relativeX * rotateCoeff) +'deg)  rotateX('+ (relativeY * inverseRatio * rotateCoeff) +'deg)';

});

bioImage.addEventListener('mousemove', function (ev) {

    let inverseRatio = screenHeight / screenWidth;
    let centerX = (screenWidth - (bioImage.clientX || bioImage.clientLeft)) / 2;
    let centerY = (screenHeight - (bioImage.clientY || bioImage.clientTop)) / 2;
    let relativeX =(ev.clientX - centerX) / screenWidth / 2 ;
    let relativeY = (ev.clientY - centerY)  / screenHeight / 2;


    bioImage.style.transform = 'perspective(1000px)' + 'rotateY('+ (relativeX * rotateCoeff) +'deg)  rotateX('+ (relativeY * inverseRatio * rotateCoeff) +'deg)';

});







// SCROLL

const scrollTarget = document.querySelector('.scrollTarget');
const sections = document.querySelectorAll('.scrollSection');
let sectionCounter = 0;
let sectionIsAnimating = false;
const dots = document.querySelectorAll('.menu-item');
const projectTitle = document.querySelector('.projectTitle');

function refreshSectionDots(currentSection) {
    for(let i = 0; i < dots.length; i++){
        dots[i].style.background = i === currentSection ? 'linear-gradient(to right, #D0A233, #FFFFFF, #7F8990)' : 'transparent';

    }
}

function triggerSectionAnimations() {

    const sections = [
        document.querySelector('.introduction'),
        document.querySelector('.workflow'),
        document.querySelector('.project-1'),
        document.querySelector('.project-2'),
        document.querySelector('.project-3'),
        document.querySelector('.about')

    ];

    for(let i =0; i < sections.length; i++){
        if(i === sectionCounter){
            sections[i].classList.add('visible');

        }
        else{
            sections[i].classList.remove('visible');
        }
    }


}



function setCurrentSection(section) {
    if(section !== sectionCounter) {
        sectionCounter = section;
        scrollTarget.style = '--currentSection: ' + section;

        sectionIsAnimating = true;

        setTimeout(function () {
            sectionIsAnimating = false;
        }, 1000);

        triggerSectionAnimations();
        refreshSectionDots(section);
    }
}

const lethargy = new Lethargy();

window.addEventListener('wheel', function (e) {
    event.preventDefault();

    if(lethargy.check(e) === false){
        return;
    }

    if(window.innerWidth > 480){

        if(sectionIsAnimating === true){
            return;
        }

        let newSectionCounter = sectionCounter;
        newSectionCounter += event.wheelDelta < 0 ? 1 : -1;
        newSectionCounter = Math.min(Math.max(0, newSectionCounter), sections.length - 2);


        setCurrentSection(newSectionCounter);
    }


});

for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', function () {
        console.log(i);
        setCurrentSection(i);
    });
}

refreshSectionDots(sectionCounter);


//MENU

const introDot = document.querySelector('.menuIntroduction');
const introLabel = document.querySelector('.introLabel');

for(let i = 0; i < dots.length; i++){
    const selector = dots[i].dataset.tooltipId;
    const tooltip = document.querySelector(selector);

    dots[i].addEventListener('mouseenter', function () {
        tooltip.classList.add('visible');
    });

    dots[i].addEventListener('mouseleave', function () {
        tooltip.classList.remove('visible');
    });
}


