export function filterByCategory(products, categoryParams = []) {
  let products_category = [];

  categoryParams.forEach((pram) => {
    let filteredProducts = products.filter(
      (product) => product.category === pram
    );

    products_category = [...products_category, ...filteredProducts];
  });

  return products_category.length > 0 ? products_category : products;
}

export function filterByVariation(products, filters = {}) {
  let filteredProducts = [];

  Object.keys(filters).forEach((key) => {
    filters[key].forEach((value) => {
      let variation_products = products.filter((p) => p[key] === value);

      filteredProducts = [...filteredProducts, ...variation_products];
    });
  });

  return filteredProducts.length > 0 ? filteredProducts : products;
}

export function distinctBy(products, key) {
  const distinctProducts = products.filter(
    (product, index, self) =>
      index === self.findIndex((o) => o[key] === product[key])
  );

  return distinctProducts;
}
