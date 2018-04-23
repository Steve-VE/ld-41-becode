class Card{
    constructor(p_name, p_force, p_speed, p_text){

        this.name = p_name;
        this.force = p_force;
        this.speed = p_speed;
        this.text = p_text;

        this.selected = false;
        this.sprite = null;

        this.originx = 0;
        this.originy = 0;
        this.shiftx = 0;
        this.shifty = 0;
    }

    addSprite(scene, px, py){
        this.sprite = scene.add.sprite(px, py, 'cards');
        this.originx = px;
        this.originy = py;

        this.sprite.anims.play('cards-' + this.name);
        this.sprite.setInteractive();

        let parent = this;
        this.sprite.on('pointerdown', function(){
            parent.selected = !parent.selected;
        });
    }


    update(){
        if(this.selected && this.shifty < 20){
            this.shifty += 2;
        }
        else if(!this.selected && this.shifty > 0){
            this.shifty -= 2;
        }
        
        this.sprite.x = this.originx + this.shiftx;
        this.sprite.y = this.originy + this.shifty;
    }

    copy(){ // Retourne une nouvelle copie de la carte
        let newCard = new Card(this.name, this.force, this.speed, this.text);
        return newCard;
    }
}

// Définition des différentes types de cartes que comprend le jeu
let cards = {
    0: new Card("left", 1, 2, "Input Left"),
    1: new Card("up", 1, 2, "Input Up"),
    2: new Card("right", 1, 2, "Input Right"),
    3: new Card("down", 1, 2, "Input Down"),
    4: new Card("punch", 1, 2, "Punch !"),
    5: new Card("kick", 1, 2, "Kick !")
};
// Clef nommé correspondant aux index...
cards.left = cards[0];
cards.up = cards[1];
cards.right = cards[2];
cards.down = cards[3];
cards.punch = cards[4];
cards.kick = cards[5];