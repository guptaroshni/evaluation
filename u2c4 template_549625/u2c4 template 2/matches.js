// write js code here corresponding to matches.html

var match = JSON.parse(localStorage.getItem("contact"));
var fav = JSON.parse(localStorage.getItem("favorite"))||[];

window.addEventListener("load",function(){
    displayData(match);
});

function filterVenue(){
    var select= document.querySelector("#filterVenue").value;
    var  line=match.filter(function(elem){
        return elem.venue == select;

    });

    console.log(line)
    displayData(line)

}
    function displayData(match){
        document.querySelector("tbody").innerHTML="";
        match.map(function(elem){

        

    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=elem.matchNum;

    var td2=document.createElement("td")
    td2.innerText=elem.teamA;


    var td3=document.createElement("td")
    td3.innerText=elem.teamB;



    var td4=document.createElement("td")
    td4.innerText=elem.date;


    var td5=document.createElement("td")
    td5.innerText=elem.venue;

    var td6=document.createElement("td")
    td6.innerText="favorite";
    td6.style.cursor="pointer"

    td6.style.backgroundColor="green"

    td6.addEventListener("click",Fun()
        function myFun()
    {
        event.target.parentNode.remove()
    }
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
});

   




