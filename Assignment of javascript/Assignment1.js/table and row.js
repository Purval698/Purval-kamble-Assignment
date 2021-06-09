function makeTable(){
    var table=document.getElementById("main-table");
    var colCount=document.getElementById("main-col");
    var rowCount=document.getElementById("main-row");
    console.log(rowCount+" "+colCount);
    
    var row=[];
    var col=[];
    
    for(i=0;i<rowCount.value;i++){
        row[i]=document.createElement("tr");
        table.appendChild(row[i]);
        for(j=0;j<colCount.value;j++){
            col[j]=document.createElement("td");
            row[i].appendChild(col[j]);
            col[j].textContent="col:" + j + "row:" +i;
    
        }
    
    }
    
    }
    
    document.getElementById("button").addEventListener("click",makeTable);
    