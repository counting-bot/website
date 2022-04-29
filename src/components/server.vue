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
                            <span class="material-icons">tag {{lock}}</span>
                            <span>{{channel.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col s9">
            <serverStats :guildID="guildID" :channelID="channelID"></serverStats>
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

    export default {
        name: 'server',
        data(){
            return {
                guildName: "",
                lock: "",
                channels:[],
                guildID:"",
                channelID: ""
            }
        },
        async mounted(){
            this.guildID = this.$route.params.guildid
            this.channelID = this.$route.params.channelID

            const userStats = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"})
            if (userStats.status === 401) return window.location.href = `https://api.numselli.xyz/discordOauth/login?redirect_to=user`; 
            const userStatsJson = await userStats.json()

            const guildData = await fetch(`https://api.numselli.xyz/discordOauth/guild/${this.$route.params.guildid}`, {credentials: "include"})
            const guildDataJson = await guildData.json()

            this.guildName = guildDataJson.name
            this.channels = guildDataJson.channels
            this.lock = userStatsJson.premiumlevel == 2 ? "lock" : ""
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