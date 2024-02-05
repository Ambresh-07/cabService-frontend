import { myaxios } from "./helper";

export const saveuser = (user) => {
  return myaxios.post("/api/user", user).then((response) => response.data);
};

export const getallusers = () => {
  return myaxios.get("/api/user").then((response) => response.data);
};

export const deleteUser = (id) => {
  return myaxios.delete("/api/" + id).then((response) => response.data);
}
