var btn = document.querySelector("button");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var output = document.querySelector("#output");
btn.addEventListener("click", function(){
    var rolls = [roll(6), roll(6)];
    var temp;
    if(rolls[0] == rolls[1])
{
    temp="its draw";

}   
else if(rolls[0] > rolls[1]){
    temp="Player 1 wins";
}
else{
    temp="Player 2 wins";
}
output.innerHTML=temp;
console.log(rolls);
player1.innerHTML=rolls[0];
player2.innerHTML=rolls[1];
})
function roll(num)
{
    var rnumber = Math.floor(Math.random()*num) + 1;
    var n = 9855 + rnumber;
    var char = "&#"+n+";";
    return rnumber + " " + char;
}