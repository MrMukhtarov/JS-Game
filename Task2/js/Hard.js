"use strict";

let random = Math.floor(Math.random() * 101);
let count = 10;
console.log(random);

function Guess() {
  let inp = document.getElementById("inp");
  let countInner = document.getElementById("count");
  let near = document.getElementById("near");
  let correct = document.getElementById("correct");
  console.log(inp.value);

  count--;
  countInner.innerHTML = count;
  if (inp.value == random) {
    correct.innerHTML = "Duzgun cavabi tapdiniz";
    near.innerHTML = "";
    inp = "";
    countInner.innerHTML = 0;
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
