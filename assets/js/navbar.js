class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
    <nav>
        <div class="nav-wrapper black">
            <a href="/login" class="right" id="login">Login</a>
            <a class="dropdown-trigger right valign-wrapper" href="#!" data-target="dropdown1" id="userDropdown"></a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="left hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/invite.html">Invite</a></li>
                <li><a href="/support.html">Support</a></li>
                <li><a href="/premium.html">Premium</a></li>
                <li><a href="/scores.html">Scores</a> </li>
                <li><a href="/userscores.html">User Scores</a></li>
                <li><a href="/privacy.html">Privacy</a></li>
                <li><a href="/status.html">Status</a></ul>
            </ul>
        </div>
    </nav>

    <ul class="sidenav black" id="mobile-demo">
        <li><a href="/" class="white-text">Home</a></li>
        <li><a href="/invite.html" class="white-text">Invite</a></li>
        <li><a href="/support.html" class="white-text">Support</a></li>
        <li><a href="/premium.html" class="white-text">Premium</a></li>
        <li><a href="/scores.html" class="white-text">Scores</a> </li>
        <li><a href="/userscores.html" class="white-text">User Scores</a></li>
        <li><a href="/privacy.html" class="white-text">Privacy</a></li>
        <li><a href="/status.html" class="white-text">Status</a></li>
    </ul>
    <ul id="dropdown1" class="dropdown-content black">
        <li><a href="/user.html" class="white-text">Servers</a></li>
        <li class="divider"></li>
        <li><a id="logoutButton" class="red-text darken-3">Logout</a></li>
    </ul>
    `;
        let element = document.createElement("link");
        element.rel = 'stylesheet'
        element.href="/assets/css/materialize.min.css"
        element.media="screen,projection"
        this.appendChild(element);

        document.getElementById("logoutButton").addEventListener("click", async event => {
            const logoutRequest = await fetch("https://api.numselli.xyz/discordOauth/logout", {credentials: "include"})
            if (logoutRequest.ok) window.location.pathname = "/"
        })

        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(elems, {});
        });


        (async ()=>{
            const ajaxdata = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"}).catch(err=>console.error);
            if (!ajaxdata.ok)return;
            
            let loginDiv = document.getElementById("login")
            loginDiv.style.display = "none";
            
            const userDropdown = document.getElementById("userDropdown")
    

            const ajaxdataJSON = await ajaxdata.json()
            let dropDownArrowName = document.createElement("span")
            dropDownArrowName.textContent=`${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`
            userDropdown.appendChild(dropDownArrowName)

            let dropDownArrowIMG = document.createElement("img")
            dropDownArrowIMG.src = `${ajaxdataJSON.avatarURL}?size=32`
            dropDownArrowIMG.alt = `${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`
            dropDownArrowIMG.classList = "center-align"
            dropDownArrowIMG.style = "border-radius: 50%; "
            userDropdown.appendChild(dropDownArrowIMG)
       
            let dropDownArrow = document.createElement("i")
            dropDownArrow.classList = 'material-icons right'
            dropDownArrow.textContent="arrow_drop_down"
            userDropdown.appendChild(dropDownArrow)
        })()
    }
}

customElements.define('nav-bar', MyComponent);