let TipsPourcent = 0.05;
let bill = 0;
let Person = 1;
let TotalPrice = 0;

let totalbypeopel = 0;
let tipbypeople = 0;

let person = document.getElementById("person");
let Bill = document.getElementById("bill");
let Texttipbypeople = document.getElementById("Tipbypeople");
let Texttotalbypeople = document.getElementById("Totalbypeopel");

function ChangeTip(objet){
   valeur = document.getElementById(objet.id).value;
   TipsPourcent = valeur;
  changeValue();



}
setInterval(function(){
  
  controlleInput();
  changeValue();
}, 1000);

function controlleInput(){
  bill = Bill.value;
  Person = person.value;
  if (Person <= 0){
    Person = 1;
    //rajouter la function pour faire aparaitre la signalitique
  }
}

function changeValue(){
    TotalPrice = bill/Person;
    tipbypeople = TotalPrice * TipsPourcent;
    totalbypeopel = TotalPrice + tipbypeople;
    Texttipbypeople.innerHTML = tipbypeople.toFixed(2);
    Texttotalbypeople.innerHTML = totalbypeopel.toFixed(2);
 
}

function resetAll(){
location.reload();
}