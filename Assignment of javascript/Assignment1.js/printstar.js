function create(){
    
    var arr=document.getElementsByTagName("input");
    var paras=document.getElementById("main");
    var p=[];
    for(i=0;i<arr.length;i++){
        var result="";
        if(arr[i].value<=30 && arr[i].value>0){
            for(j=0;j<arr[i].value;j++){
            result+='*';
            }
        
        }
        else{
            alert("Enter number in 1-30 for input" + i++);
        }
        p[i]=document.createElement("p");
        paras.appendChild(p[i]);
        p[i].textContent=""+result;
    }
    
}

document.getElementById("button").addEventListener("click",create);
