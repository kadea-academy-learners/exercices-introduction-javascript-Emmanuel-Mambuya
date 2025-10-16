// Exercice 7
// L'âge des membres de la famille - Enfant, Mère, Père, Grand-Père et Oncle
const ageEnfant = 18;
const agePere = ageEnfant * 2;
const ageMere = agePere - 5;
const ageGrandPere = ageMere * 2 + ageEnfant/2;
const ageOncle = agePere + 10;
// affichage 
console.log("Âge de l'enfant : " + ageEnfant);
console.log("Âge du père : " + agePere);
console.log("Âge de la mère : " + ageMere);
console.log("Âge du grand-père : " + ageGrandPere);
console.log("Âge de l'oncle : " + ageOncle);

module.exports = {
    ageEnfant: ageEnfant,
    agePere: agePere,
    ageMere: ageMere,
    ageGrandPere: ageGrandPere,
    ageOncle: ageOncle,
}


