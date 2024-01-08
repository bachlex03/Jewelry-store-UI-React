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

  let temp = products;

  Object.keys(filters).forEach((key) => {
    let count = 0;
    if (filters[key].length > 0) {
      count++;

      let groupedProducts = products.reduce((acc, product) => {
        acc[product.slug] = acc[product.slug] || [];
        acc[product.slug].push(product);
        return acc;
      }, {});

      filteredProducts = Object.values(groupedProducts)
        .filter((group) =>
          filters[key].every((value) =>
            group.some((product) => product[key] === value)
          )
        )
        .flat();

      if (filteredProducts.length === 0 && count === 1) temp = [];
    }
  });

  return filteredProducts.length > 0 ? filteredProducts : temp;
}

export function distinctBy(products, key) {
  const distinctProducts = products.filter(
    (product, index, self) =>
      index === self.findIndex((o) => o[key] === product[key])
  );

  return distinctProducts;
}

export function filterByCategory_Variation(
  products,
  categories,
  defaultCategory,
  filters = {}
) {
  let params = [defaultCategory];

  categories.forEach((category) => {
    if (category["slug"] === defaultCategory) {
      params = [...category.children];
    }
  });

  let productsByCategory = filterByCategory(products, params);
  let productsByFilters = filterByVariation(productsByCategory, filters);
  products = distinctBy(productsByFilters, "category");

  return products;
}

// filter variants
export const filterVariants = (products, variation) => {
  return products.map((product) => product[variation]);
};
