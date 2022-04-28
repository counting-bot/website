<template>
  <div class="row">
        <div class="col s2">
            <div class="container">
                </div>
            <div class="container">
                <img :src=avatarURL :alt=username id="avatar" class="circle" style=" display:block;margin:auto;">
                <h5 class="center-align">{{username}}</h5>
            </div>
            <div class="container" style="text-align: center;">
                <!-- <h6>Global Stats</h6>  -->
                <div>Accuracy: {{accuracy}}</div>
                <div>✅: {{correct}}</div>
                <div>❌: {{wrong}}</div>
                <div>Total: {{total}}</div>
                <div>🆘 Saves left: {{savesLeft}}/{{maxSaves}}</div>
                <div>🆘 Saves used: {{savesUsed}}</div>
                <div>Rank: #{{rank}}</div>
            </div>
        </div>
        <div class="col s10">
            <div class="center-align row">
                <a v-for="guild in guilds" :key="guild.first" class="col card-panel transparen" :href="guild.common ? `/server/${guild.id}` : `https://discord.com/oauth2/authorize?client_id=726560538145849374&scope=bot%20applications.commands&permissions=3136&guild_id=${guild.id}`" style="text-align: center;">
                    <div>
                        <div style="position: relative;">
                            <object :data="guild.iconURL" type="image/png" :alt="guild.name" loading="lazy" :class='grayscale(guild)' style="border-radius: 50%">
                                <img src="/assets/img/error.png" alt="Not found image" :class='grayscale(guild)' style='border-radius: 50%'>
                            </object>
                            <div>
                                <div :class='showInviteButton(guild)'><i class="large material-icons">add_circle_outline</i></div>
                            </div>
                        </div>
                        <div>
                            <span>{{guild.name}}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user',
        data (){
            return {
                avatarURL: "",
                username: "",
                accuracy: "",
                correct: "",
                wrong: "",
                total: "",
                savesLeft: "",
                maxSaves: "",
                savesUsed: "",
                rank: "",
                guilds:[]
            }
        },
        async mounted () {
            const rawGuilds = await fetch(`https://api.numselli.xyz/discordOauth/userGuilds`, {credentials: "include"}).catch(err=>console.error);
            const guildsJson = rawGuilds.ok ? await rawGuilds.json() : {}

            const ajaxdata = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"}).catch(err=>console.error);
            const ajaxdataJSON = ajaxdata.ok ? await ajaxdata.json() : {}
            this.avatarURL = ajaxdataJSON.avatarURL
            this.username = `${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`

            const userStats = await fetch(`https://api.numselli.xyz/discordOauth/userStats`, {credentials: "include"}).catch(err=>console.error);
            const userStatsJSON = userStats.ok ? await userStats.json() : {}
            this.accuracy = userStatsJSON.accuracy
            this.correct = userStatsJSON.correct
            this.wrong = userStatsJSON.wrong
            this.total = userStatsJSON.total
            this.savesLeft = userStatsJSON.savesLeft
            this.maxSaves = userStatsJSON.maxSaves
            this.savesUsed = userStatsJSON.savesUsed
            this.rank = userStatsJSON.rank

            guildsJson.map(guild=>{
                if (!guild.common && !guild.canInvite) return;
                this.guilds.push({
                    "id": guild.id,
                    "name": guild.name,
                    "iconURL": guild.iconURL,
                    "common": guild.common,
                    "canInvite": guild.canInvite
                })
            })
        },
        methods:{
            grayscale(guild){
                return guild.common ? "" : "grayscale"
            },
            showInviteButton(guild){
                return guild.common ? 'hide' : "btn-floating btn-large pulse imageOverlay"
            }
        }
    }
</script>
<style>
    .grayscale{
        filter: grayscale(90%)
    }
    .imageOverlay{position: absolute !important; top: 50%; left: 50%; transform: translate(-50%, -50%);}
</style>