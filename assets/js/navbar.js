class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
    <nav>
        <div class="nav-wrapper black">
            <a href="/login" class="right" id="login">Login</a>
            <a class="dropdown-trigger right valign-wrapper" href="#!" data-target="dropdown1" id="userDropdown"></a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="left hide-on-med-and-down">
                <li><a href="/" id="navLinkInvite">Home</a></li>
                <li><a href="/invite.html" id="navLinkInvite">Invite</a></li>
                <li><a href="/support.html">Support</a></li>
                <li><a href="https://donatebot.io/checkout/672259037861117964" rel="nofollow noopener" target="_blank" id="navLinkPremium">Premium</a></li>
                <li><a href="/scores.html" id="navLinkScores">Scores</a> </li>
                <li><a href="/userscores.html" id="navLinkUserScores">User Scores</a></li>
                <li><a href="/privacy.html" id="navLinkPrivacy">Privacy</a></li>
                <li><a href="/status.html" id="navLinkStatus">Status</a></ul>
            </ul>
        </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
        <li><a href="/" id="navLinkInvite">Home</a></li>
        <li><a href="/invite.html">Invite</a></li>
        <li><a href="/support.html">Support</a></li>
        <li><a href="https://donatebot.io/checkout/672259037861117964" rel="nofollow noopener" target="_blank" id="navLinkPremium">Premium</a></li>
        <li><a href="/scores.html" id="navLinkScores">Scores</a> </li>
        <li><a href="/userscores.html" id="navLinkUserScores">User Scores</a></li>
        <li><a href="/privacy.html" id="navLinkPrivacy">Privacy</a></li>
        <li><a href="/status.html" id="navLinkStatus">Status</a>/li></ul>
    </ul>
    <ul id="dropdown1" class="dropdown-content">
        <li><a href="/user">Servers</a></li>
        <li class="divider"></li>
        <li><a href="#!">Logout</a></li>
    </ul>
    `;
        let element = document.createElement("link");
        element.rel = 'stylesheet'
        element.href="/assets/css/materialize.min.css"
        element.media="screen,projection"
        this.appendChild(element);

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
            dropDownArrowName.innerText=`${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`
            userDropdown.appendChild(dropDownArrowName)

            let dropDownArrowIMG = document.createElement("img")
            dropDownArrowIMG.src = `${ajaxdataJSON.avatarURL}?size=32`
            dropDownArrowIMG.alt = `${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`
            dropDownArrowIMG.classList = "center-align"
            dropDownArrowIMG.style = "border-radius: 50%; "
            userDropdown.appendChild(dropDownArrowIMG)
       
            let dropDownArrow = document.createElement("i")
            dropDownArrow.classList = 'material-icons right'
            dropDownArrow.innerText="arrow_drop_down"
            userDropdown.appendChild(dropDownArrow)
        })()
    }
}

customElements.define('nav-bar', MyComponent);