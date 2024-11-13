import { products } from "./helper.js";

let html = "";

const makeHtml = function (arr, container) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

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
  container.innerHTML = html;
};

// TOP SELLING CARDS
const shopContainer = document.querySelector(".top-selling__container");
const topSelling = async () => {
  try {
    const [...fetchedData] = await products;

    const filteredArr = fetchedData
      .sort((a, b) => b.rating - a.rating)
      .filter((product) => product.rating > 4);

    makeHtml(filteredArr, shopContainer);
  } catch {
    console.log("Error while fetching");
  }
};

// CATEGORIES
const categoriesShop = document.querySelector(".all-categories-items");
const beautyBtn = document.querySelector("#beauty");
const fragrancesBtn = document.querySelector("#fragrances");
const furnitureBtn = document.querySelector("#furniture");
const groceriesBtn = document.querySelector("#groceries");

const categories = async () => {
  try {
    const [...fetchedData] = await products;

    makeHtml(fetchedData, categoriesShop);

    return fetchedData;
  } catch {
    console.log("Error while fetching");
  }
};

const filterCategory = (btn) => {
  categories().then((res) => {
    html = "";
    categoriesShop.innerHTML = html;

    const categoryItems = res.filter((el) => {
      return el.category === btn.target.dataset.category;
    });
    makeHtml(categoryItems, categoriesShop);
  });
};

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
  topSelling();
}

if (window.location.pathname.endsWith("categories.html")) {
  categories();
  beautyBtn.addEventListener("click", filterCategory);
  fragrancesBtn.addEventListener("click", filterCategory);
  furnitureBtn.addEventListener("click", filterCategory);
  groceriesBtn.addEventListener("click", filterCategory);
}

// PRODUCT DETAILS
