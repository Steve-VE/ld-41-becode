let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let upperCards = new Phaser.Game(config);
function preload() {
    this.load.image("logo","assets/pics/upperLogo.jpg");
}
function create () {
    let logoDiplay = this.add.sprite(80, 0, 'logo');
}
function update () {

}
