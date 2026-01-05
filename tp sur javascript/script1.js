var age = document.getElementById("age")
var resultat = document.getElementById("message")

function age_listener(){
    
    age1 = parseFloat(age.value);
        if(age1 > 0 && age1 <= 7) {
            resultat.textContent = "Vous êtes un enfant";
        }else if (age1 > 7 && age1 <= 11) {
            resultat.textContent = "Vous êtes un enfant qui a atteint l'âge de raison";
        }else if (age1 > 11 && age1 <= 17) {
            resultat.textContent = "Vous êtes adolescent";
        }else if (age1 > 17 && age1 <= 120) {
            resultat.textContent = "Vous êtes un adulte";
        }
        else{resultat.textContent="pas de catégories";}
}