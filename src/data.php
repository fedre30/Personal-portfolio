<?php

$headtitle = 'Federica Alfano - Creative Web developer';
$title = 'Federica Alfano';
$profession = 'Creative Web developer';


//PROJECTS

$projects = [
    [
        'name' => 'Fanhub',
        'id' => 'Fanhub',
        'tags' => ['Team Project', 'Javascript', 'Node.js'],
        'description' => 'A Fan Films’ streaming Website created during an intensive week at HETIC (Web School).<br>The main purpose of the platform was building a solid community of Fan Films and giving the opportunity to users to upload their own film.<br>I coded some Front-end features in Javascript and the upload film section in Node.JS.',
        'video' => 'video/fanhub',
        'videoId' => 'fH3dwwi6V4w',
        'image' => 'img/mockup_fanhub.jpg',
        'logoLink' => 'img/github_dark.svg',
        'link' => 'https://github.com/fedre30/Fanhub',
        'linkCatch' => 'See code'

    ],

    [
        'name' => 'Jelly Dodge',
        'id' => 'Jelly',
        'tags' => ['Team Project', 'Javascript'],
        'description' => 'Brick game created during a sleepless night at HETIC. We were a team composed by three designers and two JS developers.<br> Gameplay was coded in Javascript using Oriented Object Programmation.<br>All graphic elements are implemented using Canvas API. ',
        'video' => 'video/jelly_dodge',
        'videoId' => 'rKEjLRAh_Q4',
        'image' => 'img/mockup_jellydodge.jpg',
        'logoLink' => 'img/github_dark.svg',
        'link' => 'https://github.com/fedre30/Jelly-Dodge',
        'linkCatch' => 'See code'


    ],

    [
        'name' => 'Nespresso',
        'id' => 'Nespresso',
        'tags' => ['Solo Project', 'UX/UI'],
        'description' => 'UX Design project that consists on improving User Experience of Nespresso Website.<br>As current Nespresso website appears to be dark and messy, I deliberately chose to light design up and simplify interactions within the website. Wireframe was created on Sketch and protoyped on InVision.',
        'video' => 'video/nespresso',
        'videoId' => 'HPe67ivNygA',
        'image' => 'img/mockup_nespresso.jpg',
        'logoLink' => 'img/invision.svg',
        'link' => 'https://invis.io/WYENGG0GQ',
        'linkCatch' => 'See Prototype'

    ],
	
];

//WORKFLOW

$phases = [
    [
        'title' => '1 Problem Prediction',
        'id' => '1',
        'text' => [
            [
                'type' => 'text',
                'content' => 'The real challenge in webdesign is not solving a problem but finding a
                    strategy for an ',
            ],
            [
                'type' => 'span',
                'content' => 'issue that users don’t know they have yet',
            ],
            [
                'type' => 'text',
                'content' => '. It stands for predicting users’ needs through Data and observation.',
            ],
        ]
    ],

    [
        'title' => '2 Experience Enhancement',
        'id' => '2',
        'text' => [
            [
                'type' => 'text',
                'content' => 'Behind every smart solution, we can find research and analysis : in order to improve User Experience, Webdesigners and developers should build a solid website  structure but also look for',
            ],
            [
                'type' => 'span',
                'content' => 'details that make the difference.',
            ],

        ]
    ],

    [
        'title' => '3 Strategy Sketch',
        'id' => '3',
        'text' => [
            [
                'type' => 'text',
                'content' => 'After research and Data collection, we have all the tools to find ',
            ],
            [
                'type' => 'span',
                'content' => 'a smart solution for users.',
            ],
            [
                'type' => 'text',
                'content' => 'It consists on designing a web product that could represent what average user fancies and expects.',
            ],
        ]
    ],

    [
        'title' => '4 Developed Derivation',
        'id' => '4',
        'text' => [
            [
                'type' => 'text',
                'content' => 'The development of a website, derivated from its design, is the last but not the final phase of this process.  Yes, it’s about coding.  But bringing a project to life means to ',
            ],
            [
                'type' => 'span',
                'content' => 'let it live as long as possible',
            ],

            [
                'type' => 'text',
                'content'=>'through tests, updates, reviews and so on.'
            ]

        ]

    ]
];

//ABOUT

$photo = 'img/federica.jpg';


$paragraphs = [

    [
        [
            'type' => 'text',
            'content' => 'I\'m a 22 years old student at ',
        ],
        [
            'type' => 'span',
            'content' => 'HETIC',
            'class' => 'highlight'
        ],
        [
            'type' => 'text',
            'content' => ', living my dream in Paris as a decadent philosopher ',
        ],
        [
            'type' => 'span',
            'content' => 'aspirant web designer.',
            'class' => 'bold'
        ],

        [
            'type' => 'span',
            'content' => '👩🏻‍💻',
            'class' => 'emoji'
        ],

    ],


    [
        [
            'type' => 'text',
            'content' => 'People may define me as a curious "multi-potentialist": I have many passions that I\'d like to
                    combine in one. Any sort of art really thrills me such as cinema, video-making, photography, dance, and most of all
                    music, which has been part of my life since I was such a cutie tiny girl.
                    At present I can play violin, piano, guitar and ukulele but I mostly enjoy composing songs.',
        ],
    ],



    [
        [
            'type' => 'text',
            'content' => 'Why? Well, composing and all my interests have a thing in common: ',
        ],
        [
            'type' => 'span',
            'content' => 'it\'s all about language learning.',
            'class' => 'bold'
        ],

    ],


    [
        [
            'type' => 'text',
            'content' => 'I\'ve been learning four foreign languages (in addition to my mother tongue) because I love decrypting and
                    manipulating symbols and sounds, in order to communicate.',
        ]
    ],


    [
        [
            'type' => 'text',
            'content' => 'That\'s why logical and computing languages are very challenging to me.',
        ]
    ],
];

