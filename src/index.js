import './styles.css';

import menuTemplate from './templates/menu.hbs'
import menu from './menu.json'
const data = {items: menu}
console.log(data)
const menuHTML = menuTemplate(data)
console.log(menuHTML)
document.querySelector('.js-menu').innerHTML = menuHTML  


