let config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    pixelArt: true,
    zoom: 2
    // scene: [bootState, menuOption, characSelection, uppergame]
};

let upperCards = new Phaser.Game(config);

upperCards.scene.add("bootState", bootState);
upperCards.scene.add("soundManager", soundManager);
upperCards.scene.add("menu", menuOption);
upperCards.scene.add("characSelection", characSelection);
upperCards.scene.add("uppergame", uppergame);
upperCards.scene.start("bootState");
upperCards.scene.start("soundManager");
