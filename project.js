function AddRow(){
    var Ename = document.getElementById("Ename").value;
    var Ecity = document.getElementById("Ecity").value;
    var Enumber = document.getElementById("Enumber").value;
   
  
    var table = document.getElementsByTagName('table')[0];
    var row = table.insertRow(3);
  
    var R1 = row.insertCell(0);
    var R2 = row.insertCell(1);
    var R3 = row.insertCell(2);
  
    R1.innerHTML = Ename;
    R2.innerHTML = Ecity;
    R3.innerHTML = Enumber;
    
   
   
  };