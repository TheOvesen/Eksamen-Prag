var menu = document.getElementsByClassName("mobile_menu")[0];
var menuButton = document.getElementsByClassName("mobile_menu_icon")[0];
var content = document.getElementsByClassName("content")[0];
var sidebar = document.getElementsByClassName("sidebar")[0];
var menuVisible = 0;

menuButton.addEventListener("click", function()
{
    if (menuVisible == 0)
    {
        menuVisible = 1;
    }
    else
    {
        menuVisible = 0;
    }

    setLayout();
});

window.addEventListener("resize", function()
{
    if (window.innerWidth > 900)
    {
        menuVisible = -1;
    }

    setLayout();
})

function setLayout()
{
    if (menuVisible == 1)
    {
        menu.style.top = "38vh";
        menu.style.opacity = "1";
        content.style.top = "80vh";
        sidebar.style.height = "80vh";
    }

    if (menuVisible == 0)
    {
        menu.style.top = "0";
        menu.style.opacity = "0";
        content.style.top = "33vh";
        sidebar.style.height = "33vh";
    }

    if (menuVisible == -1)
    {
        menu.style.top = "0";
        menu.style.opacity = "0";
        content.style.top = "0";
        sidebar.style.height = "100vh";
        menuVisible = 0;
    }
}