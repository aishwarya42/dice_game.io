var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomimagesrc = "images/dice"+randomnumber1+".png";
var randomimage1 = document.querySelectorAll("img")[0];
randomimage1.setAttribute("src",randomimagesrc);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomimagesrc2 = "images/dice"+randomnumber2+".png";
var randomimage2 = document.querySelectorAll("img")[1];
randomimage2.setAttribute("src",randomimagesrc2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wiNS!";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
