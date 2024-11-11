let html = "";

const home = document.querySelector(".top-selling__container");

const data = fetch("https://dummyjson.com/products?limit=42")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    return json;
  });

const fn = async () => {
  const fetchedData = await data;
  for (let i = 0; i < 42; i++) {
    const element = fetchedData.products[i];
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
  home.innerHTML = html;
};

fn();
