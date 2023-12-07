const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

let deck = [];

// Function to create and shuffle the deck
function createDeck() {
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ rank, suit });
        }
    }
    deck = shuffle(deck);
}

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to deal cards to players
function dealCards() {
    const player1Hand = deck.slice(0, 26);
    const player2Hand = deck.slice(26);
    return [player1Hand, player2Hand];
}

// Function to compare two cards and determine the winner
function compareCards(card1, card2) {
    const rankValues = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14 };

    const rank1Value = rankValues[card1.rank];
    const rank2Value = rankValues[card2.rank];

    if (rank1Value > rank2Value) {
        return 1;
    } else if (rank1Value < rank2Value) {
        return 2;
    } else {
        return 0;
    }
}

// Function to play the game
function playGame() {
    createDeck();
    const [player1Hand, player2Hand] = dealCards();
    let player1Score = 0;
    let player2Score = 0;

    for (let i = 0; i < 26; i++) {
        console.log(`\nTurn ${i + 1}:`);
        console.log(`Player 1 plays ${player1Hand[i].rank} of ${player1Hand[i].suit}`);
        console.log(`Player 2 plays ${player2Hand[i].rank} of ${player2Hand[i].suit}`);

        const result = compareCards(player1Hand[i], player2Hand[i]);

        if (result === 1) {
            player1Score++;
            console.log('Player 1 wins this round!');
        } else if (result === 2) {
            player2Score++;
            console.log('Player 2 wins this round!');
        } else {
            console.log("It's a tie!");
        }
    }

    console.log('\nGame Over!');
    console.log(`Player 1 score: ${player1Score}`);
    console.log(`Player 2 score: ${player2Score}`);

    if (player1Score > player2Score) {
        console.log('Player 1 wins!');
    } else if (player1Score < player2Score) {
        console.log('Player 2 wins!');
    } else {
        console.log("It's a tie!");
    }
}

// Execute the game
playGame();