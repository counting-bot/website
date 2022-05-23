<template>
     <div class="row">
        <div class="col s2">
            <div>
                <div>
                    <h3 class="center-align">{{guildName}}</h3>
                </div>
                <div style="display: grid; gap: 0.45rem;">
                    <div class="waves-effect waves-light btn" @click="change(guildID)">
                        <span>Sever overview</span>
                    </div>
                    <div v-for="channel in channels" :key="channel.first" class="waves-effect waves-light btn">
                        <div class="valign-wrapper" @click="change(guildID, channel.channelid)">
                            <span class="material-icons">tag {{premiumlevel === 2 ? "" : "lock"}}</span>
                            <span>{{channel.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col s9">
            <serverStats :guildID="guildID" :channelID="channelID" :premiumlevel="premiumlevel"></serverStats>
        </div>
    </div>
    
    <div class="fixed-action-btn">
        <button class="btn-floating btn-large waves-effect deep-purple darken-2" @click="scrollToTop">
            <i class="large material-icons">expand_less</i>
        </button>
    </div>
</template>

<script>
    import serverStats from './serverStats.vue'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

    export default {
        name: 'server',
        data(){
            return {
                guildName: "",
                channels:[],
                guildID:"",
                channelID: "",
                premiumlevel:0
            }
        },
         setup() {
    const siteData = reactive({
      title: `Server`,
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
        async mounted(){
            this.guildID = this.$route.params.guildid
            this.channelID = this.$route.params.channelID

            const userStats = await fetch(`https://api.numselli.xyz/discordOauth/userStats`, {credentials: "include"})
            if (userStats.status === 401) return window.location.href = `https://api.numselli.xyz/discordOauth/login?redirect_to=user`; 
            const userStatsJson = await userStats.json()

            const guildData = await fetch(`https://api.numselli.xyz/discordOauth/guild/${this.$route.params.guildid}`, {credentials: "include"})
            const guildDataJson = await guildData.json()

            this.guildName = guildDataJson.name
            this.channels = guildDataJson.channels
            this.premiumlevel = userStatsJson.premiumlevel
        },
        methods:{
            scrollToTop() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            },
            change(guildID, channelid){
                this.guildID=guildID
                this.channelID=channelid
            }
        },
        components: {
            serverStats
        }
    }
</script>
<style>
.channelGap{gap: 0.45rem;}

.col-sm.text-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>