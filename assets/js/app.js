import { products } from "./helper.js";
import getSingleProduct from "./helper.js";

let html = "";

const makeHtml = function (arr, container) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    html += `
    <div class="top-selling--card">
    <a href="./product.html?id=#${element.id}">
    <img src="${element.thumbnail}" alt="shop-item" data-id="${element.id}"/>
    </a>
    <div>
    <h3>${element.title}</h3>
    <p>Rating: ${element.rating}</p>
    <strong>Price: ${element.price}$</strong>
    </div>
    <button class="add-cart-btn" data-id="${element.id}" >
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

// PRODUCT DETAILS

const getProductDescription = function () {
  let productDetailsHtml = "";
  const id = window.location.hash.slice(1);

  getSingleProduct(id).then((product) => {
    const productContainer = document.querySelector(
      ".product-description--card"
    );

    productDetailsHtml = `
              <div class="product-description__img">
                <div>
                  <img
                    src="${
                      product.images.length > 1
                        ? product.images[0]
                        : product.images
                    }"
                    alt="shop-item"
                  />
                </div>
                <div>
                  ${
                    product.images.length > 2
                      ? `<img
                    src="${product.images[1]}"
                    alt="shop-item"
                  /> <img
                    src="${product.images[2]}"
                    alt="shop-item"
                  />`
                      : ""
                  }
                </div>
              </div>
              <div class="product-description__info">
                <div>
                  <h2>${product.title}</h2>
                  <p>Rating: ${product.rating}</p>
                  <p>Price: <strong>${product.price}$</strong></p>
                  <p>Description: ${product.description}</p>
                  <p>In stock: ${product.stock}</p>
                  <p>Tags: ${product.tags
                    .map((element) => element)
                    .join(", ")}</p>
                </div>
                <div class="product-description__btns">
                  <div>
                    <button>
                      <img
                        src="./assets/images/icons/icon-minus.png"
                        alt="minus-icon"
                      />
                    </button>
                    <p class="quantity">1</p>
                    <button>
                      <img
                        src="./assets/images/icons/icon-plus.svg"
                        alt="plus-icon"
                      />
                    </button>
                  </div>
                  <button>
                    <img src="./assets/images/icons/add-to-cart.png" alt="" />Add
                    to cart
                  </button>
                </div>
              </div>
    `;

    productContainer.innerHTML = productDetailsHtml;
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

if (window.location.pathname.endsWith("product.html")) {
  getProductDescription();
}

// shopContainer.addEventListener("click", (event) => {
//   if (event.target && event.target.matches("asd")) {
//     console.log(`Item ID: ${event.target.getAttribute("data-id")}`);
//   }
// });

// const addToCartBtn = document.querySelectorAll(".add-cart-btn");
