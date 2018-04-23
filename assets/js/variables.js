let bootTheme;

let deckTest = [];
for(let i = 0; i < 6; i++){ // Conception d'un deck de test (6 fois chaque flèches + 8 fois poigns/pieds)
    let nbre = 6;

    if(i >= 4){
        nbre = 8;
    }

    for(nbre; nbre > 0; nbre--){
        deckTest.push(cards[i]);
    }
}

let selectedCharacter;
let IACharacter;
let lifePoints;

let characters = {
    zombixel: {
        "lifePoints" : 100,
        deck: Deck.getExampleDeck()
    },
    thanatalys: {
        "lifePoints" : 100,
        deck: Deck.getExampleDeck()
    },
    zanersky: {
        "lifePoints" : 100,
        deck: Deck.getExampleDeck()
    }
};
