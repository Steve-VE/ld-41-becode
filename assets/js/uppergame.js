let uppergame = {
    preload: function preload () {
        this.load.image("backgroundArena", "assets/pics/backgroundArena.png");
        this.load.image("logo","assets/pics/upperLogo.jpg");
        this.load.spritesheet(
        'zombixel',
        'assets/pics/zombixel_spritesheet.png',
        { frameWidth: 64, frameHeight: 64 }
    );
        this.load.spritesheet('zanersky', 'assets/pics/zanersky_spritesheet.png',
        { frameWidth: 64, frameHeight: 64 });
    },
    create: function create () {
        
        // let backgroundArena = this.add.image(400,130, "backgroundArena");
        // backgroundArena.scaleX = 0.45;
        // backgroundArena.scaleY = 0.35;
        character = this.add.sprite(screenWidth(0.45), screenHeight(0.865), 'zombixel');
        characterReverse = this.add.sprite(screenWidth(0.55), screenHeight(0.865), 'zanersky');
        characterReverse.scaleX = -1;
        character.anims.play('damage');
        characterReverse.anims.play('zanpunch');
    },
    update: function update () {

    }
};