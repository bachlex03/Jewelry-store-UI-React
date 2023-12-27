import * as request from "~/utils/request";

export const search = async (q, type = "less") => {
  const result = await request.get("users/search", {
    params: {
      q,
      type,
    },
  });

  return result.data;
};
