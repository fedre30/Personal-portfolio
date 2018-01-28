
//MAIL

const mail = document.querySelector(".mail_botprotection");
const animoji = document.querySelector('.animoji_mail');
const contactMe = document.querySelector('.contact_mail');

mail.innerHTML = "<a href=\"" + "mail" + "to:" + mail.dataset.id + "@" + mail.dataset.server + "\">" + '<img src="../public/img/mail.svg" alt="mail">' + "</a>";

animoji.innerHTML = "<a href=\"" + "mail" + "to:" + mail.dataset.id + "@" + mail.dataset.server + "\">" + '<img src="../public/img/Animoji.gif" alt="animoji">' + "</a>";

contactMe.innerHTML = "<a href=\"" + "mail" + "to:" + mail.dataset.id + "@" + mail.dataset.server + "\">" + '<span class="highlight">contact me</span>' + "</a>";






