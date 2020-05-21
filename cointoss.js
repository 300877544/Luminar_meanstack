var coinArray = ["Head", "Tail"];
var score = [0,0];
var m = document.querySelector(".message");
var btn = document.querySelectorAll("button");
for(var i=0;i<btn.length; i++){
    btn[i].addEventListener("click", CoinToss);

}
function CoinToss(e)
{
    var playerGuess = e.target.innerText;
    var comp = Math.floor(Math.random()*2);
    var computerGuess = coinArray[comp];
    var output;
    if(playerGuess==computerGuess)
    {
        output="Player wins";
        score[0]++;
    }
    else
    {
        output="Computer wins";
        score[1]++;
    }
    m.innerHTML= output + "<br>" + " Player " + score[0] + "Computer" + score[1];
}