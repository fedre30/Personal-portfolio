<!--PROJECTS -->

<section class="projects scrollSection">
    <div class="sectionTitleProjects">
        <img class="sectionImage" src="img/icon_star.png" alt="star">
        <h3>Projects</h3>
    </div>

    <?php
        foreach ($projects as $index => $project) {
    ?>
    <section class="project-<?=$index+1?> scrollSection" id="<?= $project['id'] ?>">
        <?php if ($index % 2 == 0) { ?>
            <div class="rectangle-1"></div>

            <div class="video">
                <video class="videoPlayer" autoplay muted loop>
                    <img src="<?= $project['image'] ?>" alt="mockup">
                    <source src="<?= $project['video'] ?>.vp8" type="video/vp8" />
                    <source src="<?= $project['video'] ?>.mp4" type="video/mp4" />
                </video>
            </div>

            <h3 class="projectTitle"><?=$project['name']?></h3>
            <div class="tagsContainer">
                <?php foreach ($project['tags'] as $tag){ ?>
                    <div class="tag">#<?= $tag ?></div>
                <?php } ?>
            </div>

            <p class="projectParagraph">
                <?= $project['description'] ?>
            </p>

            <div class="linkContainer">
                <img class="linkImage" src="<?= $project['logoLink'] ?>">
                <a class="linkTag" href="<?= $project['link'] ?>" target="_blank"><?= $project['linkCatch'] ?></a>
            </div>
        <?php } else { ?>
            <div class="projectShowcase">
                <div class="rectangle-2"></div>

                <div class="video-2">
                    <video class="videoPlayer" autoplay muted loop>
                        <img src="<?= $project['image'] ?>" alt="mockup">
                        <source src="<?= $project['video'] ?>.vp8" type="video/vp8" />
                        <source src="<?= $project['video'] ?>.mp4" type="video/mp4" />
                    </video>
                </div>


                <h3 class="projectTitle"><?=$project['name']?></h3>
                <div class="tagsContainer2">
                    <?php foreach ($project['tags'] as $tag){ ?>
                        <div class="tag">#<?= $tag ?></div>
                    <?php } ?>
                </div>

                <p class="projectParagraph2">
                    <?= $project['description'] ?>
                </p>

                <div class="linkContainer-2">
                    <img class="linkImage-2" src="<?= $project['logoLink'] ?>">
                    <a class="linkTag-2" href="<?= $project['link'] ?>" target="_blank"><?= $project['linkCatch'] ?></a>
                </div>
            </div>
        <?php } ?>
    </section>
    <?php
        }
    ?>
</section>


