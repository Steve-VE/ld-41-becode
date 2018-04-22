class Deck{
    constructor(){
        this.cardPool = [];
    }

    add(singleCard){
        this.cardPool.push(singleCard);
    }

    get(cardIndex){
           return this.cardPool[cardIndex];
    }

    draw(){
        let randIndex = Math.floor(Math.random(this.cardPool.length));
        let newCard = this.cardPool.splice(randIndex, 1);
        return newCard[0];
    }

    shuffle(c_cardPool = this.cardPool) {
        for (let i = c_cardPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [c_cardPool[i], c_cardPool[j]] = [c_cardPool[j], c_cardPool[i]];
        }
        this.cardPool = c_cardPool;
    }

    static getExampleDeck(){
        let exampleDeck = new Deck();

        for(let i = 0; i < 6; i++){ // Conception d'un deck de test (6 fois chaque flèches + 8 fois poigns/pieds)
            let nbre = 6;

            if(i >= 4){
                nbre = 8;
            }

            for(nbre; nbre > 0; nbre--){
                exampleDeck.add(cards[i]);
            }
        }

        return exampleDeck;
    }

    static getCopyOf(srcDeck){
        let copyDeck = new Deck();

        for(let i = 0; i < srcDeck.cardPool.length; i++){
            copyDeck.add( srcDeck.get(i) );
        }
        copyDeck.shuffle();
        return copyDeck;
    }
}