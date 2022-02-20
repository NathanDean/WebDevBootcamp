// Selects contact list, email h3 and form
const email = document.querySelector("#emailLink");
const form = document.querySelector("#formDiv");
const contactList = document.querySelector("#contactList");

// Records whether form is being displayed
let isFormActive = false;

// Toggles displaying of form on click
email.addEventListener("click", function(){
    contactList.classList.toggle("formActive");
    if(isFormActive === false){
        contactList.classList.toggle("formActiveWidth")
        form.classList.toggle("active");
        setTimeout(function(){
            form.classList.toggle("show");
        }, 1000);
    } else {
        form.classList.toggle("show");

        setTimeout(function(){
            form.classList.toggle("active");
        }, 750);
    }
    isFormActive = !isFormActive;
    }
);