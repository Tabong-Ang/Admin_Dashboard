const sidebarDisplay = document.querySelector(".sidebar");
const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    sidebarDisplay.classList.toggle("active");
    if(!sidebarDisplay.classList.contains("active")) {
        sidebarDisplay.style.display = "block";
    } else if (sidebarDisplay.classList.contains("active")) {
        sidebarDisplay.style.display = "none";
    }

})