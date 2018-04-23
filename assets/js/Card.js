class Card{
    constructor(p_name, p_img, p_force, p_speed, p_text){

        this.name = p_name;
        this.force = p_force;
        this.speed = p_speed;
        this.img = p_img;
        this.text = p_text;
        this.selected = false;
    }

    addSprite(scene){
        let card = scene.add.sprite(60, 80, 'cards');
        card.anims.play('cards-' + this.name);
        return card;
    }
}


let cards = {
    0: new Card("left", 1, 2, "Input Left"),
    left: this[0],
    1: new Card("up", 1, 2, "Input Up"),
    up: this[1],
    2: new Card("right", 1, 2, "Input Right"),
    right: this[2],
    3: new Card("down", 1, 2, "Input Down"),
    down: this[3],
    4: new Card("punch", 1, 2, "Punch !"),
    punch: this[4],
    5: new Card("kick", 1, 2, "Kick !"),
    kick: this[5]
};

console.log(cards[0]);
