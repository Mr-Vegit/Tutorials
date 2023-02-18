const userCardTemplate = document.querySelector('.recents-anime-template');
const userCardContainer = document.querySelector('#recents-anime-container');
let users=[];
const params= {method: 'GET'};
let proxy = 'https://cors.consumet.stream/';
let page = document.getElementById("pagename").textContent.trim();
let type = document.getElementById("type").textContent.trim();
let typecheck=""
let correcttype = ""
if (type.includes("recent-release")) {
    typecheck="";
    type=""
}else{
    typecheck="&"+"type="+type;
    correcttype=type
}
let pagename = "page="+page;
const response = await fetch(proxy+'https://gogoanime.consumet.stream/recent-release?'+pagename+typecheck,params);
const animeRecents = await response.json();
function limitWord(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}
console.log(animeRecents);
users = animeRecents.map(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0];
    const AnimeTitle = card.querySelector(".recents-anime-title");
    const AnimeEpisode = card.querySelector(".recents-anime-episode");
    const AnimeImg = card.querySelector('.recents-anime-img');
    const AnimeLink = card.querySelector('.recents-anime-link');
    const AnimeSuborDub = card.querySelector('.recent-sub-or-dub');
    AnimeTitle.textContent =limitWord(user.animeTitle,7) ;
    AnimeEpisode.textContent = 'episode'+user.episodeNum;
    AnimeSuborDub.textContent = user.subOrDub;
    AnimeImg.src = `${proxy+user.animeImg}`;
    AnimeLink.href = '/'+'anime-watch'+'/'+user.animeId+'?'+"id="+user.episodeNum;
    userCardContainer.append(card); 
    return { name:user.episodeId,sub:user.subOrDub,elem:AnimeSuborDub,element:card};
});
users.forEach(user => {
    if (user.sub.toLowerCase().includes("dub")) {
        user.elem.style.backgroundColor="rgb(0 135 199";
    }else{
        user.elem.style.backgroundColor="red";
    }
});
let pagenum=parseInt(page,10)
let pages_li = Array.from(document.getElementsByClassName('pages-a'))
let first_page = document.getElementById("first-page")
let last_page = document.getElementById("last-page")
first_page.href = "/recent-release/1"+"?"+"type="+correcttype;
last_page.href = "/recent-release/22"+"?"+"type="+correcttype;
if (pagenum<=2) {
    pagenum=2
    let object = [
        {id:pagenum,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
    ]
    pages_li.forEach((element, i) => {
       element.innerHTML = object[i].num  
       element.href = object[i].link  
    });
}else if(pagenum>2){
    pagenum++;
    let object = [
        {id:pagenum,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
    ]
    pages_li.forEach((element, i) => {
       element.innerHTML = object[i].num  
       element.href = object[i].link  
    });

}
// else if(pagenum == 500){
//     pages_li.forEach((element) => {
//         element.style.display="none"
//      });
// }
else{
    pagenum=2
    let object = [
        {id:pagenum,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
        {id:pagenum++,num:pagenum,link:"/recent-release/"+pagenum+"?"+"type="+correcttype},
    ]
    pages_li.forEach((element, i) => {
       element.innerHTML = object[i].num  
       element.href = object[i].link  
    });
}