<template>
  <nav>
      <div class="nav-wrapper black">
          <router-link to="/login" :class="hideLogin()" id="login">Login</router-link>
          <div class="dropdown-trigger" ref="dropdown" :class="hideUserDrop()" data-target="dropdown1" id="userDropdown">
                <img :src=avatarURL :alt=username class="circle left-align">
                <span class="center-align">{{username}}</span>
                <i class="material-icons right-align">arrow_drop_down</i>
          </div>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="left hide-on-med-and-down">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/invite">Invite</router-link></li>
            <li><router-link to="/support">Support</router-link></li>
            <li><router-link to="/premium">Premium</router-link></li>
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
        <li><router-link to="/premium" class="white-text">Premium</router-link></li>
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
    export default {
        name: 'navbar',
        data (){
            return {
                username: "",
                avatarURL: ``,
                ajaxdataok:false
            }
        },
         setup() {
    const siteData = reactive({
      title: `Counting`,
      description: `The most customizable counting bot. Compete with other Discord servers to get the highest count.`,
      url: "https://counting.numselli.xyz",
      image: "https://counting.numselli.xyz/assets/img/CountingIconRound.png"
    })

    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: `title`,
          content: computed(() => siteData.title),
        },
        {
          name: `og:title`, 
          content: computed(() => siteData.title),
        },
        {
          name: "twitter:title",
          content: computed(() => siteData.title),
        },
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        {
          name: `og:description`,
          content: computed(() => siteData.description),
        },
        {
          name: "twitter:description",
          content: computed(() => siteData.description),
        },
        {
          name: "og:url",
          content: computed(() => siteData.url)
        },
        {
          name: "twitter:url",
          content: computed(() => siteData.url)
        },
        {
          name: "og:image",
          content: computed(() => siteData.image)
        },
        {
          name: "twitter:imag",
          content: computed(() => siteData.image)
        },
        {
          name: "og:type",
          content: computed(() => "website")
        },
        {
          name: `keywords`,
          content: computed(() => "discord counting bot, counting bot, counting game, counting, counting discord"),
        },
        {
          name: `theme-color`,
          content: computed(() => "#a329d1"),
        }
      ]
    })
  },
        async mounted () {
            M.Dropdown.init(this.$refs.dropdown, {coverTrigger: false})
     
            const ajaxdata = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"}).catch(err=>{});
            const ajaxdataJSON = ajaxdata.ok ? await ajaxdata.json() : {}

            this.ajaxdataok = ajaxdata.ok
            this.username = `${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`
            this.avatarURL = ajaxdata.ok ? `${ajaxdataJSON.avatarURL}?size=32` : "/assets/img/error.png"
        },
        methods:{
            hideLogin(){
                return this.ajaxdataok ? "hide" : "right"
            },
            hideUserDrop(){
                return this.ajaxdataok ? "right valign-wrapper" :  "hide"
            }
        }
    }
</script>