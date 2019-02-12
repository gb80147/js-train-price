var km=prompt("quanti km soffrirai?");
var age=prompt("che età pensi di avere?");
var price=km*0.21;
var scontominori20= price*0.8;
var scontosenior40= price*0.6;

if(age<18){
  alert("Sconto 20%: € " + scontominori20.toFixed(2))
}
else if(age>65){
  alert("Sconto 40%: € " + scontosenior40.toFixed(2))
}
else{
  alert("Paga il biglietto intero: € " + price.toFixed(2))
}
