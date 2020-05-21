var score = document.querySelector(".score");
var message = document.querySelector(".message");
var btn = document.querySelectorAll("button");
var winner = [0,0];
for(var i =0; i< btn.length; i++)
{
    btn[i].addEventListener("click", playGame); 
}

function playGame(e)
{
    var playerSelection = e.target.innerText;
    var computerSelection  = Math.random();
    var output="";
    if(computerSelection < 0.34)
    {
        computerSelection="Rock";
    }
    else if(computerSelection <= 0.67)
    {
        computerSelection = "Paper";
    }
    else{
        computerSelection="Scissors";
    }
    console.log(computerSelection);
    console.log(playerSelection, computerSelection);
    var result = CheckWinner(playerSelection, computerSelection);
    console.log(result);
    if(result=="Player"){
        result+= "wins!";
        winner[0]++;
    }
    else if(result == "Computer")
    {
        result += " Win!";
        winner[1]++;
    }
    score.innerHTML= "Player 1{"+winner[0]+"] Player 2["+winner[1]+"]";
}
function CheckWinner(pl, o)
{
    if(pl === o)
    {
        return "Draw";
    }

    if(pl ==="Rock")
    {
        if(o=== "Paper")
        {
            return "Computer";
        }
        else
        {
            return "Player";
        }
    }
    if(pl === "Paper")
    {
        if( o === "Scissors")
        {
            return "Computer";
        }
        else
        {
            return "Player";
        }
    }
    if(pl == "Scissors")
    {
        if(o==="Rock"){
            return "Computer";
        }
        else
        {
            return "Player";
        }
    }
}