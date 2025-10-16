// # Répartition de l'héritage de Monsieur Jean MUKUNA

// Monsieur Jean MUKUNA est décédé à Kinshasa, laissant derrière lui un patrimoine de: 

// - Une maison familiale estimée à  **60.000.000 CDF**
// - Des terrains estimés à **40.000.000 CDF**
// - Des liquidités de **20.000.000 CDF**

// Il laisse derrière lui :

// - Trois enfants :
//     1. Paul (vivant)
//     2. Marie (vivante)
//     3. Alain (décédé), mais ayant laissé deux enfants : Éric et Claire (petits-enfants de Jean MUKUNA)

// - Son épouse : Madame MUKUNA (vivante)

// - Ses deux parents sont tous décédés

// - Deux frères germains :

//     1. Joseph (vivant)
//     2. Daniel (décédé), mais ayant une fille, Sarah (nièce du défunt)

// - Une tante maternelle, Viviane

const coutMaisonFamiliale = 60000000;
const coutTerrains = 40000000;
const liquidites = 20000000;
let sommeHeritage = coutMaisonFamiliale + coutTerrains + liquidites;

let heritageCat1 = sommeHeritage * 0.75;
let heritageCat2 = sommeHeritage * 0.25;

// les heritiers de la 1ere categorie
let paul = heritageCat1/3;
let marie = heritageCat1/3;
let alain = heritageCat1/3;
let eric = alain/2;//l'heritier du defunt de Alain
let clair = alain/2;//l'heritier du defunt de Alain

// les heritiers de la 2e categorie
let madameMukuna = heritageCat2 * 1/3;
let joseph = heritageCat2 * 1/3;
let sarah = heritageCat2 * 1/3;

// affichage des resultats sur l'heritage de chacun

console.log("Heritage de Paul : " + paul);
console.log("Heritage de Marie : " + marie);
console.log("Heritage de Eric : " + eric);
console.log("Heritage de Clair : " + clair);
console.log("Heritage de Madame Mukuna : " + madameMukuna);
console.log("Heritage de Joseph : " + joseph);
console.log("Heritage de Sarah : " + sarah);

module.exports = {
    paul,
    marie,
    eric,
    clair,
    madameMukuna,
    joseph,
    sarah,
}


