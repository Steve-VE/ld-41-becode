let uppergame = {
    preload: function preload () {
        this.load.image("backgroundArena", "assets/pics/backgroundArena.png");

        this.player = new Player(selectedCharacter);

        let characterPool = ["zombixel", "zanersky", "thanatalys"];
        let randIndex = Math.floor(Math.random() * 3);
        let randomCharacter = characterPool[randIndex];

        this.opponent = new Player(randomCharacter);

        /** Le state va définir l'étape de jeu :
         *
         *      - 0 : On pioche des cartes et on commence un nouveau tour
         *      - 1 : Les joueurs choississent les cartes à jouer
         *      - 2 : Les cartes sélectionnez sont retirées de la main et mise en zone d'action
         *            On calcule la vitesse et la force des coups
         *      - 3 : Exécution des coups
         */
        this.state = 0;

        this.nextState = () => { // Fonction à appeller lorsque l'on veut passer à la prochaine étape
            if(this.state == 0){ // Phase de pioche
                if(this.player.needToDraw() == false && this.opponent.needToDraw() == false){
                    this.state++;
                }
            }
            else if(this.state == 1){ // Phase de sélection des cartes
                // if(this.player.selectedCard.length > 1 && this.opponent.selectedCard.length > 1){
                if(this.player.selectedCard.length > 1){
                    this.state++;
                }
            }
            else if(this.state == 2){ // Traitement des infos
                this.state++;
            }
            else if(this.state == 3){ // On exécute les animations + calcul des dégâts
                this.opponent.lifepoint -= this.player.attack.strength;
                this.player.lifepoint -= this.opponent.attack.strength;

                console.log(this.player.attack);
                console.log(this.opponent.lifepoint);
                this.state++;
            }

            if(this.state > 3){
                this.state = 0;
            }
            console.log("- ETAPE : " + this.state);
        };
    },
    create: function create () {
        backgroundArena = this.add.image(400, 130, "backgroundArena");
        backgroundArena.scaleX = 0.45;
        backgroundArena.scaleY = 0.35;

        playerCharacter = addSprite(this, screenWidth(0.42), screenHeight(0.97), selectedCharacter, "-idle");
        IACharacter = addSprite(this, screenWidth(0.58), screenHeight(0.97), this.opponent.name, "-idle");
        IACharacter.scaleX = -1;

        //Référence à la scene actuel, pour pouvoir la cibler là où ce n'est pas possible à l'aide d'un this
        parent = this;
     
        
        confirmButton = this.add.sprite(screenWidth(0.45), screenHeight(0.50), 'thanatalys').setInteractive();
        confirmButton.anims.play('thanatalys-damage');
        confirmButton.name = "confirmButton";
        confirmButton.setTint("0xaaaaaa");

        this.input.on('gameobjectdown', function (pointer, gameObject){
            if(gameObject.name == "confirmButton"){
                if(parent.state == 1) {
                    parent.nextState();
                }
            }
        });

        // Gestion camera (TEST)
        this.camera = this.cameras.main.setSize(400, 300);
    },
    update: function update () {
        // lifebarIA.scaleX = (IACharacter.lifePoints * 0.01);
        // lifebarPlayer.scaleX = (selectedCharacter.lifePoints * 0.01);

        if(this.state == 0){ // Pioche
            if(this.player.needToDraw()){
                this.player.draw(this);
            }
            else{
                this.nextState();
            }

            if(this.opponent.needToDraw()){
                this.opponent.draw(this, false);
            }
        }
        else if(this.state == 1){ // Sélection des cartes

        }
        else if(this.state == 2){ // Traitement des infos
            this.player.prepareAttack();
            this.opponent.prepareAttack();
            this.nextState();
        }
        else if(this.state == 3){ // Animation + dégats
            
            this.nextState();
        }

        this.player.update(this);
        this.opponent.update(this);
    }
};
