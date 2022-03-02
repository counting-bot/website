class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav>
        <div class="nav-wrapper black">
            <a href="/login" class="right">Login</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="left hide-on-med-and-down">
                <li><a href="/" id="navLinkInvite">Home</a></li>
                <li><a href="/invite" id="navLinkInvite">Invite</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="https://donatebot.io/checkout/672259037861117964" rel="nofollow noopener" target="_blank" id="navLinkPremium">Premium</a></li>
                <li><a href="/scores" id="navLinkScores">Scores</a> </li>
                <li><a href="/userscores" id="navLinkUserScores">User Scores</a></li>
                <li><a href="/privacy" id="navLinkPrivacy">Privacy</a></li>
                <li><a href="/status" id="navLinkStatus">Status</a></ul>
            </ul>
        </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
        <li><a href="/" id="navLinkInvite">Home</a></li>
        <li><a href="/invite">Invite</a></li>
        <li><a href="/support">Support</a></li>
        <li><a href="https://donatebot.io/checkout/672259037861117964" rel="nofollow noopener" target="_blank" id="navLinkPremium">Premium</a></li>
        <li><a href="/scores" id="navLinkScores">Scores</a> </li>
        <li><a href="/userscores" id="navLinkUserScores">User Scores</a></li>
        <li><a href="/privacy" id="navLinkPrivacy">Privacy</a></li>
        <li><a href="/status" id="navLinkStatus">Status</a>/li></ul>
    </ul>`;
    }
}
customElements.define('nav-bar', MyComponent);
