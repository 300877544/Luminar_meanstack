var btn = document.querySelector("button");
var output = document.querySelector(".output");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var dice = [[5], [1,9], [1,3,7,9], [1,3,5,7,9], [1,3,4,6,7,9]];
btn.addEventListener("click", function(){
    var rolls = [roll(6), roll(6)];
    var temp;
    if(rolls[0] == rolls[1]){
        temp = "Draw";
    }
    else if(rolls[0] > rolls[1]){
        temp = "Player 1 wins";
    }
    else{
        temp = "Player 2 wins";
    }
updateOutput(player1,rolls[0]);
updateOutput(player2, rolls[1]);
output.innerHTML=temp;
    var rollDice = roll(6);
    console.log(rollDice);
    var holder = builder(rollDice);
    console.log(output.children[0]);
    if(output.children[0]){
        output.children[0].remove();
    }
    output.appendChild(holder);
})

function builder(num){
    var div = document.createElement("div");
    var dieArray = dice[num-1];
    console.log(dieArray);
    for(var x = 1; x <10; x++){
        var span = document.createElement("div");
        span.setAttribute("class", "dot");
        if(dieArray.includes(x))
{
 span.classList.add("black");
}   
div.appendChild(span);
 }
    div.setAttribute("class","dicer");
    return div;
}

function roll(num)
{
    var rnumber = Math.floor(Math.random()*num) + 1;
    return rnumber;
}