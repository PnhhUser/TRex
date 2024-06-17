import moment from "moment";
import Cookies from "js-cookie";
import { REGEX_EMAIL } from "../constants/regex";

export const getCookie = (key) => {
  return Cookies.get(key);
};

export const removeCookie = (key) => {
  return Cookies.remove(key);
};

export const setCookie = (key, value, option) => {
  return Cookies.set(key, value, option);
};

export const sleep = (ms) => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve(), ms);
  });
};

export const isValidEmail = (email) => {
  return !email.match(REGEX_EMAIL) ? false : true;
};

export const currentDatetime = () => {
  return moment().local("vi").format("LLLL");
};

export const setLocalStorage = (key, obj) => {
  return localStorage.setItem(key, JSON.stringify(obj));
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const delLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const isFileImage = (file) => {
  return file && file["type"].split("/")[0] === "image";
};

export const urlImage = (file) => {
  if (isFileImage(file)) {
    return URL.createObjectURL(file);
  }
};
