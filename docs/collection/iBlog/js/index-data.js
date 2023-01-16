// Initiates variables
const userCardTemplate = document.querySelector('[data-user-template]');
const userCardContainer = document.querySelector('[data-user-cards-container]');
const searchInput= document.querySelector('[data-search]');
const searchTemplate = document.querySelector('[data-search-template]');
const searchContainer = document.querySelector('[search-user-container]');
import { blogs } from './data.js';
let users = [];

let blog = [
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/1.jpg", filePath: "blogs/1.html", },//1
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/2.png", filePath: "blogs/2.html", },//2
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/3.png", filePath: "blogs/3.html", },//3
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/4.png", filePath: "blogs/4.html", },//4
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/5.jpg", filePath: "blogs/5.html", },//5
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/6.jpg", filePath: "blogs/6.html", },//6
    // { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/7.jpg", filePath: "blogs/7.html", },//7
    // { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/8.jpg", filePath: "blogs/8.html", },//8
]

// WARNING : Do NOT TOUCH 


// Writes all the featured articles in our website
blog.forEach(user => {//use mar or foreach
    const card = userCardTemplate.content.cloneNode(true).children[0];
    const blogTitle = card.querySelector("[second-section-title]");
    const publishedOn = card.querySelector("[publishedTime]");
    const blogLink = card.querySelectorAll('[second-section-link]');
    const blogImg = card.querySelector('[second-section-img]');
    const writtenBy = card.querySelector('[author]');
    blogTitle.textContent = user.title;
    publishedOn.textContent = user.publishedTime;
    blogImg.src = user.imgPath;
    writtenBy.textContent = user.author;
    blogLink.href = user.filePath;//doubt
    userCardContainer.append(card); 
});

// Used for showing results while searching
users = blogs.map(user=>{
    const dataCard = searchTemplate.content.cloneNode(true).children[0];
    const blogTitle = dataCard.querySelector("[search-title]");
    blogTitle.textContent = user.title;
    blogTitle.href = user.filePath;//doubt
    searchContainer.append(dataCard); 
    return { name:user.title,element:dataCard};
});

// Search bar work is done here
searchInput.addEventListener("input",(e)=> {
    // This shows all the blogs in our website in the search result
    const submit =document.querySelector("[search-submit]");
    submit.value ="X";
    submit.style.transform = "rotate(0deg)";
    submit.style.fontSize = "35px";
    const x = document.querySelectorAll("[search-title]");
    x.forEach(list=>{
        list.style.display="block";
    })
    
    // This checks if there is any title of a blog associated with the search
    var i;
    const value = e.target.value.toLowerCase() 
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

    // This shows no result found when no answer is found
    if(i==0){
        var a = document.getElementById("result");
        a.style.display = "block";
    }
    else{
        var a = document.getElementById("result");
        a.style.display = "none";
    }
});