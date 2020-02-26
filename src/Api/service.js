/* eslint-disable */
import { Get, Post, Put, Delete } from "./instance";

export default {
  Login: param => Post("/auth/login", param),
  GetTest: url => Get(url,{},{})
};
