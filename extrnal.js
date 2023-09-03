var randomnumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomnumber1 +".png";
var randomImageSou= "images/" + randomDiceImage ;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSou);
var randomnumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomnumber2 +".png";
var randomImageSou= "images/" + randomDiceImage ;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSou);
if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player1 wins"
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player2 wins"
}
else{
    document.querySelector("h1").innerHTML="Draw between both players"
}