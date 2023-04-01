import { contacts } from "./data.js";
let No_Of_Users = Object.keys(contacts).length;
export let usersImg=[];
let avatarId = (Math.random() + 1).toString(36).substring(7);
// const response = await fetch('https://api.multiavatar.com/'+JSON.stringify(avatarId)+'?apikey=8rPaJB6KhsX1Q9')
const response = await fetch('https://api.multiavatar.com/'+JSON.stringify(avatarId))
const Contactimg = await response.text();
for (let i = 0; i < No_Of_Users; i++) {
    // let avatarId = (Math.random() + 1).toString(36).substring(7);
    // const response = await fetch('https://api.multiavatar.com/'+JSON.stringify(avatarId)+'?apikey=8rPaJB6KhsX1Q9')
    // const Contactimg = await response.text();
    usersImg.push(Contactimg)
}