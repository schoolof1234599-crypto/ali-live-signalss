setTimeout(()=>{
 document.getElementById("loading").style.display="none";
 document.getElementById("app").style.display="block";
 loadData();
},1000);

function setMode(m){
 alert("Mode: "+m);
}

function loadData(){
 fetch("signals.json")
 .then(r=>r.json())
 .then(d=>{
   document.getElementById("signalBox").innerHTML =
   `Next: ${d.signal.number} | ${d.signal.size} | ${d.signal.color}`;

   let h="";
   d.history.forEach(x=>{
     h+=`<tr>
     <td>${x.p}</td>
     <td>${x.n}</td>
     <td>${x.s}</td>
     <td>${x.c}</td>
     </tr>`;
   });
   document.getElementById("history").innerHTML=h;
 });
}
