//Fonctions

//Addition
function Addition(nombreA, nombreB) {
  let resultat = nombreA + nombreB;
  return resultat;
};

//Multiplication
function Multiplication(nombreA, nombreB) {
  let resultat = nombreA * nombreB;
  return resultat;
};

//Soustraction
function Soustraction(nombreA, nombreB) {
  let resultat = nombreA - nombreB;
  return resultat;
};

//Division
function Division(nombreA, nombreB) {
  let resultat = nombreA / nombreB;
  if (nombreB == 0) {
    throw new Error("Impossible de diviser par 0");
  }
  return resultat;
};

//Demander un choix entre 1 et 4
do {
    var choix = prompt("Que souhaitez-vous faire ?\n\n 1 - Addition \n2  - Multiplication \n3 - Soustraction \n4 - Division ");
    choix = Number(choix);
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

//Demander deux nombres
do {
  var premierNombre = Number(prompt("Entrer un premier nombre :"));
  var deuxiemeNombre= Number(prompt("Entrer un deuxieme nombre :"));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

//Appeler la fonction à utiliser
let resultat;
try {
switch (choix) {
  case 1 :
    Addition(premierNombre, deuxiemeNombre);
    resultat = Addition(premierNombre, deuxiemeNombre);
    break;
  case 2 :
    Multiplication(premierNombre, deuxiemeNombre);
    resultat = Multiplication(premierNombre, deuxiemeNombre);
    break;
  case 3 :
    Soustraction(premierNombre, deuxiemeNombre);
    resultat = Soustraction(premierNombre, deuxiemeNombre);
  break;
  case 4 :
    Division(premierNombre, deuxiemeNombre);
    resultat = Division(premierNombre, deuxiemeNombre);
    break;
  default:
    alert("Choix invalide.");
    break;
}

alert("Le résultat est : " + resultat);

} catch (error) {
  alert(error.message);
}