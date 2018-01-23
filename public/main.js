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
        document.querySelector('.project-1'),
        document.querySelector('.project-2'),
        document.querySelector('.project-3'),
        document.querySelector('.workflow'),
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

//MAIL

const mail = document.querySelector(".mail_botprotection");
const animoji = document.querySelector('.animoji_mail');
const contactMe = document.querySelector('.contact_mail');

mail.innerHTML = "<a href=\"" + "mail" + "to:" + mail.dataset.id + "@" + mail.dataset.server + "\">" + '<img src="img/mail.svg" alt="mail">' + "</a>";

animoji.innerHTML = "<a href=\"" + "mail" + "to:" + mail.dataset.id + "@" + mail.dataset.server + "\">" + '<img src="img/Animoji.gif" alt="animoji">' + "</a>";

contactMe.innerHTML = "<a href=\"" + "mail" + "to:" + mail.dataset.id + "@" + mail.dataset.server + "\">" + '<span class="highlight">contact me</span>' + "</a>";

/*

// YOUTUBE


//YOUTUBE PLAYER
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function  setupYoutubePlayer(el, videoId){
    function onReady(evt) {
        evt.target.playVideo();
    }
    function onStateChange(evt) {
        // if(evt.data === YT.PlayerState.ENDED){
        //     player.loadVideoById(videoId);
        // }
    }

    const player = new YT.Player(el, {
        events: { onReady, onStateChange },
        height: 400,
        playerVars: { autoplay: 1, controls: 0, disablekb: 1, enablejsapi: 1, loop: 1, modestbranding: 1, playlist: videoId, rel: 0, showinfo: 0 },
        videoId: videoId,
        width: '100%',
    });
}

function onYouTubeIframeAPIReady() {
    const players = document.querySelectorAll('[data-youtube-player]');

    for(let i = 0; i < players.length; i++){
        const player = players[i];
        setupYoutubePlayer(player, player.dataset.youtubePlayer);
    }
}





*/
