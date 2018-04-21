let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600
}

let upperCards = new Phaser.Game(config);
upperCards.scene.add("bootState", bootState);
upperCards.scene.start("bootState");
// uppercards.scene.add("menu", menu);
// upperCards.scene.start("menu");
