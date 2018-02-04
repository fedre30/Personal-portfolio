
//MAIL

const mail = document.querySelector(".mail_botprotection");
const animoji = document.querySelector('.animoji_mail');
const contactMe = document.querySelector('.contact_mail');

mail.href = "mail" + "to:" + mail.dataset.id + "@" + mail.dataset.server;
animoji.href = "mail" + "to:" + mail.dataset.id + "@" + mail.dataset.server;
contactMe.href = "mail" + "to:" + mail.dataset.id + "@" + mail.dataset.server;





