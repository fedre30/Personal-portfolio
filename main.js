//BG IMAGE
const rotateCoeff = 15;

const icons = document.querySelector('.backgroundImage');
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



// SCROLL

const scrollTarget = document.querySelector('.scrollTarget');
const sections = document.querySelectorAll('.scrollSection');
let sectionCounter = 0;
let sectionIsAnimating = false;
const dots = document.querySelectorAll('.menu-item');

function refreshSectionDots(currentSection) {
    for(let i = 0; i < dots.length; i++){
        dots[i].style.backgroundColor = i === currentSection ? 'white' : 'transparent';
    }
}

window.addEventListener('wheel', function () {

    if(window.innerWidth > 400){
        event.preventDefault();
        if(sectionIsAnimating === true){
            return;
        }

        let newSectionCounter = sectionCounter;
        newSectionCounter += event.wheelDelta < 0 ? 1 : -1;
        newSectionCounter = Math.min(Math.max(0, newSectionCounter), sections.length - 2);


        if(newSectionCounter !== sectionCounter){
            sectionCounter = newSectionCounter;
            scrollTarget.style = '--currentSection: ' + sectionCounter;
            sectionIsAnimating = true;

            setTimeout(function () {
                sectionIsAnimating = false;
            }, 1000);

            refreshSectionDots(newSectionCounter);
        }
    }


});

refreshSectionDots(sectionCounter);


// CONTACT FORM

/*
document.querySelector(".send").addEventListener("click", function () {
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.message').value;
    let statusEl = document.querySelector('#status');

    if (name.length === 0 || email.length === 0 || message.length === 0)
    {
        statusEl.innerText = "You must fill all the fields!";
        return;
    }

    document.querySelector(".send").disabled= true;

    const mailData = {
        name: name,
        email: email,
        message: message,
    };

    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(xhr.status === 200){

            statusEl.innerText= "Thank you for your message!";
        }
        else{
            statusEl.innerText = "Error";
        }

    };

    xhr.open('POST', 'api.php?action=mail', true);
    xhr.send(JSON.stringify(mailData));
});
*/




