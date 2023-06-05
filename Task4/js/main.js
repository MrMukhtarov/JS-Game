"use strict";

let Kia = {
  marka: "KIA",
  model: "Sorento",
  year: 2023,
  price: 45000,
};

let Hyundai = {
  marka: "Hyunadi",
  model: "Santafe",
  year: 2023,
  price: 49000,
};

function Select(option) {
  function Information() {
    let marka = document.getElementById("marka");
    let model = document.getElementById("model");
    let il = document.getElementById("il");
    let qiymet = document.getElementById("qiymet");

    marka.innerHTML = this.marka;
    model.innerHTML = this.model;
    il.innerHTML = this.year;
    qiymet.innerHTML = this.price;
  }
  if (option === "KIA") {
    Information.apply(Kia);
  } else {
    Information.apply(Hyundai);
  }
}
