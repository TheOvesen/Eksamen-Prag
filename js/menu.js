var menu = document.getElementsByClassName("mobile_menu")[0];
var menuButton = document.getElementsByClassName("mobile_menu_icon")[0];
var content = document.getElementsByClassName("content")[0];
var sidebar = document.getElementsByClassName("sidebar")[0];
var facebook = document.getElementsByClassName("menu_facebook")[0];
var instagram = document.getElementsByClassName("menu_instagram")[0];
var menuVisible = 0;

function setLayout() {
    "use strict";
    if (menuVisible === 1) {
        menu.style.top = "38vh";
        menu.style.opacity = "1";
        menu.style.zIndex = "3";
        content.style.top = "80vh";
        sidebar.style.height = "80vh";
        instagram.style.opacity = "1";
        instagram.style.zIndex = "3";
        facebook.style.opacity = "1";
        facebook.style.zIndex = "3";
    }

    if (menuVisible === 0) {
        menu.style.top = "0";
        menu.style.opacity = "0";
        menu.style.zIndex = "1";
        content.style.top = "33vh";
        sidebar.style.height = "33vh";
        instagram.style.opacity = "0";
        instagram.style.zIndex = "1";
        facebook.style.opacity = "0";
        facebook.style.zIndex = "1";
    }

    if (menuVisible === -1) {
        menu.style.top = "0";
        menu.style.opacity = "0";
        menu.style.zIndex = "1";
        content.style.top = "0";
        sidebar.style.height = "100vh";
        instagram.style.opacity = "1";
        instagram.style.zIndex = "3";
        facebook.style.opacity = "1";
        facebook.style.zIndex = "3";
        menuVisible = 0;
    }
}

menuButton.addEventListener("click", function () {
    "use strict";
    if (menuVisible === 0) {
        menuVisible = 1;
    } else {
        menuVisible = 0;
    }

    setLayout();
});

window.addEventListener("resize", function () {
    "use strict";
    if (window.innerWidth > 900) {
        menuVisible = -1;
    }

    setLayout();
});