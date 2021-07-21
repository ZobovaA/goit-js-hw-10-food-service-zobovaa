import "./styles.css";

import menuTemplate from "./templates/menu.hbs";
import menu from "./menu.json";
const data = { items: menu };

const menuHTML = menuTemplate(data);

document.querySelector(".js-menu").innerHTML = menuHTML;

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const bodyEl = document.querySelector("body");
const checkEl = document.querySelector("#theme-switch-toggle");
bodyEl.classList.add(Theme.LIGHT);

const lightThemeFunc = () => {
  bodyEl.classList.add(Theme.LIGHT);
  bodyEl.classList.remove(Theme.DARK);
  localStorage.removeItem("theme");
  localStorage.setItem("theme", Theme.LIGHT);
};

const darkThemefunc = () => {
  bodyEl.classList.add(Theme.DARK);
  bodyEl.classList.remove(Theme.LIGHT);
  localStorage.removeItem("theme");
  localStorage.setItem("theme", Theme.DARK);
};

if (localStorage.getItem("theme") === Theme.DARK) {
  checkEl.checked = "true";
  darkThemefunc()
  
}

const changeThemeFunc = () => {
  if (!checkEl.checked) {
    lightThemeFunc();
  } else {
    darkThemefunc();
  }
};

checkEl.addEventListener("click", changeThemeFunc);

