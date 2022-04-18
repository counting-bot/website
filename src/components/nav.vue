<template>
  <nav>
      <div class="nav-wrapper black">
          <!-- <router-link to="/login" :class="hideLogin()" id="login">Login</router-link>
          <div :class="hideUserDrop()" data-target="dropdown1" id="userDropdown">
              <span>{{username}}#{{discriminator}}</span>
              <img :src=avatarURL :alt=avatarAlt class="circle center-align">
              <i class="material-icons right">arrow_drop_down</i>
          </div> -->
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

    <ul class="sidenav black white-text" id="mobile-demo">
        <li><router-link to="/" class="white-text">Home</router-link></li>
        <li><router-link to="/invite" class="white-text">Invite</router-link></li>
        <li><router-link to="/support" class="white-text">Support</router-link></li>
            <!-- <li><router-link to="/premium" class="white-text">Premium</router-link></li> -->
        <li><router-link to="/scores" class="white-text">Scores</router-link></li>
        <li><router-link to="/userscores" class="white-text">User Scores</router-link></li>
        <li><router-link to="/privacy" class="white-text">Privacy</router-link></li>
        <li><router-link to="/status" class="white-text">Status</router-link></li>
    </ul>
    <ul id="dropdown1" class="dropdown-content black">
        <li><a href="/user" class="white-text">Servers</a></li>
        <li class="divider"></li>
        <li><a href="/logout" class="red-text darken-3">Logout</a></li>
    </ul>
</template>

<script>
    import M from 'materialize-css'

    const ajaxdata = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"}).catch(err=>{});
    const ajaxdataJSON = await ajaxdata?.json()??{}

    export default {
        name: 'navbar',
        data (){
            return {
                username: ajaxdataJSON.username,
                discriminator: ajaxdataJSON.discriminator,
                avatarURL: `${ajaxdataJSON.avatarURL}?size=32`,
                avatarAlt: `${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`
            }
        },
        mounted () {
            M.AutoInit()
        },
        methods:{
            hideLogin(){
                return ajaxdata?.ok ? "hide" : "right"
            },
            hideUserDrop(){
                return ajaxdata?.ok ? "dropdown-trigger right valign-wrapper" :  "hide"
            }
        }
    }
</script>