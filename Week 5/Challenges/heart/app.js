const container = document.querySelector(".container");

const createHeart = () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3000) + 3000 + "ms";
    container.appendChild(heart);
}

const removeHeart = () => {
    const heartArray = document.querySelectorAll(".heart");
    if(heartArray.length > 200){
        heartArray[0].remove();
    }
}

setInterval(createHeart, 100);
setInterval(removeHeart, 100);