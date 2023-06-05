"use strict";

function Text() {
  let count = 1;
  let text = document.getElementById("text").value;
  let space = " ";
  for (let i = 0; i < text.trimEnd().length; i++) {
    if (text[i] == space) {
      count++;
    }
  }
  console.log(count);
}
