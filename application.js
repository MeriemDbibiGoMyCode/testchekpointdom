//Creation Nouveau Produit
/*function creerProduit([img,nomProduit,poidsProduit,scoreProduit,prixProduit,nombreProduit]){
let code=`
<div class="carte-produit">
<img src="${img}" alt="${nomProduit}"/>
<div class="description-produit">
    <p class="nom-produit">${nomProduit}</p>
    <h2 class="poids-produit">${poidsProduit} g</h2>
    <h5 class="score-produit">${scoreProduit}}</h5>
    <p class="prix-produit"> Prix: ${prixProduit} TND </p>
    <div class="choix-quantite">
        <button class="btn-plus"> + </button>
        <p classe="nombre-produit"> ${nombreProduit} </p>
        <button class="btn-moins"> - </button>
    </div>
    <i class="fas fa-heart"></i>
</div>
</div>
`;
produits.innerHTML+=code;
console.log("insertion carte")
}*/
//Appel Fonction creerProduit
//creerProduit(["2.jpg","More Life Nutrition Seed Bars","60g","⭐⭐⭐⭐",4.2,1]);
var produits=document.getElementsByClassName('carte-produit');
prixTotal=document.getElementById('somme');
var sommeTot=0;
let lesPrix= document.getElementsByClassName('prix-produit');
console.log(lesPrix);
// Pour Bouton Moins
let minusBtn = document.getElementsByClassName('btn-moins');
console.log(minusBtn);
for (let i=0;i<minusBtn.length;i++) {
    minusBtn[i].addEventListener('click', function () {
    if (minusBtn[i].nextElementSibling.innerText > 0) {
        minusBtn[i].nextElementSibling.innerText--;
        sommeTot-=parseInt(lesPrix[i].innerText);
      console.log("somme =",sommeTot);
      prixTotal.innerText=sommeTot;
    }
  });
}

// Pour Bouton Plus
let plusBtn = document.getElementsByClassName('btn-plus');
console.log(plusBtn);
for (let i=0;i<plusBtn.length;i++) {
    plusBtn[i].addEventListener('click', function () {
    plusBtn[i].previousElementSibling.innerText++;
    sommeTot+=parseInt(lesPrix[i].innerText);
    console.log("somme =",sommeTot);
    prixTotal.innerText=sommeTot;
  });
}


// Pour changer Couleur Coeur
let hearts = document.getElementsByClassName('fa-heart');
console.log(hearts)

for (let heart of hearts){
  heart.addEventListener('click', function(){
 if ( heart.style.color === "grey"){
   heart.style.color = "red"
 } else {
   heart.style.color ="grey"
 }
  })
}


