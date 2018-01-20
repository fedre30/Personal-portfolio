<!-- MENU -->

<div class="menuContainer">
    <nav class="menu">
        <div class="menu-item menuIntroduction" data-tooltip-id="#menuIntro">
            <span class="introLabel" id="menuIntro">Federica</span>
        </div>

        <?php
        foreach($projects as $project){ ?>

            <div class="menu-item menuProject<?=$project['id']?>" data-tooltip-id="#menu<?=$project['id']?>">
                <span class="introLabel" id="menu<?=$project['id']?>"><?=$project['name']?></span>
            </div>

        <?php }
        ?>


        <div class="menu-item menuWorkflow" data-tooltip-id="#menuWorkflow">
            <span class="introLabel"  id="menuWorkflow">Workflow</span>
        </div>
        <div class="menu-item menuAbout" data-tooltip-id="#menuAbout">
            <span class="introLabel" id="menuAbout">About</span>
        </div>
    </nav>
</div>
