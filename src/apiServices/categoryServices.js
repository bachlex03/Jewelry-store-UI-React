import * as request from "~/utils/request";

export const categories = async () => {
  const result = await request.get("categories");

  return result.data;
};
