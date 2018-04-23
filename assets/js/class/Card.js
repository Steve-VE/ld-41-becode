class Card{
    constructor(p_name, p_force, p_speed, p_text){

        this.name = p_name;
        this.strength = p_force;
        this.speed = p_speed;
        this.text = p_text;

        this.selected = false;  // La carte a t-elle été sélectionnée par un joueur ?
        this.toDisplay = false; // Faut-il afficher la carte ?
        
        this.owner = null;
        this.sprite = null;

        this.originx = 0;
        this.originy = 0;
        this.shiftx = 0;
        this.shifty = 0;
        this.targetx = 0;
        this.targety = 0;
        this.speedx = 0;
        this.speedy = 0;
    }

    addSprite(scene, px, py){
        this.toDisplay = true;
        this.sprite = scene.add.sprite(px, py, 'cards');
        // this.sprite = scene.create(px, py, 'cards');
        this.originx = px;
        this.originy = py;

        this.sprite.anims.play('cards-' + this.name);
        this.sprite.setInteractive();

        let parent = this;
        this.sprite.on('pointerdown', function(){
            parent.selected = !parent.selected;
        });
    }

    setDepth(p_depth){
        if(this.sprite != null){
            this.sprite.setDepth( p_depth );
        }
    }
    
    destroy(){
        if(this.sprite != null){
            this.sprite.destroy();
        }
    }


    update(){
        if(this.toDisplay){
            if(this.selected && this.shifty < 20){
                this.shifty += 2;
            }
            else if(!this.selected && this.shifty > 0){
                this.shifty -= 2;
            }
            
            if(this.originx < this.targetx){
                this.originx += this.speedx;
            }
            else if(this.originx > this.targetx){
                this.originx -= this.speedx;
            }
            if(this.originy < this.targety){
                this.originy += this.speedy;
            }
            else if(this.originy > this.targety){
                this.originy -= this.speedy;
            }

            if(Math.abs(this.originx - this.targetx) < 2){
                this.originx = this.targetx;
            }
            if(Math.abs(this.originy - this.targety) < 2){
                this.originy = this.targety;
            }

            this.sprite.x = this.originx + this.shiftx;
            this.sprite.y = this.originy + this.shifty;
        }
    }

    defineTarget(px, py){
        this.targetx = px;
        this.targety = py;

        this.speedx = Math.abs(this.targetx - this.originx) / 30;
        this.speedy = Math.abs(this.targety - this.originy) / 30;
    }

    copy(){ // Retourne une nouvelle copie de la carte
        let newCard = new Card(this.name, this.strength, this.speed, this.text);
        return newCard;
    }
}

// Définition des différentes types de cartes que comprend le jeu
let cards = {
    0: new Card("left", 1, 2, "Input Left"),
    1: new Card("up", 1, 2, "Input Up"),
    2: new Card("right", 1, 2, "Input Right"),
    3: new Card("down", 1, 2, "Input Down"),
    4: new Card("punch", 3, 2, "Punch !"),
    5: new Card("kick", 3, 2, "Kick !")
};
// Clef nommé correspondant aux index...
cards.left = cards[0];
cards.up = cards[1];
cards.right = cards[2];
cards.down = cards[3];
cards.punch = cards[4];
cards.kick = cards[5];