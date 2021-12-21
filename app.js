const themeToggle = document.getElementById("toggle");
const icon = document.querySelector(".icon")

themeToggle.addEventListener("change", changeTheme);

function changeTheme(){
    if(this.checked){
        document.documentElement.setAttribute("data-theme", "darktheme");
        
        // change the icon
        icon.classList.remove("fa-moon-o");
        icon.classList.add("fa-sun-o");
    }else{
        document.documentElement.setAttribute("data-theme", "lighttheme");

        // change the icon
        icon.classList.remove("fa-sun-o");
        icon.classList.add("fa-moon-o");
    }
}