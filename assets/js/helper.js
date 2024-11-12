export const products = fetch("https://dummyjson.com/products?limit=42")
  .then((res) => res.json())
  .then((json) => {
    console.log(json.products);
    return json.products;
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });
