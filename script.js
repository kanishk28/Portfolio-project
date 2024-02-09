function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobilenav-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}