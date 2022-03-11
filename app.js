// Pour Bouton Moins
let minusBtn = document.getElementsByClassName('btn-moins');
for (let minus of minusBtn) {
  minus.addEventListener('click', function () {
    if (minus.nextElementSibling.innerText > 0) {
      minus.nextElementSibling.innerText--;
    }


  });
}

// Pour Bouton Plus
let plusBtn = document.getElementsByClassName('btn-plus');
for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
  });
}

