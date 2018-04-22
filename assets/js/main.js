let config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    pixelArt: true,
    zoom: 2
};

let upperCards = new Phaser.Game(config);
upperCards.scene.add("bootState", bootState);
// upperCards.scene.start("bootState");
upperCards.scene.add("menu", menuOption);
upperCards.scene.add("uppergame", uppergame);
upperCards.scene.add("characSelection", characSelection);
upperCards.scene.start("bootState");
