<!-- ABOUT  & CONTACTS-->

<section class="about scrollSection" id="about">
    <div class="sectionTitle aboutTitle">
        <img class="sectionImage" src="img/spiral_icon.png" alt="spiral">
        <h3>About</h3>
    </div>

    <div class="bioSection container">
        <div class="row">
            <div class="bioImage six columns"><img class="bioPicture" src="<?= $photo ?>" alt="Federica Alfano"></div>

            <div class="bioText six columns">
                <?php foreach ($paragraphs as $index => $paragraph){ ?>
                    <p class="<?= $index == count($paragraphs) -1 ? 'highlight' : 'bioParagraph' ?>">
                        <?php foreach ($paragraph as $part) {
                            if($part['type'] === 'text'){
                                echo $part['content'];
                            }
                            elseif($part['type'] === 'span'){ ?>
                                <span class="<?= $part['class']?>"><?= $part['content'] ?></span>
                            <?php }
                         } ?>
                    </p>
                <?php } ?>
            </div>
        </div>

    </div>

    <div class="contactContainer">
        <div class="contact"><p class="contactMe"> ~ Feel free to <a href="" class="contact_mail"><span class="highlight">contact me</span></a></p></div>
        <div class="animojiContainer">
            <a class="animoji_mail" href="" ><img src="img/Animoji.gif"></a>
        </div>
    </div>

    <div class="logos">
        <div class="logo-item"><a class="mail_botprotection" data-displayed-id="alfanofederica95" data-id="alfanofederica95+contact" data-server="gmail.com"><img src="img/mail.svg" alt=""></a></div>
        <div class="logo-item"><a href="https://github.com/fedre30" target="_blank"><img src="img/github.svg" alt=""></a></div>
        <div class="logo-item"><a href="https://codepen.io/alfanofederica/" target="_blank"><img src="img/codepen.svg" alt=""></a></div>
        <div class="logo-item"><a href="https://www.linkedin.com/in/federicaalfano/" target="_blank"><img src="img/linkedin.svg" alt=""></a></div>
        <div class="logo-item"><a href="https://dribbble.com/alfanofederica" target="_blank"><img src="img/dribbble-logo.svg" alt="dribble logo"></a></div>
        <div class="logo-item"><a href="img/FedericaAlfano_CV.pdf" target="_blank"><img src="img/resume.svg" alt=""></a></div>
    </div>
    <p class="copyright">©Federica Alfano 2018</p>
</section>
