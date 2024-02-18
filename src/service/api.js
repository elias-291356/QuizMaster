import axios from "axios";

const BASE_URL = "https://65c85544a4fbc162e111adeb.mockapi.io/";
const $instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = (token) => {
  $instance.defaults.headers.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  $instance.defaults.headers.Authorization = "";
};

//Auth Controller
export const loginRequest = async (formData) => {
  const { data } = await $instance.post("/api/auth/sign-in", formData);
  setToken(data.token);
  return data;
};
export const registerRequest = async (formData) => {
  const { data } = await $instance.post("/api/auth/sign-up", formData);

  setToken(data.token);

  return data;
};
// export const logOutRequest = async () => {
//   const { data } = await $instance.delete('/api/auth/sign-out');
//   clearToken()
//   return data;
// };
