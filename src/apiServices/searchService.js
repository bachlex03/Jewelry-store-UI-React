import * as request from "~/utils/request";

export const search = async (q) => {
  const result = await request.get("products/search", {
    params: {
      q,
    },
  });

  return result.data;
};
