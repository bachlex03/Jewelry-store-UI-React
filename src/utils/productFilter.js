export function filterByCategory(products, categories, categoryParam) {
  let products_category = [];
  let categoryParams = [];

  let childrenCategory = categories.find((c) => c.slug === categoryParam);

  if (childrenCategory) {
    categoryParams = childrenCategory.children.map((c) => c.slug);
  }

  categoryParams = categoryParams.length
    ? [...categoryParams]
    : [categoryParam];

  categoryParams.forEach((pram) => {
    let filteredProducts = products.filter(
      (product) => product.category === pram
    );

    products_category = [...products_category, ...filteredProducts];
  });

  return products_category;
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
          filters[key].every((value) => {
            let newKey = key.slice(0, key.lastIndexOf("s"));

            return group.some((product) => product[newKey] === value);
          })
        )
        .flat();

      if (filteredProducts.length === 0 && count === 1) temp = [];
    }
  });

  console.log(filteredProducts);

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
  categoryParam,
  filters = {}
) {
  let productsByCategory = filterByCategory(
    products,
    categories,
    categoryParam
  );

  let productsByFilters = filterByVariation(productsByCategory, filters);

  products = distinctBy(productsByFilters, "slug");

  return products;
}

// filter variants
export const filterVariants = (products, variation) => {
  return products.map((product) => product[variation]);
};

export const filterVariantsBy = (name, variantId, products) => {
  // console.log(products);

  return products.filter(
    (product) => product[name] == variantId && product.quantity > 0
  );
};
