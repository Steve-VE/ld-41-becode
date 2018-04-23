let uppergame = {
    preload: function preload () {
        this.load.image("backgroundArena", "assets/pics/backgroundArena.png");

        this.playerDeck = null;
        this.IADeck = null;
        this.playerHand = [];
        this.IAHand = [];

        /** Le state va définir l'étape de jeu : 
         * 
         *      - 0 : On pioche des cartes et on commence un nouveau tour
         *      - 1 : Les joueurs choississent les cartes à jouer
         *      - 2 : Les cartes sélectionnez sont retirées de la main et mise en zone d'action
         *            On calcule la vitesse et la force des coups
         *      - 3 : Exécution des coups
         */
        this.state = 0;
        console.log(this);
    },
    create: function create () {
        backgroundArena = this.add.image(400,130, "backgroundArena");
        backgroundArena.scaleX = 0.45;
        backgroundArena.scaleY = 0.35;
        playerCharacter = this.add.sprite(screenWidth(0.45), screenHeight(0.97), selectedCharacter);
        playerCharacter.displayOriginY = character.displayHeight;
        playerCharacter.anims.play(selectedCharacter +'-idle');
        confirmButton = this.add.sprite(screenWidth(0.45), screenHeight(0.50), 'thanatalys').setInteractive();
        confirmButton.anims.play('thanatalys-damage');
        confirmButton.on("pointerdown", function() {});

        // Permet de tirer un personnage au hasard pour l'IA (TEMPORAIRE !!!)
        let characterPool = ["zombixel", "zanersky", "thanatalys"];
        let randIndex = Math.floor(Math.random() * 3);
        let randomCharacter = characterPool[randIndex];

        IACharacter = this.add.sprite(screenWidth(0.57), screenHeight(0.97), randomCharacter);
        IACharacter.scaleX = -1;
        IACharacter.displayOriginY = IACharacter.displayHeight;
        IACharacter.anims.play(randomCharacter + '-idle');
        //HealthBar
        // playerCharacter.lifePoints;
        // IACharacter.lifePoints;
        // playerCharacter.lifePoints = remainingPV;

        // Chargement des decks
        this.playerDeck = Deck.getCopyOf(characters[selectedCharacter].deck);
        this.IADeck = Deck.getCopyOf(characters[randomCharacter].deck);

        let cardSprites = [];
        for(let nbreCard = 0; nbreCard < 7; nbreCard++){
            this.playerHand.push(this.playerDeck.draw());
            this.playerHand[nbreCard].addSprite(this, 34 + (55 * nbreCard), 42);
            // cardSprites[nbreCard] = this.add.sprite(34 + (55 * nbreCard), 42, 'cards' );
            // cardSprites[nbreCard].anims.play('cards-' + this.playerHand[nbreCard].name);
        }
        let cardSelected = [];
        console.log(this.playerHand);

        // Gestion camera
        this.camera = this.cameras.main.setSize(400, 300);
        console.log(this.camera);

    },
    update: function update () {
        // healthBarIA.scaleX = (IACharacter.lifePoints * 0.01);
        // healthBarPlayer.scaleX = (playerCharacter.lifePoints * 0.01);

        for(let i = 0; i < this.playerHand.length; i++){
            this.playerHand[i].update();
        }
    }
};
