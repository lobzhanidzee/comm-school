import { products } from "./helper.js";

let html = "";

const shopContainer = document.querySelector(".top-selling__container");
const topSelling = async () => {
  try {
    const fetchedData = await products;

    for (let i = 0; i < 42; i++) {
      fetchedData.sort((a, b) => b.rating - a.rating);
      const element = fetchedData[i];
      if (element.rating > 4) {
        html += `
         <div class="top-selling--card">
                <a href="#">
                <img src="${element.thumbnail}" alt="shop-item" />
                </a>
                  <div>
                    <h3>${element.title}</h3>
                    <p>Rating: ${element.rating}</p>
                    <strong>Price: ${element.price}$</strong>
                  </div>
                  <button class="add-cart-btn">
                    <img
                      src="./assets/images/icons/add-to-cart.png"
                      alt="add-to-card-icon"
                    />Add to cart
                  </button>
                </div>
        `;
      }
    }
    shopContainer.innerHTML = html;
  } catch {
    console.log("Error while fetching");
  }
};

topSelling();

// TOP SELLING SLIDER
const slider = function () {
  const sliderNextBtn = document.querySelector(".slider-next");
  const sliderPrevBtn = document.querySelector(".slider-prev");

  let scroll = 0;

  sliderNextBtn.addEventListener("click", () => {
    scroll -= 415;
    if (scroll < -5810) scroll = 0;
    Array.from(shopContainer.children).forEach((child) => {
      child.style.transform = `translateX(${scroll}px)`;
    });
  });
  sliderPrevBtn.addEventListener("click", () => {
    scroll += 415;
    if (scroll > 0) scroll = -5810;
    Array.from(shopContainer.children).forEach((child) => {
      child.style.transform = `translateX(${scroll}px)`;
    });
  });
};

if (window.location.pathname.endsWith("index.html")) {
  slider();
}
