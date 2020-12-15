// Module that will create an image of a dude putting a pizza inside an oven, a paragraph describing who Sal's Pizza is and append it to the body.

const createNavBar = (() => {
    const body = document.querySelector('body');

    const navBar = document.createElement('div')
    const pizzaShopName = document.createElement('h1');
    const tabs = document.createElement('div');

    pizzaShopName.textContent = "Sal's Pizza";
    navBar.id = 'navBar';
    navBar.appendChild(pizzaShopName);
    tabs.id = 'tabs';

    for (let i = 0; i < 3; i++) {
        const tab = document.createElement('span');
        i === 0 ? tab.textContent = 'Home'
        : i === 1 ? tab.textContent = 'Menu'
        : tab.textContent = 'Contact us';
        tab.id = `tab${i}`;
        tabs.appendChild(tab);
    }
    
    navBar.appendChild(tabs);
    body.appendChild(navBar);
    const tab0 = document.getElementById('tab0');
    tab0.classList.add('selected');
});

const createHome = (() => {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
    const businessDescription = document.createElement('div');
    businessDescription.id = 'businessDescription';
    document.querySelector('body').setAttribute('style', 'background: url("../src/images/hero.jpg") no-repeat center');

    const businessTagLine = document.createElement('h2');
    businessTagLine.classList.add('tagLine');
    businessTagLine.innerHTML = 'Home to the best pizza<br> since 1967';
    businessDescription.appendChild(businessTagLine);

    const businessHours = document.createElement('h3');
    businessHours.classList.add('tagDescription');
    businessHours.innerHTML = `Open 1pm-12pm<br> Monday through Sunday` ;
    businessDescription.appendChild(businessHours);

    const businessTagDescription = document.createElement('h3');
    businessTagDescription.classList.add('tagDescription');
    businessTagDescription.innerHTML = `In Sal's Pizza<br> we know what you want!` ;
    businessDescription.appendChild(businessTagDescription);

    contentContainer.appendChild(businessDescription);
});

export {createNavBar, createHome}