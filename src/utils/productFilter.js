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

  let groupedProducts = products.reduce((acc, product) => {
    acc[product.slug] = acc[product.slug] || [];
    acc[product.slug].push(product);
    return acc;
  }, {});

  let [colors, sizes] = Object.values(filters);

  if (colors.length > 0 && sizes.length > 0) {
    Object.values(groupedProducts).forEach((group) => {
      let temp = [];

      for (let color of colors)
        for (let size of sizes) {
          let product = group.find((product) => {
            return product.size === size && product.color === color;
          });

          if (product) temp.push(product);
        }

      console.log("temp", temp);

      if (temp.length >= colors.length * sizes.length)
        filteredProducts = [...filteredProducts, ...temp];
    });

    console.log(filteredProducts);

    return filteredProducts;
  }

  // filteredProducts = Object.values(groupedProducts).filter((group) => {
  //   let product = group.find((product) => {
  //     if (colors.length && sizes.length) {
  //       for (let color of colors)
  //         for (let size of sizes) {
  //           return product.size === size && product.color === color;
  //         }
  //     } else if (colors.length) {
  //       for (let color of colors) return product.color === color;
  //     } else {
  //       for (let size of sizes) return product.size === size;
  //     }
  //   });

  //   return product;
  // });

  // for (let color of colors) {
  //   if (sizes.length) {
  //     for (let size of sizes) {
  //       return product.size === size && product.color === color;
  //     }
  //   } else {
  //     return product.color === color;
  //   }
  // }

  return [];
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

  let productsByFilters = filterByVariation(
    productsByCategory.length ? productsByCategory : products,
    filters
  );

  products = distinctBy(productsByFilters, "slug");

  return products;
}

// filter variants
export const filterVariants = (products, variation) => {
  return products.map((product) => product[variation]);
};

export const filterVariantsBy = (name, variantId, products) => {
  // console.log(products);

  return products.filter((product) => product[name] == variantId);
};
