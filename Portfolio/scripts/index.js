// Selects title/menu div and explore h3
const title = document.querySelector("#title");
const menu = document.querySelector("#menu");
const explore = document.querySelector("#explore");
const goHome = document.querySelector("#goHome");

// Sets delay before functions are called to toggle display and opacity of title/menu/explore/goHome
const transitionTime = 900;

// Toggle classes to control display and opacity of title/menu/explore/goHome
function toggleDisplay(el){
    el.classList.toggle("none");
    el.classList.toggle("flex");
};

function toggleOpacity(el){
    el.classList.toggle("transparent");
};

// Collect functions that toggle display and opacity of title/menu/explore/goHome
function titleOff(){
    toggleOpacity(title);
    toggleOpacity(explore);
    toggleDisplay(menu);
    toggleDisplay(goHome);
};

function menuOn(){
    toggleOpacity(menu);
    toggleOpacity(goHome);
    toggleDisplay(title);
    toggleDisplay(explore);
};

function menuOff(){
    toggleOpacity(menu);
    toggleOpacity(goHome);
    toggleDisplay(title);
    toggleDisplay(explore);
};

function titleOn(){
    toggleDisplay(menu);
    toggleDisplay(goHome);
    toggleOpacity(title);
    toggleOpacity(explore);  
};

// Turns title off and menu on when user clicks explore
explore.addEventListener("click", function(){
    titleOff();
    // Allows title to fade out before beginning menu fade in
    setTimeout(function(){
        menuOn();
    }, transitionTime);
});

// Turns menu off and title on when user clicks goHome
goHome.addEventListener("click", function(){
    menuOff();
    // Allows menu to fade out before beginning title fade in
    setTimeout(function(){
        titleOn(); 
    }, transitionTime);
})