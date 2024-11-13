export const products = fetch("https://dummyjson.com/products?limit=42")
  .then((res) => res.json())
  .then((json) => {
    console.log(json.products);
    return json.products;
  })
  .catch((err) => {
    console.log(err);
  });

const getSingleProduct = function (id) {
  const product = fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
    });
  return product;
};

export default getSingleProduct;
