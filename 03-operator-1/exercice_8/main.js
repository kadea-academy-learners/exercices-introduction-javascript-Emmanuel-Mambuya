// Exercice 8
// Écrivez votre code ici
let salaireMensuel = 500;
let loyer = salaireMensuel * 30/100;
let nourriture = salaireMensuel * 20/100;
let transport = salaireMensuel * 10/100;
let autresDepenses = 75; 
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

if (reste>=100) {
    console.log("Le Budget est bien gerer");
    
} else {
    console.log ("Attention, budget serre")
}

let loisirs = salaireMensuel * 15/100;
let totalDepenses_revise = totalDepenses + loisirs;
let reste_revise = salaireMensuel - totalDepenses_revise;

