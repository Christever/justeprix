const input = document.querySelector("#prix");
const error = document.querySelector("#error");
const formulaire = document.querySelector("#formulaire");
const instructions = document.querySelector("#instructions");
let nbChoisi;
let nbCoups = 0;

// Cacher l'erreur
error.style.display = "none";

// Generer un nombre aléatoire
let nbAleatoire = Math.floor(Math.random() * 1001);
console.log(nbAleatoire);

// Verifier
function verifierNombre(nb) {
    let instruction = document.createElement("div");
    if (nb < nbAleatoire) {
        instruction.textContent =
            "#" + nbCoups + "( " + nb + " )" + " C'est plus";
        instruction.className = "instructions plus";
    } else if (nb > nbAleatoire) {
        instruction.textContent =
            "#" + nbCoups + "( " + nb + " )" + " C'est moins";
        instruction.className = "instructions moins";
    } else {
        instruction.textContent =
            "Félicitations! vous avez trouvé en " + nbCoups + " coups";
        instruction.className = "instructions fini";
    }

    instructions.prepend(instruction);
}

// Verifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup", (e) => {
    console.log(e.key);
    let r = input.value.length;
    if (isNaN(input.value) || e.key == " ") {
        error.style.display = "inline";
        input.value = input.value.slice(0, r - 1);
    } else {
        error.style.display = "none";
    }
});

// Agir a l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == "") {
        input.style.borderColor = "red";
    } else {
        input.style.borderColor = "silver";
        nbChoisi = input.value;
        input.value = "";
        nbCoups++;
        verifierNombre(nbChoisi);
    }
});
