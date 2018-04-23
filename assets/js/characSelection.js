let characSelection = {
    preload: function preload() {
    },
    create: function create() {
        white_background = this.add.image(400,0,"white_background");
        white_background.scaleX = 4;
        white_background.scaleY = 4;

        for(let i = 0; i < 3; i++){
            let character = addSprite(
                this, 
                screenWidth(0.3 + (0.2 * i)), 
                screenHeight(0.8),
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
