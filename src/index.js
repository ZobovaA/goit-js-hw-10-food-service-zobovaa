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

const checkEl = document.querySelector("#theme-switch-toggle");

function onClick(e) {
  if (checkEl.checked = true) {
    return localStorage.setItem("theme", "dark-theme");
   
  }
}

checkEl.addEventListener("click", onClick);

function isBlackTheme() {
return localStorage.getItem('theme')=== Theme.DARK

}

console.log(isBlackTheme());
