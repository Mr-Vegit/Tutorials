import { contacts } from "./data.js";
import { usersImg } from "./avatarapi.js";
console.log(usersImg);
const contactTemplate = document.getElementById('contact-template');
const contactContainer = document.getElementById('contacts-container');
contacts.forEach((user, i) => {
    const Card = contactTemplate.content.cloneNode(true).children[0];
    Card.querySelector('.contact-img').innerHTML = usersImg[i];
    Card.querySelector('.contact-Name').textContent = user;
    contactContainer.append(Card);
});
let Each_Contact = Array.from(document.getElementsByClassName('contact'));
Each_Contact.forEach(user => {
    user.addEventListener('click', (e) => {
        Each_Contact.forEach(data => {
            data.classList.remove('active-contact');
            data.classList.add('inactive-contact');
        });
        e.target.classList.add('active-contact');
        // e.target.classlist.remove('inactive-contact');
        document.getElementById('Conversation').textContent = e.target.textContent;
    })
})