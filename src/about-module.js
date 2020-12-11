// Module that will create an image of a dude putting a pizza inside an oven, a paragraph describing who Sal's Pizza is and append it to the body.

const createMenu = (() => {
    const body = document.querySelector('body');

    const navBar = document.createElement('div')
    const pizzaShopName = document.createElement('h1');
    const tabs = document.createElement('div');

    pizzaShopName.textContent = "Sal's Pizza";
    navBar.id = 'navBar';
    navBar.appendChild(pizzaShopName);
    tabs.id = 'tabs'

    for (let i = 0; i < 3; i++) {
        const tab = document.createElement('h2');
        i == 0 ? tab.textContent = 'Home'
        : i == 1 ? tab.textContent = 'Menu'
        : tab.textContent = 'About us';
        tab.id = `tab${i}`
        tabs.appendChild(tab)
    }
    
    navBar.appendChild(tabs);
    body.appendChild(navBar);
    const tab0 = document.querySelector('h2');
    tab0.classList.add('selected');
})();





export {createMenu}