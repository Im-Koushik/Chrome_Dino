var ball=document.getElementById("ball");
var block=document.getElementById("block");
function jump(){
    if(ball.classList!="animate")
    {
        ball.classList.add("animate");
    }
    setTimeout(function(){
        ball.classList.remove("animate");
    },500);
}
var check=setInterval(function(){
    var balltop=parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(balltop>=160 && blockleft>200 &&blockleft<240)
    {
        block.style.animation="none";
        alert("You Lost!!!");
    }
},10);

document.addEventListener("keydown",function(){
    jump();
})