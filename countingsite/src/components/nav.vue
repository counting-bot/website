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
              <li><router-link to="/scores">Scores</router-link></li>
              <li><router-link to="/userscores">User Scores</router-link></li>
              <li><router-link to="/privacy">Privacy</router-link></li>
              <li><router-link to="/status">Status</router-link></li>
          </ul>
      </div>
    </nav>

    <ul class="sidenav black" id="mobile-demo">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/invite">Invite</router-link></li>
        <li><router-link to="/support">Support</router-link></li>
            <!-- <li><router-link to="/premium">Premium</router-link></li> -->
        <li><router-link to="/scores">Scores</router-link></li>
        <li><router-link to="/userscores">User Scores</router-link></li>
        <li><router-link to="/privacy">Privacy</router-link></li>
        <li><router-link to="/status">Status</router-link></li>
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