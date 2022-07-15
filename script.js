window.onload=function(){


var mug1="img/mug1.jpg"
var mug2="img/mug2.jpg"
var mug3="img/mug3.png"
var mug4="img/mug4.jpg"
var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")

function red() {
    
    document.getElementById('img1').src=mug1
    document.getElementById('img2').src=mug2
    texto2.style.display="none"
    texto1.style.display="block"
}

function blue() {
    
    
    document.getElementById('img1').src=mug3
    document.getElementById('img2').src=mug4
    texto1.style.display="none"
    texto2.style.display="block"
}


btn1.addEventListener("click",red)
btn2.addEventListener("click",blue)



}