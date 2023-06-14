// skill highlighting function

function highlightSkills() {
  // get the property of the accordion button element that shows which project is expanded
  const accordionOne = document
    .getElementById("headingOne")
    .firstElementChild.getAttribute("aria-expanded");
  const accordionTwo = document
    .getElementById("headingTwo")
    .firstElementChild.getAttribute("aria-expanded");
  const accordionThree = document
    .getElementById("headingThree")
    .firstElementChild.getAttribute("aria-expanded");

  // get icon elements
  const js = document.getElementById("javascriptIcon");
  const html = document.getElementById("HTMLIcon");
  const css = document.getElementById("CSSIcon");
  const react = document.getElementById("ReactIcon");
  const git = document.getElementById("gitIcon");
  const bootstrap = document.getElementById("bootstrapIcon");
  const node = document.getElementById("nodeIcon");
  // const python = document.getElementById("pythonIcon");
  // const ruby = document.getElementById("rubyIcon");
  const sql = document.getElementById("SQLIcon");
  // const linux = document.getElementById("LinuxIcon");
  const github = document.getElementById("gitHubIcon");

  if (accordionOne === "true") {
    // set inactive icons
    js.setAttribute("class", "col inactiveIcon");
    html.setAttribute("class", "col inactiveIcon");
    css.setAttribute("class", "col inactiveIcon");
    react.setAttribute("class", "col inactiveIcon");
    git.setAttribute("class", "col inactiveIcon");
    bootstrap.setAttribute("class", "col inactiveIcon");
    node.setAttribute("class", "col inactiveIcon");
    // linux.setAttribute("class", "col inactiveIcon");
    github.setAttribute("class", "col inactiveIcon");
    // python.setAttribute("class", "col inactiveIcon");
    // ruby.setAttribute("class", "col inactiveIcon");
    sql.setAttribute("class", "col inactiveIcon");
    // set live icons
    js.setAttribute("class", "col liveIcon");
    html.setAttribute("class", "col liveIcon");
    css.setAttribute("class", "col liveIcon");
    react.setAttribute("class", "col liveIcon");
    git.setAttribute("class", "col liveIcon");
    bootstrap.setAttribute("class", "col liveIcon");
    node.setAttribute("class", "col liveIcon");
    // linux.setAttribute("class", "col liveIcon");
    github.setAttribute("class", "col liveIcon");
    sql.setAttribute("class", "col liveIcon");

  } else if (accordionTwo === "true") {
    // set inactive icons
    js.setAttribute("class", "col inactiveIcon");
    html.setAttribute("class", "col inactiveIcon");
    css.setAttribute("class", "col inactiveIcon");
    react.setAttribute("class", "col inactiveIcon");
    git.setAttribute("class", "col inactiveIcon");
    bootstrap.setAttribute("class", "col inactiveIcon");
    node.setAttribute("class", "col inactiveIcon");
    // linux.setAttribute("class", "col inactiveIcon");
    github.setAttribute("class", "col inactiveIcon");
    // python.setAttribute("class", "col inactiveIcon");
    // ruby.setAttribute("class", "col inactiveIcon");
    sql.setAttribute("class", "col inactiveIcon");
    // set live icons
    react.setAttribute("class", "col liveIcon");
    sql.setAttribute("class", "col liveIcon");
    node.setAttribute("class", "col liveIcon");
    js.setAttribute("class", "col liveIcon");
    html.setAttribute("class", "col liveIcon");
    css.setAttribute("class", "col liveIcon");
    git.setAttribute("class", "col liveIcon");
    bootstrap.setAttribute("class", "col liveIcon");
    // linux.setAttribute("class", "col liveIcon");
    github.setAttribute("class", "col liveIcon");
  } else if (accordionThree === "true") {
    // set inactive icons
    js.setAttribute("class", "col inactiveIcon");
    html.setAttribute("class", "col inactiveIcon");
    css.setAttribute("class", "col inactiveIcon");
    react.setAttribute("class", "col inactiveIcon");
    git.setAttribute("class", "col inactiveIcon");
    bootstrap.setAttribute("class", "col inactiveIcon");
    node.setAttribute("class", "col inactiveIcon");
    // linux.setAttribute("class", "col inactiveIcon");
    github.setAttribute("class", "col inactiveIcon");
    // python.setAttribute("class", "col inactiveIcon");
    // ruby.setAttribute("class", "col inactiveIcon");
    sql.setAttribute("class", "col inactiveIcon");
    // set live icons
    js.setAttribute("class", "col liveIcon");
    git.setAttribute("class", "col liveIcon");
    node.setAttribute("class", "col liveIcon");
    // linux.setAttribute("class", "col liveIcon");
    github.setAttribute("class", "col liveIcon");
    sql.setAttribute("class", "col liveIcon");
  } else {
    // set live icons
    // set inactive icons
    js.setAttribute("class", "col inactiveIcon");
    html.setAttribute("class", "col inactiveIcon");
    css.setAttribute("class", "col inactiveIcon");
    react.setAttribute("class", "col inactiveIcon");
    git.setAttribute("class", "col inactiveIcon");
    bootstrap.setAttribute("class", "col inactiveIcon");
    node.setAttribute("class", "col inactiveIcon");
    // linux.setAttribute("class", "col inactiveIcon");
    github.setAttribute("class", "col inactiveIcon");
    // python.setAttribute("class", "col inactiveIcon");
    // ruby.setAttribute("class", "col inactiveIcon");
    sql.setAttribute("class", "col inactiveIcon");
  }
}

setInterval(highlightSkills, 1000);
