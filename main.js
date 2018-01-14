//BG IMAGE
const rotateCoeff = 20;

const icons = document.querySelector('.introduction');
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
const projectTitle = document.querySelector('.projectTitle');

function refreshSectionDots(currentSection) {
    for(let i = 0; i < dots.length; i++){
        dots[i].style.backgroundColor = i === currentSection ? 'white' : 'transparent';

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

    if(window.innerWidth > 400){
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

/*

const mail = document.querySelector('.mail_botprotection');

mail.each(function(i)
    {
        this.html("<a href=\"" + "mail" + "to:" + $(this).data("id") + "@" + $(this).data("server") + "\">" + '<span class="fa fa-envelope" aria-hidden="true"></span>' + "</a>");
    }
);
});





(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='https://www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X','auto');ga('send','pageview');

*/