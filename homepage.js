function toggleNav() {
    var nav = document.querySelector('.navbar-menu');
    if(nav.className == "navbar-menu") {
        nav.className = "navbar-menu is-active";
    } else {
        nav.className = "navbar-menu";
    }
}


function passYear(newyear) {
    sessionStorage.setItem("new_year", newyear);
}
