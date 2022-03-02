class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav>
        <div class="nav-wrapper black">
            <a href="/login" class="right">Login</a>
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
    </ul>`;
        let element = document.createElement("link");
        element.rel = 'stylesheet'
        element.href="/assets/css/materialize.min.css"
        element.media="screen,projection"
        this.appendChild(element)
    }
}
customElements.define('nav-bar', MyComponent);
