
function renderPokerCard(card){
    let cardCode = card.value + card.suit

    return `<img src="cards/${cardCode}.png" alt="Card ${cardCode}" style="width:120px"/>`
}

function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
   var cardsArray = pokerHand.map(renderPokerCard)
   var fullHand = cardsArray.join('')
   
   
    return `
        <div class="text-center mt-5">
            <code>${fullHand}</code>
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}