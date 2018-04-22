let bootState = {
    preload : function preload () {
        this.load.image("logo","assets/pics/upperLogo.jpg");
        this.load.spritesheet(
        'zombixel',
        'assets/pics/zombixel_spritesheet.png',
        { frameWidth: 64, frameHeight: 64 }
    );
    },
    create : function create () {
        let logoDisplay = this.add.image(screenWidth() / 2, screenHeight() / 2, 'logo');
        logoDisplay.scaleX = 0.5;
        logoDisplay.scaleY = 0.5;

        // Création des animations
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('zombixel', { start: 0, end: 1 }),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'punch',
            // frames: this.anims.generateFrameNumbers('zombixel', { start: 2, end: 2 }),
            frames: [ {key: 'zombixel', frame: 1}, {key: 'zombixel', frame: 2} ],
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'kick',
            frames: [ {key: 'zombixel', frame: 1}, {key: 'zombixel', frame: 3} ],
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'block',
            frames: [ {key: 'zombixel', frame: 1}, {key: 'zombixel', frame: 4} ],
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'damage',
            frames: [ {key: 'zombixel', frame: 1}, {key: 'zombixel', frame: 5} ],
            frameRate: 4,
            repeat: -1
        });

        // character = this.add.sprite(50, 50, 'zombixel');
        // character = this.add.sprite(screenWidth() * 0.33, screenHeight() * 0.7, 'zombixel');
        // character.anims.play('punch');
        // character2 = this.add.sprite(screenWidth() * 0.5, screenHeight() * 0.7, 'zombixel');
        // character2.anims.play('idle');
        // character3 = this.add.sprite(screenWidth() * 0.66, screenHeight() * 0.7, 'zombixel');
        // character3.anims.play('damage');
    },
    update : function update () {

    }
};