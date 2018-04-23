

class Player{

    constructor(p_name, p_deck = null){
        this.name = p_name;
        this.characterData = characters[this.name];

        this.lifepoint = this.characterData.lifepoints;

        this.getADeck(p_deck);

        this.hand = [];
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

    draw(scene){ // Pioche une carte
        let cardIndex = this.hand.length;
        this.hand.push(this.deck.draw());
        this.hand[ cardIndex ].addSprite(scene, 34 + (55 * cardIndex), 42);
    }

    update(){
        for(let i = 0; i < this.hand.length; i++){
            this.hand[i].update();
        }
    }
}