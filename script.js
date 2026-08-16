const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");

menuToggle.addEventListener("click", () => {
    const isOpen = sideMenu.style.display === "block";

    if (isOpen) {
        sideMenu.style.display = "none";
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        document.body.classList.remove("menu-open");
    } else {
        sideMenu.style.display = "block";
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        document.body.classList.add("menu-open");
    }
});