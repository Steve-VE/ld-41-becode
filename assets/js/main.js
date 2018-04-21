let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600
}

let upperCards = new Phaser.Game(config);
// upperCards.scene.add("bootState", bootState);
// upperCards.scene.start("bootState");
upperCards.scene.add("menu", menuOption);
upperCards.scene.start("menu");
