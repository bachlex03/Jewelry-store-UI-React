import * as request from "~/utils/request";

export const getColors = async () => {
  const result = await request.get("sites/colors");

  return result.data;
};

export const getSizes = async () => {
  const result = await request.get("sites/sizes");

  return result.data;
};

export const storeColor = async (options) => {
  const result = await request.post("sites/color", options);

  return result;
};

export const storeSize = async (options) => {
  const result = await request.post("sites/size", options);

  return result;
};
