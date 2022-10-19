function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
const slider = tns({
    container : ".my-slider",
    "slideBy" : 1,
    "speed" : 400,
    "nav" : false,
    loop:false,
    // controlsContainer : "#controls",
    prevButton : ".previous",
    nextButton :".next",
    mouseDrag : true,
    responsive: {
        1600:{
            items:4,
            gutter:20
        },
        1024:{
            items:3,
            gutter:20    
        },
        768:{
            items:2,
            gutter:20    
        },
        480:{
            items:1
        }
    }
})