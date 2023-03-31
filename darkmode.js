
function darkMode() {
    const body = document.getElementById("body");
    const navBar = document.getElementById("navbar")
    const currentMode = body.getAttribute("class")
    // body.setAttribute("class","bg-dark")
    if (currentMode === "bg-light") {
        body.setAttribute("class","bg-dark text-light")
        navBar.setAttribute("class","navbar sticky-top navbar-expand-lg navbar-dark")
    } else {
        body.setAttribute("class","bg-light text-dark")
        navBar.setAttribute("class","navbar sticky-top navbar-expand-lg navbar-light")
    }
}
