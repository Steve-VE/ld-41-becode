let bootState = {
    preload : function preload () {
        // Load IMAGES
        this.load.image("logo","assets/pics/upperLogo.png");
        this.load.image("white_background", "assets/pics/white.png");

        // Load SPRITESHEET
        this.load.spritesheet(
            'zombixel',
            'assets/pics/zombixel_spritesheet.png',
            { frameWidth: 64, frameHeight: 64 }
        );
        this.load.spritesheet(
            'zanersky', 
            'assets/pics/zanersky_spritesheet.png',
            { frameWidth: 64, frameHeight: 64 }
        );
        this.load.spritesheet(
            'thanatalys', 
            'assets/pics/thanatalys_spritesheet.png',
            { frameWidth: 70, frameHeight: 70 }
        );
        this.load.spritesheet(
            "menu",
            "assets/pics/start_menu.png",
            { frameWidth: 648, frameHeight: 250 }
        );
        // Découpe des spritesheets
       


        // Load AUDIO
        this.load.audio('menuTheme', 'assets/audio/menuTheme.wav');
    },
    create : function create () {
        // Création des animations

        let charactersName = ['zombixel', 'zanersky', 'thanatalys'];
        let animations = [
            {
                key: 'idle',
                frames: {start: 0, end: 1},
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'punch',
                frames: 2
            },
            {
                key: 'kick',
                frames: 3
            },
            {
                key: 'block',
                frames: 4
            },
            {
                key: 'damage',
                frames: 5
            }
        ];

        for(let i = 0; i < charactersName.length; i++){
            let currentCharacter = charactersName[i];
            console.log("-- Character : " + currentCharacter);
            
            for(let j = 0; j < animations.length; j++){
                let currentAnimation = animations[j];
                console.log("-- Animations : " + currentAnimation.key);
                let animationName = currentCharacter + "-" + currentAnimation.key;
                console.log("\t-- " + animationName);

                let animationData = null;

                if(typeof(currentAnimation.frames) == "object"){

                    animationData = this.anims.create({
                        key: animationName,
                        frames: this.anims.generateFrameNumbers( currentCharacter, { 
                            start: currentAnimation.frames.start, 
                            end: currentAnimation.frames.end 
                        }),
                        frameRate: 4,
                        repeat: currentAnimation.repeat
                    });

                    console.log(currentAnimation.key);
                } 
                else{
                    animationData = this.anims.create({
                        key: animationName,
                        frames: [{key: currentCharacter, frame: currentAnimation.frames}],
                        frameRate: 4
                    });
                }
            }
        }
        let backBoot = this.add.image(400,0,"white_background");
        backBoot.scaleX = 4;
        backBoot.scaleY = 4;
        let logoBoot = this.add.image(200,112,"logo");
        logoBoot.scaleX = 0.3;
        logoBoot.scaleY = 0.3;
        character = this.add.sprite(screenWidth(0.3), screenHeight(0.8), 'zombixel');
        character.displayOriginY = character.displayHeight;
        character.anims.play('zombixel-idle');
        character2 = this.add.sprite(screenWidth(0.5), screenHeight(0.8), 'zanersky');
        character2.displayOriginY = character2.displayHeight;
        character2.anims.play('zanersky-idle');
        character3 = this.add.sprite(screenWidth(0.7), screenHeight(0.8), 'thanatalys');
        character3.displayOriginY = character3.displayHeight;
        character3.anims.play('thanatalys-idle');

        // bootTheme = this.sound.add("menuTheme");
        // bootTheme.play();
        // bootTheme.volume = 0.03;
        // timedEvent = this.time.addEvent({delay: 5000, callback: loadMenu, callbackScope: this});
        timedEvent = this.time.addEvent({delay: 2000, callback: loadMenu, callbackScope: this});
        function loadMenu () {
            upperCards.scene.start("menu");
        }

    },  
    update : function update () {

    }
};
