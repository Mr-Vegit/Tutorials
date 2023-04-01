const searchInput= document.querySelector('[search-input]');
const searchTemplate = document.querySelector('#search-result-template');
const searchContainer = document.querySelector('#search-result-container');
const Container_Search = document.querySelector('#search-container');
import { data } from './data.js';
console.log(data.location);
let users = [];
users = data.location.map(user=>{
    const dataCard = searchTemplate.content.cloneNode(true).children[0];
    const LocationTitle = dataCard.querySelector(".search-title-name");
    LocationTitle.textContent = user;
    // LocationTitle.href = user.filePath;//doubt
    LocationTitle.style.display="none";
    searchContainer.append(dataCard); 
    return { name:user,element:dataCard};
});
searchInput.addEventListener("focus",()=> {
    document.getElementById('search-result-container').style.display = 'block'
})
searchInput.addEventListener("focusout",()=> {
    document.getElementById('search-result-container').style.display = 'none'
})
// Search bar work is done here
searchInput.addEventListener("input",(e)=> {
    // console.log('hi');
    // This shows all the Locations in our website in the search result
    const x = document.querySelectorAll(".search-title-name");
    x.forEach(user=>{
        user.style.display="block";

    })
    
    // This checks if there is any title of a Location associated with the search
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
    // if(i==0){
    //     var a = document.getElementById("result");
    //     a.style.display = "block";
    // }
    // else{
    //     var a = document.getElementById("result");
    //     a.style.display = "none";
    // }
});