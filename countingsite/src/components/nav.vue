<template>
  <nav>
      <div class="nav-wrapper black">
          <!-- <a href="/login.html" class="right" id="login">Login</a> -->
          <div class="dropdown-trigger right valign-wrapper" data-target="dropdown1" id="userDropdown"></div>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="left hide-on-med-and-down">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/invite">Invite</router-link></li>
              <li><router-link to="/support">Support</router-link></li>
                    <!-- <li><router-link to="/premium">Premium</router-link></li> -->
              <!-- <li><a href="/scores.html">Scores</a> </li> -->
              <!-- <li><a href="/userscores.html">User Scores</a></li> -->
              <li><router-link to="/privacy">Privacy</router-link></li>
              <!-- <li><a href="/status.html">Status</a></li> -->
          </ul>
      </div>
    </nav>

    <ul class="sidenav black" id="mobile-demo">
        <!-- <li><a href="/" class="white-text">Home</a></li> -->
        <!-- <li><a href="/invite.html" class="white-text">Invite</a></li> -->
        <!-- <li><a href="/support.html" class="white-text">Support</a></li> -->
        <!-- <li><a href="/premium.html" class="white-text">Premium</a></li> -->
        <!-- <li><a href="/scores.html" class="white-text">Scores</a> </li> -->
        <!-- <li><a href="/userscores.html" class="white-text">User Scores</a></li> -->
        <!-- <li><a href="/privacy.html" class="white-text">Privacy</a></li> -->
        <!-- <li><a href="/status.html" class="white-text">Status</a></li> -->
    </ul>
    <ul id="dropdown1" class="dropdown-content black">
        <!-- <li><a href="/user.html" class="white-text">Servers</a></li> -->
        <li class="divider"></li>
        <!-- <li><a href="/logout.html" class="red-text darken-3">Logout</a></li> -->
    </ul>
</template>

<script>
import M from 'materialize-css'

export default {
    mounted () {
    M.AutoInit()
  },
  name: 'navbar'
}
</script>