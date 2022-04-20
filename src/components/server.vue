<template>
     <div class="row">
        <div class="col s2">
            <div>
                <div>
                    <h3 class="center-align">{{guildName}}</h3>
                </div>
                <div style="display: grid; gap: 0.45rem;">
                    <!-- <div> -->
                        <div class="waves-effect waves-light btn">
                            <span>Sever overview</span>
                        </div>
                    <!-- </div> -->
                    <div v-for="channel in channels" :key="channel.first" class="waves-effect waves-light btn">
                        <router-link :to="/server/${guildID}/${channel.id}" class="valign-wrapper">
                            <span class="material-icons">tag {{lock}}</span>
                            <span>{{channel.name}}</span>
                        </router-link>
                        <!-- <div class="valign-wrapper"> -->
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="col s9">
            <!-- <div class="row"> -->
                <!-- <guildStats :guildID=guildID></guildStats> -->
                    <router-view></router-view>

            <!-- </div> -->
        </div>
    </div>
</template>

<script>
    import guildStats from './serverStats.vue'

    export default {
        name: 'server',
        data(){
            return {
                guildName: "",
                lock: "",
                channels:[],
                guildID:"",
            }
        },
        async mounted(){
            this.guildID = this.$route.params.guildid
            const guildData = await fetch(`https://api.numselli.xyz/discordOauth/guild/${this.$route.params.guildid}`, {credentials: "include"})
            const guildDataJson = await guildData.json()

            const user = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"})
            const userJson = await user.json()

            this.guildName = guildDataJson.name
            this.channels = guildDataJson.chanels
            this.lock = userJson.mfa_enabled ? "lock" : ""
            // this.channels = guildDataJson.channels

            // const guildData = await fetch(`https://api.numselli.xyz/discordOauth/guild/${this.$route.params.guildid}`, {credentials: "include"})
            // const guildDataJson = await guildData.json()
        },
        methods:{
           
        },
         components: {
            guildStats
        }
    }
</script>
<style>.channelGap{gap: 0.45rem;}

.col-sm.text-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>