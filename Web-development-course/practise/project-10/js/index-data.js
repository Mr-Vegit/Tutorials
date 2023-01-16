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

searchInput.addEventListener("input",(e)=> {
    var x = document.getElementById("search-title-name");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
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
        var a = document.getElementById("result");
        a.style.display = "block";
    }
    else{
        var a = document.getElementById("result");
        a.style.display = "none";
    }
});


// indexItems.forEach((element, i) => {  //This function displays texts like title author name etc in the website
//     element.getElementsByTagName("img")[0].src = blogs[i].imgPath;
//     element.getElementsByTagName("a")[0].href = blogs[i].filePath; // This function helps the anchor tags bry providing them with links
//     element.getElementsByClassName("second-section-title")[0].innerText = blogs[i].title;
//     element.getElementsByClassName("author")[0].innerText = blogs[i].author;
//     element.getElementsByClassName("publishedTime")[0].innerText = blogs[i].publishedTime;
// })
// indexlinks.forEach((element, i) => {// This function helps the anchor tags bry providing them with links
//     element.getElementsByTagName("a")[0].href = blogs[i].filePath;
// })