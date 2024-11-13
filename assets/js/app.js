import { products } from "./helper.js";
import getSingleProduct from "./helper.js";

let html = "";

// Making html for shop cards
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

// Counter for shopping cart items
const cartItemCount = document.querySelector(".cart-items-num");
cartItemCount.textContent = localStorage.length;

// TOP SELLING CARDS
const shopContainer = document.querySelector(".top-selling__container");

// Getting items from API, sorting highest rated, making html
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

// Getting items from API for all items without sorting, making html

const categories = async () => {
  try {
    const [...fetchedData] = await products;

    makeHtml(fetchedData, categoriesShop);

    return fetchedData;
  } catch {
    console.log("Error while fetching");
  }
};

// filtering by categories
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
  const maxScroll = -5810;
  const scrollStep = 415;

  const updateSlider = () => {
    Array.from(shopContainer.children).forEach((child) => {
      child.style.transform = `translateX(${scroll}px)`;
    });
  };

  sliderNextBtn.addEventListener("click", () => {
    scroll -= scrollStep;
    if (scroll < maxScroll) scroll = 0;
    updateSlider();
  });

  sliderPrevBtn.addEventListener("click", () => {
    scroll += scrollStep;
    if (scroll > 0) scroll = maxScroll;
    updateSlider();
  });
};

// PRODUCT DETAILS

const productContainer = document.querySelector(".product-description--card");

const getProductDescription = function () {
  let productDetailsHtml = "";
  const id = window.location.hash.slice(1);

  getSingleProduct(id).then((product) => {
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
                  <button class="add-cart-btn" data-id="${product.id}">
                    <img src="./assets/images/icons/add-to-cart.png" alt="add-to-cart-btn" />Add
                    to cart
                  </button>
                </div>
              </div>
    `;

    productContainer.innerHTML = productDetailsHtml;
  });
};

// CART CONTAINER
const cartContainer = document.querySelector(".shopping-cart__container");

let cartHtml = "";
let cartSum = 0;

const cartSumElement = document.querySelector(".cart-sum");
const cartSumTotalElement = document.querySelector(".cart-sum-total");

const cartContent = async () => {
  try {
    const [...fetchedData] = await products;
    cartHtml = ``;
    let cartSum = 0;

    if (localStorage.length === 0) {
      cartHtml = `<h2 class="cart-empty">Cart is empty :)</h2>`;

      cartSumElement.textContent = `$${cartSum.toFixed(2)}`;
      cartSumTotalElement.textContent = `$${0}.00`;
    }

    for (const [key, value] of Object.entries(localStorage)) {
      const product = fetchedData.find((item) => item.id === parseInt(value));
      if (product) {
        cartSum += product.price;
        cartSumElement.textContent = `$${cartSum.toFixed(2)}`;
        cartSumTotalElement.textContent = `$${(cartSum + 15).toFixed(2)}`;

        cartHtml += `
        <div class="shopping-cart__container-card">
                    <div>
                      <img
                        src="${product.thumbnail}"
                        alt="${product.title}"
                      />
                      <div>
                        <h2>${product.title}</h2>
                        <p>Description: <span>${product.description}</span></p>
                        <p>Category: <span>${product.category}</span></p>
                        <p>$${product.price}</p>
                      </div>
                    </div>
                    <div>
                      <button class="remove-item" data-id="${product.id}"
                        ><img
                          src="./assets/images/icons/trash-icon.svg"
                          alt="Trash icon"
                      /></button>
                    </div>
                  </div>
        `;
      }
    }

    cartContainer.innerHTML = cartHtml;

    return fetchedData;
  } catch {
    console.log("Error while fetching");
  }
};

const addToCart = function (container) {
  container.addEventListener("click", (event) => {
    if (event.target && event.target.matches(".add-cart-btn")) {
      const id = event.target.getAttribute("data-id");

      console.log(`Item ID: ${event.target.getAttribute("data-id")}`);

      localStorage.setItem(`ItemID_${id}`, id);
      console.log(localStorage.getItem(`ItemID_${id}`));

      cartItemCount.textContent = localStorage.length;
    }
  });
};

const removeFromCart = function () {
  cartContainer.addEventListener("click", (event) => {
    if (event.target && event.target.closest(".remove-item")) {
      const id = event.target.closest(".remove-item").getAttribute("data-id");
      console.log(id);
      localStorage.removeItem(`ItemID_${id}`);
      cartContent();
    }
  });
};

if (window.location.pathname.endsWith("index.html")) {
  slider();
  topSelling();
  addToCart(shopContainer);
}

if (window.location.pathname.endsWith("categories.html")) {
  categories();
  beautyBtn.addEventListener("click", filterCategory);
  fragrancesBtn.addEventListener("click", filterCategory);
  furnitureBtn.addEventListener("click", filterCategory);
  groceriesBtn.addEventListener("click", filterCategory);
  addToCart(categoriesShop);
}

if (window.location.pathname.endsWith("product.html")) {
  getProductDescription();
  addToCart(productContainer);
}

if (window.location.pathname.endsWith("cart.html")) {
  cartContent();
  removeFromCart();
}
