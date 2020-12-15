import {createContact} from './contact-module'
import {createHome, createNavBar} from './home-module.js'
import {createMenu} from './menu-module'

createNavBar();
createHome();

const changeSelected = (clickedButton) => {
    const buttonSelected = document.querySelector('.selected');
    buttonSelected.classList.remove('selected');
    clickedButton.target.classList.add('selected');
}

const menuButton = document.getElementById('tab1');
menuButton.addEventListener('click', (e) => {
    changeSelected(e);
    createMenu();
});

const homeButton = document.getElementById('tab0');
homeButton.addEventListener('click', (e) => {
    changeSelected(e);
    createHome();
});

const contactButton = document.getElementById('tab2');
contactButton.addEventListener('click', (e) => {
    changeSelected(e);
    createContact();
});