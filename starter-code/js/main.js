console.log("JS file is connected to HTML! Woo!");

var cardOne = "Queen";
cardTwo = "King";
cardThree = "Queen";
cardFour = "King";
var x;
var cardFun;
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var isMatch;
var isTwoCards;
var cardElement;

isTwoCards = function () {
    // add card to array of cards in play
    // 'this' hasn't been covered in this pre-work, but
    // for now, just know it gives you access to the card the user clicked on
    cardsInPlay.push(this.getAttribute('data-card'));

    // if you have two cards in play, check for a match
    if (cardsInPlay.length === 2) {

        // pass the cardsInPlay as an argument to the isMatch function
        isMatch(cardsInPlay);

        // clear cards in play array for your next try
        cardsInPlay = [];

    }
    if(this.getAttribute('data-card') === 'queen'){
        this.innerHTML = '<img src="../starter-code/images/sun.jpg" alt="Sun" />';
    }else{
        this.innerHTML = '<img src="../starter-code/images/death.jpg" alt="Death" />';
    }
};

isMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        window.alert('You found a match!');
        document.getElementsByClassName(cards).innerHTML="";
    } else {
        window.alert('Try again');
        document.getElementsByClassName(cards).innerHTML="";
    }
    
};
cardFun = function () {
    for (var i = 0; i < 4; i++) {
        var creatEl = document.createElement("div");
        creatEl.className = "card";
        document.querySelector('#game-board').appendChild(creatEl);
        creatEl.setAttribute('data-card', cards[i]);
        creatEl.addEventListener('click', isTwoCards);
    }
    
};
x = document.getElementById("game-board");

cardFun();