// Module where the menu will display and append it to the body.
let menuItems = [
    {
        'name': 'Pepperoni',
        'price': '6.5€',
        'description': 'Always a favorite',
        'img': '../src/images/pepperoni.jpg',
    }, 
    {
        'name': 'Vegan',
        'price': '7€',
        'description': 'Various vegetables',
        'img': '../src/images/vegan.jpg',
    }, 
    {
        'name': 'Tonno',
        'price': '6€',
        'description': 'Tuna as the main ingredient',
        'img': '../src/images/tonno.jpg',
    }, 
    {
        'name': 'Vegan',
        'price': '7€',
        'description': 'Various vegetables',
        'img': '../src/images/vegan.jpg',
    }, 
    {
        'name': 'Tonno',
        'price': '6€',
        'description': 'Tuna as the main ingredient',
        'img': '../src/images/tonno.jpg',
    },
    {
        'name': 'Vegan',
        'price': '7€',
        'description': 'Various vegetables',
        'img': '../src/images/vegan.jpg',
    }, 
    {
        'name': 'Tonno',
        'price': '6€',
        'description': 'Tuna as the main ingredient',
        'img': '../src/images/tonno.jpg',
    },
    ]

const createMenu = (() => {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
    const menuItem = document.createElement('div');
    menuItem.id = 'menuItems';
    document.querySelector('body').setAttribute('style', 'background: var(--accent)');

    for (let i = 0; i < menuItems.length; i++) {
        const item = document.createElement('div');
        const name = document.createElement('h4');
        name.textContent = menuItems[i].name;
        const price = document.createElement('p');
        price.textContent = menuItems[i].price;
        const description = document.createElement('p');
        description.textContent = menuItems[i].description;
        const img = document.createElement('img');
        img.classList.add('itemImg');
        img.src = menuItems[i].img;
        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(description);
        item.appendChild(price);
        item.classList.add('menuItem');
        menuItem.appendChild(item);
    }

    contentContainer.appendChild(menuItem);

});

export {createMenu}