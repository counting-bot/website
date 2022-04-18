<template>
  <nav>
      <div class="nav-wrapper black">
          <router-link to="/login" class="right" id="login">Login</router-link>
          <div class="dropdown-trigger right valign-wrapper" data-target="dropdown1" id="userDropdown">
              <span>{{username}}#{{discriminator}}</span>
          </div>
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

    // const ajaxdata = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"}).catch(err=>{});
    // const ajaxdataJSON = await ajaxdata.json()
        
    // let loginDiv = document.getElementById("login")
    // loginDiv.style.display = "none";
    
    // const userDropdown = document.getElementById("userDropdown")


    // let dropDownArrowName = document.createElement("span")

    // <span>{{username}}#{{discriminator}}</span>
    // dropDownArrowName.textContent=`${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`
    // userDropdown.appendChild(dropDownArrowName)

    // let dropDownArrowIMG = document.createElement("img")
    // dropDownArrowIMG.src = `${ajaxdataJSON.avatarURL}?size=32`
    // dropDownArrowIMG.alt = `${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`
    // dropDownArrowIMG.classList = "center-align"
    // dropDownArrowIMG.style = "border-radius: 50%; "
    // userDropdown.appendChild(dropDownArrowIMG)

    // let dropDownArrow = document.createElement("i")
    // dropDownArrow.classList = 'material-icons right'
    // dropDownArrow.textContent="arrow_drop_down"
    // userDropdown.appendChild(dropDownArrow)
</script>