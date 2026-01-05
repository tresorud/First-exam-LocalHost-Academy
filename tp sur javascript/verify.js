var age = prompt("Entrer votre âge ici s'il vous plaît :")
console.log(!isNaN(age) || parseInt(age)>0);

var cont = document.createElement("div")
document.getElementById("body").append(cont)
while(isNaN(age) || parseInt(age)<=0){
    alert("l'age entré est incorrecte");
    var age = prompt("Entrer votre âge ici s'il vous plaît :")
}

var tab = [];
nb = 0;
for (var i=2; i<=100; i++){
    var compteur=0
    for(var n=1; n<=i ; n++){
        if (i%n == 0) {
            compteur++
        }
    }
    console.log(compteur)
    if (compteur == 2) {
        tab.push(i);
        nb++;
    }
    if (compteur == 2 && i<97) {
        var div = document.createElement("span")
        div.textContent = i+','
        cont.append(div)
    }else if (compteur ==2 && i>=97) {
        var div = document.createElement("span")
        div.textContent = i
        cont.append(div)
    }
} 

var somme = 0;
tab.forEach((elt)=>{
    somme += elt;
})

var eltmoy = document.createElement("p")
eltmoy.textContent= "La somme des ces nombres premiers est : "+somme+" Et la moyenne est :"+(somme/nb)
cont.append(eltmoy)
