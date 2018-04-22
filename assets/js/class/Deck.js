class Deck{
    constructor(){
        this.cardPool = [];
    }

    add(singleCard){
        this.cardPool.push(singleCard);
    }

    draw(){
        let randIndex = Math.floor(Math.random(this.cardPool.length));
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
}