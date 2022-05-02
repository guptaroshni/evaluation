// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFun);
  var Arr = JSON.parse(localStorage.getItem("contact")) || [];
 
  function myFun(){
    event.preventDefault();

    var object={

      matchNum : document.querySelector("#matchNum").value,
      teamA : document.querySelector("#teamA").value,
      teamB : document.querySelector("#teamB").value,
      date : document.querySelector("#date").value,
      venue: document.querySelector("#venue").value,

    };

    Arr.push(object);

    localStorage.setItem("contact",JSON.stringify(jobArray));
    document.querySelector("#matchNum").value="";
    document.querySelector("#teamA").value="";
    document.querySelector("#teamB").value="";
    document.querySelector("#date").value="";
    document.querySelector("#venue").value="";

    window.location.href="matches.html"


   }


