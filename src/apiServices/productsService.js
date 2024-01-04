import * as request from "~/utils/request";

export const products = async () => {
  const result = await request.get("products");

  return result.data;
};

export const details = async (param) => {
  const result = await request.get(`products/${param}`);

  return result.data;
};

export const store = async (options) => {
  const result = await request.post("products/store", options);

  return result;
};
