let bootState = {
    preload : function preload () {
        this.load.image("logo","assets/pics/upperLogo.png");
        this.load.image("bootBackground", "assets/pics/white.png");
        this.load.spritesheet(
            'zombixel',
            'assets/pics/zombixel_spritesheet.png',
            { frameWidth: 64, frameHeight: 64 }
        );
        this.load.spritesheet('zanersky', 'assets/pics/zanersky_spritesheet.png',
        { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('thanatalys', 'assets/pics/thanatalys_spritesheet.png',
        { frameWidth: 64, frameHeight: 64 });
    },
    create : function create () {


        // Création des animations
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('zombixel', { start: 0, end: 1 }),
            frameRate: 4,
            repeat: -1
        });
        zanIdle = this.anims.create({
            key: 'zanidle',
            frames: this.anims.generateFrameNumbers('zanersky', { start: 0, end: 1 }),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'thanidle',
            frames: this.anims.generateFrameNumbers('thanatalys', { start: 0, end: 1 }),
            frameRate: 4,
            repeat: -1
        });


        let backBoot = this.add.image(400,0,"bootBackground");
        backBoot.scaleX = 4;
        backBoot.scaleY = 4;
        let logoBoot = this.add.image(200,112,"logo");
        logoBoot.scaleX = 0.3;
        logoBoot.scaleY = 0.3;
        character = this.add.sprite(screenWidth(0.3), screenHeight(0.7), 'zombixel');
        character.anims.play('idle');
        character2 = this.add.sprite(screenWidth(0.5), screenHeight(0.7), 'zanersky');
        character2.anims.play('zanidle');
        // character3 = this.add.sprite(screenWidth(0.6), screenHeight(0.7), 'thanatalys');
        // character3.anims.play('thanidle');
    },
    update : function update () {

    }
};