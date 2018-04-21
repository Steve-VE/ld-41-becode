let config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    pixelArt: true,
    zoom: 2,
    // backgroundColor: "#f00",
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let character;

let upperCards = new Phaser.Game(config);
function preload() {
    this.load.image("logo","assets/pics/upperLogo.jpg");
    this.load.spritesheet(
        'zombixel',
        'assets/pics/zombixel_spritesheet.png',
        { frameWidth: 64, frameHeight: 64 }
    );
}
function create () {
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
        frame: [ {key: 'zombixel', frame: 2} ],
        frameRate: 2
    });
    this.anims.create({
        key: 'kick',
        frame: [ {key: 'zombixel', frame: 3} ],
        frameRate: 2
    });
    this.anims.create({
        key: 'block',
        frame: [ {key: 'zombixel', frame: 4} ],
        frameRate: 2
    });
    this.anims.create({
        key: 'damage',
        frame: [ {key: 'zombixel', frame: 5} ],
        frameRate: 2
    });

    // character = this.add.sprite(50, 50, 'zombixel');
    character = this.add.sprite(screenWidth() / 2, screenHeight() * 0.7, 'zombixel');
    character.anims.play('idle');
}
function update () {
}


function screenWidth(){
    return upperCards.canvas.width;
}
function screenHeight(){
    return upperCards.canvas.height;
}