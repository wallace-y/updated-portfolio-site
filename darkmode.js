
function darkMode() {
    const body = document.getElementById("body");
    const navBar = document.getElementById("navbar")
    const currentMode = body.getAttribute("class")
    const toggleButton = document.getElementById("toggleButton")
    // body.setAttribute("class","bg-dark")
    if (currentMode.includes("bg-light")) {
        body.setAttribute("class","bg-dark text-light")
        navBar.setAttribute("class","navbar sticky-top navbar-expand-lg navbar-dark border-bottom")
        toggleButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-toggle-on\" viewBox=\"0 0 16 16\">\
                                        <path d=\"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z\"/>\
                                </svg>"
        toggleButton.setAttribute("class","btn btn-light");
    } else {
        body.setAttribute("class","bg-light text-dark")
        navBar.setAttribute("class","navbar sticky-top navbar-expand-lg navbar-light border-bottom")
        toggleButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-toggle-off\" viewBox=\"0 0 16 16\">\n  <path d=\"M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z\"/>\n</svg>"
        toggleButton.setAttribute("class","btn");
    }
    console.log(body);
    console.log(currentMode);
    console.log(toggleButton);
}
