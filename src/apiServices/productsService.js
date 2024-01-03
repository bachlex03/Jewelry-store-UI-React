import * as request from "~/utils/request";

export const products = async () => {
  const result = await request.get("products");

  return result.data;
};
