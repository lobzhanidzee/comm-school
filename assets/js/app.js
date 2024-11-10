const body = document.querySelector("body");
let html = "";

const home = document.querySelector(".item-shop__container");

fetch("https://dummyjson.com/products?limit=42")
  .then((res) => res.json())
  .then((json) => {
    html += ``;
    console.log(json);
  });
