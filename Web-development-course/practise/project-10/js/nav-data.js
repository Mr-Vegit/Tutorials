const searchInput= document.querySelector('[data-search]');
const searchTemplate = document.querySelector('[data-search-template]');
const searchContainer = document.querySelector('[search-user-container]');
import { blogs } from './data.js';
let users = [];
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
searchInput.addEventListener("search",(e)=> {
    // This shows all the blogs in our website in the search result
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