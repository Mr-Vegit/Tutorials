let indexItems = Array.from(document.getElementsByClassName('second-section-items'));
let indexlinks = Array.from(document.getElementsByClassName('second-section-txt'));
let blogs = [
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/1.jpg", filePath: "blogs/1.html", },//1
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/2.png", filePath: "blogs/2.html", },//2
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/3.png", filePath: "blogs/3.html", },//3
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/4.png", filePath: "blogs/4.html", },//4
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/5.jpg", filePath: "blogs/5.html", },//5
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/6.jpg", filePath: "blogs/6.html", },//6
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/7.jpg", filePath: "blogs/7.html", },//7
    { title: "Basics of C programming", author: "by Kingshuk", publishedTime: "15 Jaunary 2023", imgPath: "img/8.jpg", filePath: "blogs/8.html", },//8
]

// WARNING : Do NOT TOUCH 

indexItems.forEach((element, i) => {  //This function displays texts like title author name etc in the website
    element.getElementsByTagName("img")[0].src = blogs[i].imgPath;
    element.getElementsByTagName("a")[0].href = blogs[i].filePath; // This function helps the anchor tags bry providing them with links
    element.getElementsByClassName("second-section-title")[0].innerText = blogs[i].title;
    element.getElementsByClassName("author")[0].innerText = blogs[i].author;
    element.getElementsByClassName("publishedTime")[0].innerText = blogs[i].publishedTime;
})
indexlinks.forEach((element, i) => {// This function helps the anchor tags bry providing them with links
    element.getElementsByTagName("a")[0].href = blogs[i].filePath;
})

// SEARCH BAR FUNCTIONS 


// get search bar element
const searchInput = document.getElementById("search-bar");

// store name elements in array-like object
// const namesFromDOM = document.getElementsByClassName("second-section-title");

// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;

    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();

    for (title of blogs) {
        // store name text and convert to lowercase
        let name = blogs.title.toLowerCase();

        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.style.display = "";
        } else {
            // no match, don't display name
            nameElement.style.display = "none";
        }
    }
});