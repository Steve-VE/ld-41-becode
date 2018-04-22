let characSelection = {
    preload: function preload() {
    },
    create: function create() {
        white_background = this.add.image(400,0,"white_background");
        white_background.scaleX = 4;
        white_background.scaleY = 4;

        character = this.add.sprite(screenWidth(0.3), screenHeight(0.8), 'zombixel').setInteractive();
        character.displayOriginY = character.displayHeight;
        character.anims.play('zombixel-idle');

        character2 = this.add.sprite(screenWidth(0.5), screenHeight(0.8), 'zanersky').setInteractive();
        character2.displayOriginY = character2.displayHeight;
        character2.anims.play('zanersky-idle');

        character3 = this.add.sprite(screenWidth(0.7), screenHeight(0.8), 'thanatalys').setInteractive();
        character3.displayOriginY = character3.displayHeight;
        character3.anims.play('thanatalys-idle');

        character.on("pointerdown", function() {
            selectedCharacter = "zombixel";
            upperCards.scene.sleep("characSelection");
            upperCards.scene.start('uppergame');
        });
        character2.on("pointerdown", function() {
            selectedCharacter = "zanersky";
            upperCards.scene.sleep("characSelection");
            upperCards.scene.start('uppergame');
        });
        character3.on("pointerdown", function() {
            selectedCharacter = "thanatalys";
            upperCards.scene.sleep("characSelection");
            upperCards.scene.start('uppergame');
        });
    },
    update: function update() {
    }
};
