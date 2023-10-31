document.getElementById("btn").addEventListener("click",rollDice);

function rollDice(){var number1=Math.floor(Math.random()*6)+1;
var number2=Math.floor(Math.random()*6)+1;
var imagesource1="./images/"+"dice"+number1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",imagesource1);
var imagesource2="./images/"+"dice"+number2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesource2);
if(number1>number2){
    document.querySelector("h1").innerHTML="🍑 Gandu Gaurav won";
}
else if(number2>number1){
    document.querySelector("h1").innerHTML="🫄Randwa Raushan won";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}}
