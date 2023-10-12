var randomNumber1 = Math.floor(Math.random()*6)+1;
var s = './images/dice'+randomNumber1+'.png';
document.querySelector(".img1").setAttribute("src",s);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var st = "./images/dice" + randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",st);
if(randomNumber1 > randomNumber2) document.querySelector("h1").textContent = "Player 1 Wins";
else if(randomNumber1 < randomNumber2)document.querySelector("h1").textContent = "Player 2 wins";
else document.querySelector("h1").textContent = "Draw!";

