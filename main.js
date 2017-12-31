const scrollTarget = document.querySelector('.scrollTarget');
const sections = document.querySelectorAll('.scrollSection');
let sectionCounter = 0;
let sectionIsAnimating = false;

window.addEventListener('wheel', function () {

    event.preventDefault();
    if(sectionIsAnimating === true){
        return;
    }

    let newSectionCounter = sectionCounter;
    newSectionCounter += event.wheelDelta < 0 ? 1 : -1;
    newSectionCounter = Math.min(Math.max(0, newSectionCounter), sections.length);

    console.log('not animating');

    if(newSectionCounter !== sectionCounter){
        sectionCounter = newSectionCounter;
        scrollTarget.style = '--currentSection: ' + sectionCounter;
        sectionIsAnimating = true;

        setTimeout(function () {
           sectionIsAnimating = false;
        }, 1000);
    }




});

