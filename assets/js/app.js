let html = "";

const home = document.querySelector(".top-selling__container");

const data = fetch("https://dummyjson.com/products?limit=42")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    return json;
  });

// const fn = async () => {
//   const fetchedData = await data;
//   for (let i = 0; i < 42; i++) {
//     const element = fetchedData[i];
//     html += `
//     <div class="top-selling--card">
//               <img src="${fetchedData.products[i].thumbnail}" alt="shop-item" />
//               <div>
//                 <h3>Mascara mascara</h3>
//                 <p>Rating</p>
//                 <strong>Price:</strong>
//               </div>
//               <button class="add-cart-btn">
//                 <img src="./assets/images/icons/add-to-cart.png" alt="" />Add to
//                 cart
//               </button>
//             </div>
//     `;
//   }
//   home.innerHTML = html;
// };

// fn();
