let config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    pixelArt: true,
    zoom: 2,
    // backgroundColor: "#f00",
    // scene: {
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
};

let upperCards = new Phaser.Game(config);
upperCards.scene.add("bootState", bootState);
upperCards.scene.start("bootState");
// upperCards.scene.add("menu", menuOption);
// upperCards.scene.start("menu");
