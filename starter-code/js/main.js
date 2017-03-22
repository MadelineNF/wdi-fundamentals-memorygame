console.log("JS file is connected to HTML! Woo!");

var cardOne = "Queen"; cardTwo = "King"; cardThree = "Queen"; cardFour = "King";
var x;
var cardFun;
cardFun = function () {
    for (var i = 0; i < 4; i++){
       var creatEl = document.createElement("div");
        creatEl.className = "card";
        document.querySelector('#game-board').appendChild(creatEl);
    }
};
x = document.getElementById("game-board");

cardFun();
/*if (cardFour == cardTwo) {
    window.alert("You found a match!");
} else{
    window.alert("Try again");
}*/
