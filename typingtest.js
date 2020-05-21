var wording = ["Do you like JavaScript as much I do", 
"Hope you are having fun this is a simple game you can make", 
"Source code is included so you can create your own version of this challenge."];
var message = document.querySelector(".message");
var playText = document.querySelector("textarea");
var btn = document.querySelector("button");
var startTime, endTime;
btn.addEventListener("click",function () {
    console.log(this.innerText);
    if(this.innerText=="Start"){
        playText.disabled=false;
        playGame();
    }
    else if(this.innerText == "Done"){
        playText.disabled = true;
        btn.innerText= "Start";
        endPlay();
    }
})
function wordCounter(strWords) {
    var response = strWords.split(" ").length;
    console.log(response);
    return response;
}
function endPlay() {
    var date = new Date();
    endTime = date.getTime();
    var totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);
    var str = playText.value;
    var wordCount = wordCounter(str);
    var speed = Math.round((wordCount/totalTime)*60);
    var finalMessage = "You typed at " + speed + " words per minute";
    if(str != message.innerText){
        finalMessage += "<br> There are some errors in wording";
    }
    message.innerHTML=finalMessage;
}
function playGame(){
    var randomNum = Math.floor(Math.random()*wording.length);
    message.innerText= wording[randomNum];
    var date =new Date();
    startTime = date.getTime();
    console.log(startTime);
    btn.innerText="Done";

}

function compareWords(str1,str2) {
    var word1 = str1.split(" ");
    var word2 = str2.split(" ");
    word1.forEach(function (item) {
        console.log(item);
    })
}