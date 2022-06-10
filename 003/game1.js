var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
nhanvat = {
    x:100, y:500
}
setInterval(start,100);

function start() {
    context.clearRect(0,0,40,40);
    context.fillStyle ="red";
    context.fillRect(100,500,40,40);

}
document.addEventListener('click' , function (e) {
    console.log("hi")
}

);
document.addEventListener("keydown" , function (event) {
  
 
}

);