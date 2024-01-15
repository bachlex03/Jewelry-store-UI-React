import * as request from "~/utils/request";

// [POST] /users/information
export const information = async () => {
  const result = request.get("/users/information");

  return result;
};

// [POST] /users/store
export const storeUser = async (options) => {
  const result = request.post("/users/store", options);

  return result;
};

// [POST] /users/user
export const checkUser = async (options) => {
  const result = await request.post("/users/user", options);

  return result;
};

// [PUT] /users/information/:email/update
export const updateInformation = async (options, param) => {
  const result = await request.put(
    `/users/information/${param}/update`,
    options
  );

  return result;
};
