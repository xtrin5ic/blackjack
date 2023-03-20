/*
There is a deck of cards (you must create a structure for this)

All players get dealt two cards. 

If a player gets 21 they have won the game (game over)

If none of the players won, they get to draw cards.

Players can draw cards until they reach or go beyond 21.

Once a player says they do not want to draw more cards, the next player gets to draw. 

When all players have drawn their cards, the "house" gets to draw.

The house can draw cards as long as they have not passed 21 or the sum of the leading player.

If players / house gets the same sum, it is a draw.
 

Finally, a report is an output that sums up the game and the winner.
*/

let cards = []
let cardSum = 0

/*
const cardValues = {
    'suits': ['H', 'D', 'C', 'S'],
    'ranks': ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'],
    'values': {'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,'T': 10,'J': 10,'Q': 10,'K': 10,'A': [1, 11]}
  };
*/

let Blackjack = false
let gameOn = false

function drawCard() {
    let cardValue = Math.floor(Math.random() * 13) + 1

    if (cardValue > 10) {
        return 10
    } else if (cardValue === 1) {
        return 11
    } else {
        return cardValue
    }
}

function renderGame() {

    cardText = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
        cardText += cards[i] + " "
    }

    sumElement.textContent = "Sum : " + cardSum

    if (sum < 21) {
        console.log ("Draw a new card?");

    } else if (sum === 21) {
        console.log ("Blackjack!");
        Blackjack = true;

    } else {
        console.log ("You are out of the game.");
        gameOn = false;
    }
}


function startGame() {
    gameOn = true
    let one = drawCard()
    let two = drawCard()
    cards = [one, two]
    cardSum = one + two
    renderGame()
}

function updateGame() {

    if (Blackjack === false && gameOn === true) {
        let three = drawCard()
        cards.push(three)
        cardSum += three
        renderGame()
    }
}
