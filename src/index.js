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


const checkEl = document.querySelector('#theme-switch-toggle');
checkEl.addEventListener('change', switchedInput);

function switchedInput(event) {
  event.currentTarget.checked ? checkedInput() : notCheckedInput();
}

function checkedInput() {
  document.body.classList.add('dark-theme');
  document.body.classList.remove('light-theme');
  localStorage.setItem('theme', 'dark-theme');
  checkEl.checked = true;
}


function notCheckedInput() {
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');
  localStorage.setItem('theme', 'light-theme');
  checkEl.checked = false;
}

function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light-theme' || savedTheme === null) {
    notCheckedInput();
    return;
  }

  if (savedTheme === 'dark-theme') {
    checkedInput();
    return;
  }
}

currentTheme();
