let uppergame = {
    preload: function preload () {
        this.load.image("backgroundArena", "assets/pics/backgroundArena.png");
    },
    create: function create () {
        backgroundArena = this.add.image(400,130, "backgroundArena");
        backgroundArena.scaleX = 0.45;
        backgroundArena.scaleY = 0.35;
        playerCharacter = this.add.sprite(screenWidth(0.45), screenHeight(0.97), selectedCharacter);
        playerCharacter.displayOriginY = character.displayHeight;
        playerCharacter.anims.play(selectedCharacter +'-idle');
        IACharacter = this.add.sprite(screenWidth(0.57), screenHeight(0.97), "thanatalys");
        IACharacter.scaleX = -1;
        IACharacter.displayOriginY = IACharacter.displayHeight;
        IACharacter.anims.play('thanatalys-idle');
        //HealthBar
        playerCharacter.lifePoints;
        IACharacter.lifePoints;
        playerCharacter.lifePoints = remainingPV;



    },
    update: function update () {
        healthBarIA.scaleX = (IACharacter.lifePoints * 0.01);
        healthBarPlayer.scaleX = (playerCharacter.lifePoints * 0.01);

    }
};
