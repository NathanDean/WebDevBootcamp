const btn = document.querySelector("#myBtn");

const modal = document.querySelector("#myModal");

const closeBtn = document.querySelector("#close");

btn.onclick = () => {
    // modal.style.display = "block";
    modal.classList.toggle("active");
    btn.classList.toggle("inactive");
}

closeBtn.onclick = () => {
    // modal.style.display = "none";
    modal.classList.toggle("active");
    btn.classList.toggle("inactive");
}