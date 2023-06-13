
let icon = document.querySelector("#hamburger");
let popup = document.querySelector(".popup");

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

popup.addEventListener("click", function(){
    alert("Sorry, this project is only available to view upon request. Kindly contact me to learn more about it.");
});




