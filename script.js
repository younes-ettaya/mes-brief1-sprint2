// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.



const liste = document.querySelector("#liste-produits");

function afficherProduits() {
  liste.textContent = "";

  produits.forEach(function (produit) {
    const li = document.createElement("li");
    li.classList.add("produit");

    const div = document.createElement("div");

    const nom = document.createElement("strong");
    nom.classList.add("nom-produit");
    nom.textContent = produit.nom;

    const prix = document.createElement("span");
    prix.classList.add("prix-produit");
    prix.textContent = produit.prix + " MAD";

    const btnS = document.createElement("button");
    btnS.classList.add("supprimer");
    btnS.type = "button";
    btnS.textContent = "Retirer";

    div.append(nom, prix);
    li.append(div, btnS);
    liste.append(li);
  });
}

afficherProduits();
// 2. Gérer l’ajout depuis le formulaire.
const formulaire = document.querySelector("#form-produit");
const champNom = document.querySelector("#nom");
const champPrix = document.querySelector("#prix");
const message = document.querySelector("#message");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const nom = champNom.value.trim();
  const prix = Number(champPrix.value);

  if (nom === "" || prix <= 0 || !champPrix.checkValidity()) {
    message.textContent = "Saisissez un nom et un prix valide.";
    return;
  }

  const nouveauProduit = {
    id: prochainId,
    nom: nom,
    prix: prix
  };

  produits.push(nouveauProduit);
  prochainId++;

  afficherProduits();
  formulaire.reset();

  message.textContent = "Produit ajouté !";
});
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
