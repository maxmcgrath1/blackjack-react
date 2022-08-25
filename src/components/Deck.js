
const Deck = () => {
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['♣', '♦', '♠', '♥']
    
    let values = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 10,
        'Q': 10,
        'K': 10,
        'A': 11 || 1
    };
    
    let deck = [];

    for (let i = 0; i < ranks.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            let cards = {
                rank: ranks[i],
                suit: suits[j],
                value: values[ranks[i]]
            };
            deck.push(cards)
        }
    }
    return (
        <div>deck</div>
    )
}

Deck();
console.log(Deck)

export default Deck;