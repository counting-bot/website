document.addEventListener("DOMContentLoaded", pageLoad);
pageLoad()

async function pageLoad(){    
    // nav buttons
    document.getElementById('togleNav').addEventListener('click', togleNav);
    document.getElementById('navLinkToggle').addEventListener('click', togleNav);
}

function togleNav(element) {
    const hide = element.srcElement.getAttribute("hide")
    const x = document.getElementById("nav");
    x.className = hide ? "topnav" : x.className === "topnav" ? "responsive" : "topnav"
}