var myBlock;
document.addEventListener("DOMContentLoaded", function(){
    console.log('ready');
    myBlock = document.createElement("div");
    myBlock.textContent="Hello World";
    myBlock.style.backgroundColor="red";
    myBlock.style.width="100px";
    myBlock.style.height="100px";
    myBlock.style.color="white";
    myBlock.style.lineHeight="100px";
    myBlock.style.textAlign="center";
    myBlock.style.position="absolute";
    myBlock.style.top="100px";
    myBlock.style.left="150px";
    document.body.appendChild(myBlock);
})
document.addEventListener("keydown", function(e){
    e.preventDefault();
    var keyC = e.keyCode;
    if(keyC === 37) goLeft();
    else if(keyC === 39) goRight();
    else if(keyC === 38) goUp();
    else if(keyC === 40) goDown();
    console.log(e.keyCode);
})
function goLeft() {
    var temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + "px";
}
function goRight() {
    var temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + "px";
}

function goUp() {
   var temp = myBlock.offsetTop;
   temp = temp - 50;
   myBlock.style.top = temp + "px";

}

function goDown() {
    var temp = myBlock.offsetTop;
    temp=temp+50;
    myBlock.style.top = temp + "px";
}