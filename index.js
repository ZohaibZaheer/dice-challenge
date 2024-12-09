var randomNo1 = Math.floor(Math.random()*6) + 1; //number 1-6
var randomDiceImage = "dice" + randomNo1 + ".png"; //dice.1 - dice.6
var randomImageSource = "images/" + randomDiceImage; //images/dice1 - //images/dice6
var image1 = document.querySelectorAll("img")[0]; //select the img first img tag
image1.setAttribute("src", randomImageSource); //change the source


var randomNo2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNo2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);


if (randomNo1 > randomNo2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(randomNo2 > randomNo1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else{
    document.querySelector("h1").innerHTML = "Draw";
}



