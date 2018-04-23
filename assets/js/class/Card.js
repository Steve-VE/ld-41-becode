class Card{
    constructor(p_name, p_img, p_force, p_speed, p_text){

        this.name = p_name;
        this.force = p_force;
        this.speed = p_speed;
        this.img = p_img;
        this.text = p_text;
    }

    addSprite(scene){
        let card = scene.add.sprite(60, 80, 'cards');
        card.anims.play('cards-' + this.name);
        return card;
    }
}

let cards = {
    0: new Card("left", 1, 2, "Input Left"),
    1: new Card("up", 1, 2, "Input Up"),
    2: new Card("right", 1, 2, "Input Right"),
    3: new Card("down", 1, 2, "Input Down"),
    4: new Card("punch", 1, 2, "Punch !"),
    5: new Card("kick", 1, 2, "Kick !")
};

cards.left = cards[0];
cards.up = cards[1];
cards.right = cards[2];
cards.down = cards[3];
cards.punch = cards[4];
cards.kick = cards[5];