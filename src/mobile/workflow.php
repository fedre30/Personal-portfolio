
<!-- WORKFLOW -->

<section class="workflow scrollSection" id="workflow">
    <div class="sectionTitle">
        <img class="sectionImage" src="img/spiral_icon.png" alt="spiral">
        <h3>Workflow Philosophy</h3>
    </div>

    <div class="container workflowSections">
        <div class="row">

            <?php
            foreach ($phases as $index => $phase) {
            ?>

            <div class="phase-<?=$index+1?> three columns">
                <h4 class="phaseTitle"><div class="number"><?=$index+1?></div><?=$phase['title']?></h4>
                <p class="phaseParagraph">
                    <?php  foreach ($phase['text'] as $text){
                        if($text['type'] === 'text') {
                            echo $text['content'];
                        }

                        elseif ($text['type'] === 'span'){ ?>

                            <span class="bold"><?= $text['content'] ?></span>
                        <?php
                        }
                    }?>
                </p>
            </div>
            <?php } ?>

        </div>
    </div>
</section>

