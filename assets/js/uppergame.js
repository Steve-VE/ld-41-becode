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
        { frameWidth: 64, frameHeight: 64 })
    },
    create: function create () {
        zombixIdle = this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('zombixel', { start: 0, end: 1 }),
            frameRate: 4,
            repeat: -1
        });
        zombixKick = this.anims.create({
            key: 'kick',
            frames: [ {key: 'zombixel', frame: 1}, {key: 'zombixel', frame: 3} ],
            frameRate: 4,
            repeat: -1
        });
        zombixBlock = this.anims.create({
            key: 'block',
            frames: [ {key: 'zombixel', frame: 1}, {key: 'zombixel', frame: 4} ],
            frameRate: 4,
            repeat: -1
        });
        zombixPunch = this.anims.create({
            key: 'punch',
            // frames: this.anims.generateFrameNumbers('zombixel', { start: 2, end: 2 }),
            frames: [ {key: 'zombixel', frame: 1}, {key: 'zombixel', frame: 2} ],
            frameRate: 4,
            repeat: -1
        });
        zombixDamage = this.anims.create({
            key: 'damage',
            frames: [ {key: 'zombixel', frame: 1}, {key: 'zombixel', frame: 5} ],
            frameRate: 4,
            repeat: -1
        });
        zanIdle = this.anims.create({
            key: 'zanidle',
            frames: this.anims.generateFrameNumbers('zanersky', { start: 0, end: 1 }),
            frameRate: 4,
            repeat: -1
        });
        zanKick = this.anims.create({
            key: 'zankick',
            frames: [ {key: 'zanersky', frame: 1}, {key: 'zanersky', frame: 3} ],
            frameRate: 4,
            repeat: -1
        });
        zanBlock = this.anims.create({
            key: 'zanblock',
            frames: [ {key: 'zanersky', frame: 1}, {key: 'zanersky', frame: 4} ],
            frameRate: 4,
            repeat: -1
        });
        zanPunch = this.anims.create({
            key: 'zanpunch',
            // frames: this.anims.generateFrameNumbers('zombixel', { start: 2, end: 2 }),
            frames: [ {key: 'zanersky', frame: 1}, {key: 'zanersky', frame: 2} ],
            frameRate: 4,
            repeat: -1
        });
        zanDamage = this.anims.create({
            key: 'zandamage',
            frames: [ {key: 'zanersky', frame: 1}, {key: 'zanersky', frame: 5} ],
            frameRate: 4,
            repeat: -1
        });
        let backgroundArena = this.add.image(400,130, "backgroundArena");
        backgroundArena.scaleX = 0.45;
        backgroundArena.scaleY = 0.35;
        character = this.add.sprite(screenWidth() * 0.45, screenHeight() * 0.865, 'zombixel');
        characterReverse = this.add.sprite(screenWidth() * 0.55, screenHeight() * 0.865, 'zanersky');
        characterReverse.scaleX = -1;
        character.anims.play('idle');
        characterReverse.anims.play('zanidle');
    },
    update: function update () {

    }
}
