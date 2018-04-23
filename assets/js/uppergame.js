let debugState = true;

let uppergame = {
    preload: function preload () {
        this.load.image("backgroundArena", "assets/pics/backgroundArena.png");

        this.player = new Player(selectedCharacter);

        let characterPool = ["zombixel", "zanersky", "thanatalys"];
        // let characterPool = ["zombixel", "zombixel", "zombixel"];
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
                if(this.opponent.selectedCard.length == 0){
                    this.opponent.choseSomethingToPlay();
                }

                if(this.player.selectedCard.length >= 1 && this.opponent.selectedCard.length >= 1){
                // if(this.player.selectedCard.length > 1){
                    this.state++;
                }
            }
            else if(this.state == 2){ // Traitement des infos
                this.state++;
            }
            else if(this.state == 3){ // On exécute les animations + calcul des dégâts
                this.opponent.lifepoint -= this.player.attack.strength;
                this.player.lifepoint -= this.opponent.attack.strength; 
                this.state++;
            }

            if(this.state > 3){
                this.state = 0;
            }
            console.log("- ETAPE : " + this.state);
        };
    },
    create: function create () {
        if (selectedCharacter == "thanatalys") {
            backgroundArena = this.add.image(200,220, "thanaBackground");
            backgroundArena.scaleX = 0.49;
            backgroundArena.scaleY = 0.49;
        }
        else if (selectedCharacter == "zombixel") {
            backgroundArena = this.add.image(200,220, "zombiBackground");
            backgroundArena.scaleX = 0.49;
            backgroundArena.scaleY = 0.49;
        }
        else if (selectedCharacter == "zanersky") {
            backgroundArena = this.add.image(200,250, "zanBackground");
            backgroundArena.scaleX = 0.49;
            backgroundArena.scaleY = 0.49;
        }

        this.playerCharacter = addSprite(this, screenWidth(0.42), screenHeight(0.97), selectedCharacter, "-idle");
        this.IACharacter = addSprite(this, screenWidth(0.58), screenHeight(0.97), this.opponent.name, "-idle");
        this.IACharacter.scaleX = -1;

        //Référence à la scene actuel, pour pouvoir la cibler là où ce n'est pas possible à l'aide d'un this
        parent = this;
        
        confirmButton = this.add.sprite(screenWidth(0.85), screenHeight(0.33), 'confirmAttack').setInteractive();
        confirmButton.anims.play('confirmAttack-buttonUp');
        confirmButton.name = "confirmButton";
        // confirmButton.setTint("0xaaaaaa");

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
            let playerName = this.player.name;
            let opponentName = this.opponent.name;
            let gotoNext = [false, false];

            if(this.player.animationQueue.length > 0 && this.player.animationQueue[0] != "undefined"){
                if(this.playerCharacter.anims.currentAnim.key == playerName + "-idle"){
                    this.playerCharacter.anims.play(playerName + this.player.animationQueue[0]);
                    this.player.animationQueue.splice(0, 1);
                    
                    if(debugState){
                        this.playerCharacter.on('animationcomplete', function(){
                            this.anims.play(playerName + "-idle");
                            debugState = false;
                        });
                    }
                }
            }
            else{
                gotoNext[0] = true;
            }

            if(this.opponent.animationQueue.length > 0 && this.opponent.animationQueue[0] != "undefined"){
                if(this.IACharacter.anims.currentAnim.key == opponentName + "-idle"){
                    this.IACharacter.anims.play(opponentName + this.opponent.animationQueue[0]);
                    this.opponent.animationQueue.splice(0, 1);
                    
                    if(debugState){
                        this.IACharacter.on('animationcomplete', function(){
                            this.anims.play(opponentName + "-idle");
                            debugState = false;
                        });
                    }
                }
            }
            else{
                gotoNext[1] = true;
            }

            if(gotoNext[0] && gotoNext[1]){
                this.nextState();
            }
        }

        this.player.update(this);
        this.opponent.update(this);
    }
};
