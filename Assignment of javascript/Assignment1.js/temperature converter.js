var btn1=document.getElementById("input");
var data=document.getElementById("Fahrenheit");

btn1.onclick=function(){
    
    var msg=document.getElementById("text");
    var celsius=0;

    celsius = parseInt(((data.value-32) * 5 / 9));
    msg.innerHTML="Temperature in Celsius:" + celsius; 
    
}

var main=document.getElementById("temp");
main.style.backgroundColor="red";