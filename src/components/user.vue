<template>
  <div class="row">
        <div class="col s2">
            <div class="container">
                <img :src=avatarURL :alt=avatarAlt id="avatar" class="circle">
            </div>
            <div class="container">
                <h5>{{username}}#{{discriminator}}</h5>
            </div>
            <div class="container">
                <h6>Global Stats</h6> 
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
                <a v-for="guild in guilds" :key="guild.first" class="col card-panel transparen" :href="guild.common ? `/guildScores/${guild.id}` : `https://discord.com/oauth2/authorize?client_id=726560538145849374&scope=bot%20applications.commands&permissions=3136&guild_id=${guild.id}`" style="text-align: center;">
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
    const rawGuilds = await fetch(`https://api.numselli.xyz/discordOauth/userGuilds`, {credentials: "include"}).catch(err=>console.error);
    const guildsJson =  await rawGuilds.json()

    const userStats = await fetch(`https://api.numselli.xyz/discordOauth/userStats`, {credentials: "include"}).catch(err=>console.error);
    const userStatsJSON = await userStats.json()

    const ajaxdata = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"}).catch(err=>console.error);
    const ajaxdataJSON =  await ajaxdata.json()  

    export default {
        name: 'user',
        data (){
            return {
                username: ajaxdataJSON.username,
                discriminator: ajaxdataJSON.discriminator,
                avatarURL: ajaxdataJSON.avatarURL,
                avatarAlt: `${ajaxdataJSON.username}#${ajaxdataJSON.discriminator}`,
                accuracy: userStatsJSON.accuracy,
                correct: userStatsJSON.correct,
                wrong: userStatsJSON.wrong,
                total: userStatsJSON.total,
                savesLeft: userStatsJSON.savesLeft,
                maxSaves: userStatsJSON.maxSaves,
                savesUsed: userStatsJSON.savesUsed,
                rank: userStatsJSON.rank,
                guilds:[]
            }
        },
        async mounted () {
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