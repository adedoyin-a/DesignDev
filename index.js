let icon = document.querySelector("#hamburger");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".modal-overlay");
let openModal = document.querySelectorAll(".popup");
let closeModal = document.querySelector("#close-modal");
const body = document.querySelector("body");
// let modal_btn = document.querySelector("contact-btn"); 

icon.addEventListener("click", toggleHamburger);

function toggleHamburger (){
    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars", "fa-xmark");
        document.getElementById("navbar").style.backgroundColor="#131B1A";
        document.getElementById("navbar").style.height="240px";
        document.getElementById("navbar").style.paddingBottom="16px";
        document.querySelector("ul").style.display = "block";
    }
    else{
        icon.classList.replace("fa-xmark", "fa-bars");
        document.getElementById("navbar").style.backgroundColor="#070600";
        document.getElementById("navbar").style.height="70px";
        document.getElementById("navbar").style.paddingBottom="16px";
        document.querySelector("ul").style.display = "none";
    }
};
for (var i = 0; i < document.querySelectorAll(".popup").length; i++){
openModal.addEventListener("click","popUp");
}


function popUp (){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.style.overflow = "hidden";
    event.preventDefault()
};

// modal_btn.addEventListener("click", function (){
//     window.open("mailto:adedoyin.designdev@gmail.com");
// });


closeModal.addEventListener("click", closePopUp);

function closePopUp (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    body.style.overflow = "auto";
}
