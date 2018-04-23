let characSelection = {
    preload: function preload() {
    },
    create: function create() {
        white_background = this.add.image(200,130,"characBackground");
        white_background.scaleX = 0.46;
        white_background.scaleY = 0.467;

        for(let i = 0; i < 3; i++){
            let character = addSprite(
                this, 
                screenWidth(0.3 + (0.2 * i)), 
                screenHeight(0.9),
                characters[i],
                "-idle"
            );
            character.setInteractive();
            character.on("pointerdown", function() {
                selectedCharacter = characters[i];
                upperCards.scene.sleep("characSelection");
                upperCards.scene.start('uppergame');
            });
        }
    },
    update: function update() {
    }
};
