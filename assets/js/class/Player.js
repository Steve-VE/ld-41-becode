let id_player_count = 0;

class Player{

    constructor(p_name, p_deck = null){
        this.name = p_name;
        this.characterData = characters[this.name];

        this.lifepoint = this.characterData.lifepoint;
        this.maxLifepoint = this.lifepoint;

        this.getADeck(p_deck);
        this.discardPile = new Deck();

        this.hand = [];
        this.selectedCard = [];

        this.lifebarBack = null;

        this.id = id_player_count++;

        this.attack = {
            strength: 0,
            speed: 0
        };
    }

    needToDraw(){ // Retourne 'true' si le joueur a besoin de piocher
        return (this.hand.length < 7);
    }


    getADeck(p_deck = null){
        if(p_deck == null){
            if(this.characterData != null){
                this.deck = Deck.getCopyOf(this.characterData.deck);
            }
        }
        else{
            this.deck = Deck.getCopyOf(p_deck);
        }
    }

    draw(scene, addSprite = true){ // Pioche une carte
        let newCard = this.deck.draw();

        if(newCard != false){ // Si le joueur a bel et bien tiré une carte de son deck
            this.hand.push( newCard );
            
            if(addSprite){
                let cardIndex = (this.hand.length - 1);
                this.hand[ cardIndex ].addSprite(scene, 0, 0);
                this.hand[ cardIndex ].defineTarget( 34 + (55 * cardIndex), 42);
                this.hand[ cardIndex ].setDepth( this.hand.length );
            }
        }
        else{ // Plus de carte dans le deck du joueur
            loose = true;
        }
    }

    update(scene){
        if(this.liveBar == null){
            // console.log("Bar : " + this.id)
            let posx = (this.id == 0)? 20 : (screenWidth() - 20);
            let posy = screenHeight(0.415);
            let originx;
            
            this.liveBar = {};
            this.liveBar.background = scene.add.sprite(posx, posy, 'lifebar');
            this.liveBar.background.anims.play("lifebar-backLife");
            this.liveBar.background.displayOriginX = 0;
            
            this.liveBar.status = scene.add.sprite(posx, posy, 'lifebar');
            this.liveBar.status.anims.play("lifebar-status");
            this.liveBar.status.displayOriginX = 0;
            
            if(this.id != 0){
                this.liveBar.background.displayOriginX = this.liveBar.background.displayWidth;
                this.liveBar.status.displayOriginX = this.liveBar.status.displayWidth;
            }
        }
        else{
            this.liveBar.status.scaleX = (this.lifepoint * 0.01);
        }

        for(let i = (this.hand.length - 1); i >= 0; i--){
            let singleCard = this.hand[i];
            singleCard.update();
            singleCard.setDepth(i);

            if(singleCard.selected){
                this.selectedCard.push( this.hand.splice(i, 1)[0] );
            }
            else{
                singleCard.defineTarget(34 + (55 * i), 42);
            }
        }
        
        for(let i = (this.selectedCard.length - 1); i >= 0; i--){
            let singleCard = this.selectedCard[i];
            singleCard.update();
            singleCard.setDepth(this.selectedCard.length - i);
            
            if(singleCard.selected == false){
                this.hand.push( this.selectedCard.splice(i, 1)[0] );
            }
            else{
                singleCard.defineTarget(40, 120 + (i * 20));
            }
        }
    }

    prepareAttack(){ // Défini une attaque en fonction des cartes sélectionnées
        let strength = 0;
        let speed = 0;

        for(let i = (this.selectedCard.length - 1); i >= 0; i--){
            let currentCard = this.selectedCard[i];
            strength += currentCard.strength;
            speed += currentCard.speed;

            currentCard.destroy();
            this.selectedCard.splice(i, 1);
        }

        this.attack.strength = strength;
        this.attack.speed = speed;
    }

    drawLifeBar(px, py){
        lifebarPlayer.scaleX = (selectedCharacter.lifePoints * 0.01);
    }


    choseSomethingToPlay(){ // Fonction qui permet de faire prendre une décision au joueur IA
        let wantToPlay = Math.floor(Math.random() * this.hand.length);
        if(wantToPlay < 2){
            wantToPlay++;
        }

        for(let i = 0; i < wantToPlay; i++){
                let randIndex = Math.floor(Math.random() * this.hand.length);
                this.hand[randIndex].selected = true;
                this.selectedCard.push( this.hand.splice(randIndex, 1)[0] );
        }
    }
}
