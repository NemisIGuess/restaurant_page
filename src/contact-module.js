// Module that will create an unordered list out of the Telephone, Email and phisical direction and append it to the body.
const createContact = (() => {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contactDiv';
    document.querySelector('body').setAttribute('style', 'background: var(--accent)');

    const businessPhone = document.createElement('h2');
    businessPhone.classList.add('tagLine');
    businessPhone.setAttribute('style', 'color: var(--blue)');
    businessPhone.innerHTML = "If you have any doubts call us<br> at 555-Sal's pizza";
    contactDiv.appendChild(businessPhone);

    const businessEmail = document.createElement('h3');
    businessEmail.classList.add('tagDescription');
    businessEmail.setAttribute('style', 'color: var(--blue)');
    businessEmail.innerHTML = `Or send us an email<br> at salspizza@gmail.com` ;
    contactDiv.appendChild(businessEmail);

    contentContainer.appendChild(contactDiv);
});

export {createContact}