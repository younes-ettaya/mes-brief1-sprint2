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

function ajouterProduit(event) {
  event.preventDefault();

  const nom = document.querySelector("#nom").value;
  const prix = document.querySelector("#prix").value;

  if (nom.trim() === "" || prix === "" || Number(prix) <= 0) {
    document.querySelector("#message").textContent =
      "Remplissez le nom et un prix supérieur à 0.";
    return;
  }

  const produit = {
    id: prochainId,
    nom: nom.trim(),
    prix: Number(prix)
  };

  produits.push(produit);
  prochainId = prochainId + 1;

  afficherProduits();
  formulaire.reset();

  document.querySelector("#message").textContent = "Produit ajouté !";
}

formulaire.onsubmit = ajouterProduit;
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
