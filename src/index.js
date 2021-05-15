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

const switchControl = document.querySelector(".theme-switch__control");

const switchBtn = document.querySelector(".theme-switch__track");
const checkEl = document.querySelector(".theme-switch__toggle");

const onBtnClickDark = () => {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
};

checkEl.addEventListener("click", onBtnClickDark);
