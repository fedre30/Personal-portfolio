//BG IMAGE

/*
const icons = document.querySelectorAll('.backgroundImage');


    icons.addEventListener('mousemove',function () {

        //code here
    });


*/

// SCROLL

const scrollTarget = document.querySelector('.scrollTarget');
const sections = document.querySelectorAll('.scrollSection');
let sectionCounter = 0;
let sectionIsAnimating = false;

window.addEventListener('wheel', function () {

    if(window.innerWidth > 400){
        event.preventDefault();
        if(sectionIsAnimating === true){
            return;
        }

        let newSectionCounter = sectionCounter;
        newSectionCounter += event.wheelDelta < 0 ? 1 : -1;
        newSectionCounter = Math.min(Math.max(0, newSectionCounter), sections.length-1);


        if(newSectionCounter !== sectionCounter){
            sectionCounter = newSectionCounter;
            scrollTarget.style = '--currentSection: ' + sectionCounter;
            sectionIsAnimating = true;

            setTimeout(function () {
                sectionIsAnimating = false;
            }, 1000);
        }
    }


});



