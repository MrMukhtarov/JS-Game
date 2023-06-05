"use strict";

let random = Math.floor(Math.random() * 51);
let count = 5;

function Guess() {
  let inp = document.getElementById("inp");
  let countInner = document.getElementById("count");
  let near = document.getElementById("near");
  let correct = document.getElementById("correct");

  count--;
  countInner.innerHTML = count;
  if (inp.value == random) {
    correct.innerHTML = "Duzgun cavabi tapdiniz";
    near.innerHTML = "";
    inp = "";
  } else if (count === 0) {
    alert("Game Over");
    inp.value = "";
    window.location.reload();
  } else if (inp.value > random) {
    near.innerHTML = "Boyukdur";
    inp.value = "";
  } else {
    near.innerHTML = "Kicikdir";
    inp.value = "";
  }
}
