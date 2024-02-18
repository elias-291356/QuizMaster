import axios from "axios";

const BASE_URL = "https://quiz-master-s113.onrender.com/";
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
  const { data } = await $instance.post("/api/auth/signin", formData);
  setToken(data.token);
  return data;
};
export const registerRequest = async (formData) => {
  const { data } = await $instance.post("/api/auth/signup", formData);
  setToken(data.token);
  return data;
};
// export const logOutRequest = async () => {
//   const { data } = await $instance.delete('/api/auth/sign-out');
//   clearToken()
//   return data;
// };
