let icon = document.querySelector("#hamburger");
icon.addEventListener("click", toggleHamburger);

function toggleHamburger (){
    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars", "fa-xmark");
        document.getElementById("navbar").style.backgroundColor="#131B1A";
        document.querySelector("ul").style.display = "block";
    }
    else{
        icon.classList.replace("fa-xmark", "fa-bars");
        document.getElementById("navbar").style.backgroundColor="#070600";
        document.querySelector("ul").style.display = "none";
    }
};


