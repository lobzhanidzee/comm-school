const products = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    category: "mobile",
    price: 999,
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    category: "mobile",
    price: 899,
  },
  {
    id: 3,
    title: "Google Pixel 7",
    category: "mobile",
    price: 699,
  },
  {
    id: 4,
    title: "OnePlus 11",
    category: "mobile",
    price: 699,
  },
  {
    id: 5,
    title: "Xiaomi 13 Pro",
    category: "mobile",
    price: 799,
  },
  {
    id: 6,
    title: "MacBook Pro M2",
    category: "laptop",
    price: 1299,
  },
  {
    id: 7,
    title: "Dell XPS 15",
    category: "laptop",
    price: 1499,
  },
  {
    id: 8,
    title: "Lenovo ThinkPad X1",
    category: "laptop",
    price: 1399,
  },
  {
    id: 9,
    title: "HP Spectre x360",
    category: "laptop",
    price: 1299,
  },
  {
    id: 10,
    title: "Asus ROG Zephyrus",
    category: "laptop",
    price: 1699,
  },
  {
    id: 11,
    title: "iPad Pro 12.9",
    category: "tab",
    price: 1099,
  },
  {
    id: 12,
    title: "Samsung Galaxy Tab S8 Ultra",
    category: "tab",
    price: 899,
  },
  {
    id: 13,
    title: "Microsoft Surface Pro 9",
    category: "tab",
    price: 999,
  },
  {
    id: 14,
    title: "Lenovo Tab P12 Pro",
    category: "tab",
    price: 699,
  },
  {
    id: 15,
    title: "Xiaomi Pad 6 Pro",
    category: "tab",
    price: 499,
  },
];

const mobileBtn = document.querySelector(".mobile-btn");
const laptopBtn = document.querySelector(".laptop-btn");
const tabletBtn = document.querySelector(".tablet-btn");

const shopContainer = document.querySelector(".shop");

let html = "";

const filterShop = (device) => {
  device.forEach((e) => {
    html += `
      <div class="shop-item">
        <ul>
          <li>Device Name : <b>${e.title}</b></li>
          <li>Device Category : <b>${e.category}</b></li>
          <li>Price : <b>$${e.price}</b></li>
        </ul>
      </div>`;
  });
  shopContainer.innerHTML = html;
};

mobileBtn.addEventListener("click", () => {
  html = "";

  const mobiles = products.filter((e) => e.category === "mobile");

  filterShop(mobiles);
});

laptopBtn.addEventListener("click", () => {
  html = "";

  const laptops = products.filter((e) => e.category === "laptop");

  filterShop(laptops);
});

tabletBtn.addEventListener("click", () => {
  html = "";

  const tablets = products.filter((e) => e.category === "tab");

  filterShop(tablets);
});
