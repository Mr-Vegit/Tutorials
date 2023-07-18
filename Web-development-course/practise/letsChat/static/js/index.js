const contactTemplate = document.getElementById('contact-template');
const contactContainer = document.getElementById('contacts-container');
const chatContainer = document.getElementById('chat-container');
const ChatTemplate = document.getElementById('chat-template');
const owner = document.getElementById('owner');
import { usersImg } from "./avatarapi.js";

const response = await fetch('/api/get-users');
const Import_Users = await response.json();

// FUNCTIONS
function change_active_contact(e) {
    Users_Created.forEach(user => {
        user.element.classList.remove('active-contact');
        user.element.classList.add('inactive-contact');
    });
    if (document.getElementById('conversation-contact').classList.contains('hide')) {
        document.getElementById('conversation-contact').classList.remove('hide');
        document.getElementById('send-chat-container').classList.remove('hide');
    }
    document.getElementById('conversation-contact-img').innerHTML = e.target.children[0].innerHTML;
    document.getElementById('conversation-contact-Name').textContent = e.target.textContent;
}
async function delete_prev_chats() {
    let chat = Array.from(document.getElementById('chat-container').querySelectorAll('.chat-card'));
    if (chat) {
        chat.forEach(data => {
            data.remove();
        })
    }
}
async function generate_chats(userName) {
    await delete_prev_chats();
    let Chat = await fetch('/api/get-messages?UserName=' + userName.trim());
    let Chat_Imported = await Chat.json();
    console.log(Chat_Imported);
    Chat_Imported.map(user => {
        const Card = ChatTemplate.content.cloneNode(true).children[0];
        let message = Card.querySelector('.chat-message')
        message.textContent = user.message;
        if (user.Sender == owner.textContent) {
            message.classList.add('chat-sender-owner');
        } else {
            message.classList.add('chat-sender-other');
        }
        chatContainer.append(Card);
        return { element: Card };
    });
}
// CARD CREATION
let Users_Created = Import_Users.map(user => {
    const Card = contactTemplate.content.cloneNode(true).children[0];
    Card.querySelector('.contact-img').innerHTML = usersImg;
    Card.querySelector('.contact-Name').textContent = user.UserName;
    contactContainer.append(Card);
    return { element: Card, UserName: user.UserName };
});
document.getElementById('profile-img').innerHTML = usersImg;
document.getElementById('profile-Name').textContent = owner.textContent;

// EVENT LISTENERS
Array.from(document.querySelectorAll('button.contact')).forEach(user => {
    user.addEventListener('click', async (e) => {
        console.log(e.target);
        change_active_contact(e)
        e.target.classList.add('active-contact');
        e.target.classList.remove('inactive-contact');
        let UserName = e.target.textContent;
        await generate_chats(UserName);
    })
})
document.getElementById('send-chats').addEventListener('search', async (e) => {
    if (e.target.value === '') {
        console.log('empty');
    } else {
        await send_chats(e.target.value);
        e.target.value = '';
        let userName = document.getElementById('conversation-contact-Name').textContent;
        generate_chats(userName);
    }
});
document.getElementById('send-chat-btn').addEventListener('click', async () => {
    let message = document.getElementById('send-chats').value;
    if (message === '') {
        return;
    } else {
        await send_chats(message);
        document.getElementById('send-chats').value = '';
        let userName = document.getElementById('conversation-contact-Name').textContent;
        generate_chats(userName);
    }
});
async function send_chats(message) {
    let userName = document.getElementById('conversation-contact-Name').textContent;
    let Send_Chat = await fetch('/api/send-messages?UserName=' + userName + '&message=' + message)
    let Confirm_sent = await Send_Chat.json();
    console.log(Confirm_sent);
}
