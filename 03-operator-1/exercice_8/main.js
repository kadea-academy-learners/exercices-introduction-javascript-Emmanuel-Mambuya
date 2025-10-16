// Exercice 8

const salaireMensuel = 500; // Salaire mensuel

// Dépenses principales
const loyer = salaireMensuel * 0.30;       // 30% du salaire
const nourriture = salaireMensuel * 0.20;  // 20% du salaire
const transport = salaireMensuel * 0.10;   // 10% du salaire

// Autres dépenses
let autresDepenses = 50;
autresDepenses += 25; // Résultat final apres initialisation: 75

// Total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

// Vérification du budget
if (reste >= 100) {
  console.log("Le budget est bien géré");
} else {
  console.log("Attention, budget serré");
}

// Ajout des loisirs
let loisirs = salaireMensuel * 0.15;
let totalDepensesRecalcule = totalDepenses + loisirs;
let resteRecalcule = salaireMensuel - totalDepensesRecalcule;

// Calcul des pourcentages
let pourcentageLoyer = (loyer / salaireMensuel) * 100;
let pourcentageNourriture = (nourriture / salaireMensuel) * 100;
let pourcentageTransport = (transport / salaireMensuel) * 100;
let pourcentageLoisirs = (loisirs / salaireMensuel) * 100;
let pourcentageAutresDepenses = (autresDepenses / salaireMensuel) * 100;

// Affichage des résultats
console.log("Loyer :", pourcentageLoyer + "%");
console.log("Nourriture :", pourcentageNourriture + "%");
console.log("Transport :", pourcentageTransport + "%");
console.log("Loisirs :", pourcentageLoisirs + "%");
console.log("Autres Dépenses :", pourcentageAutresDepenses + "%");

// Totaux révisés
let totalDepenses_revise = totalDepenses + loisirs;
let reste_revise = salaireMensuel - totalDepenses_revise;


module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  loisirs,
  totalDepenses,
  reste,
  totalDepenses_revise,
  reste_revise,
  pourcentageLoyer,
  pourcentageNourriture,
  pourcentageTransport,
  pourcentageLoisirs,
  pourcentageAutresDepenses
};
