const searchInput= document.querySelector('[data-search]');
const userCardTemplate = document.querySelector('[data-user-template]');
const userCardContainer = document.querySelector('[data-user-cards-container]');
let users = [];
import { blogs } from './data.js';

users = blogs.map(user => {//use mar or foreach
    const card = userCardTemplate.content.cloneNode(true).children[0];
    const blogTitle = card.querySelector("[first-section-title]");
    const publishedOn = card.querySelector("[publishedTime]");
    const blogLink = card.querySelectorAll('[first-section-link]');
    const blogImg = card.querySelector('[first-section-img]');
    const writtenBy = card.querySelector('[author]');
    blogTitle.textContent = user.title;
    publishedOn.textContent = user.publishedTime;
    blogImg.src = user.imgPath;
    writtenBy.textContent = user.author;
    blogLink.href = user.filePath;//doubt
    userCardContainer.append(card); 
    return { name:user.title,element:card};
});

searchInput.addEventListener("search",(e)=> {
    const value = e.target.value.toLowerCase() 
    var i;
    users.forEach(user=> {
        const isVisible = user.name.toLowerCase().includes(value);
        user.element.classList.toggle("hide",!isVisible);
        if (!isVisible == false) {
            i++;
        }
        else if (!isVisible==true) {
            i = 0;
        }
    });
    if(i==0){
        var a = document.getElementById("resulted");
        a.style.display = "block";
    }
    else{
        var a = document.getElementById("resulted");
        a.style.display = "none";
    }
});