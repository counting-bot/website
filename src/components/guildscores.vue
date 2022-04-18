<template>
    <h1>current path is {{$route.params.guildid}}</h1>
     <div class="row">
        <div class="col s2">
            <div>
                <div>
                    <h3 id="guildName">title HERE</h3>
                </div>
                <div style="display: grid; gap: 0.45rem;">
                    <div>
                        <div class="waves-effect waves-light btn">
                            <!-- <div class="valign-wrapper"> -->
                                <span>Sever overview</span>
                            <!-- </div> -->
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <!-- <div class="valign-wrapper"> -->
                                <span class="material-icons">tag</span>
                                <span>channel 1</span>
                                <span class="material-icons">lock</span>
                            <!-- </div> -->
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <!-- <div class="valign-wrapper"> -->
                                <span class="material-icons">tag</span>
                                <span>channel 2</span>
                                <span class="material-icons">lock</span>
                            <!-- </div> -->
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <!-- <div class="valign-wrapper"> -->
                                <span class="material-icons">tag</span>
                                <span>channel 3</span>
                                <span class="material-icons">lock</span>
                            <!-- </div> -->
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <!-- <div class="valign-wrapper"> -->
                                <span class="material-icons">tag</span>
                                <span>channel 4</span>
                                <span class="material-icons">lock</span>
                            <!-- </div> -->
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <!-- <div class="valign-wrapper"> -->
                                <span class="material-icons">tag</span>
                                <span>channel 5</span>
                                <span class="material-icons">lock</span>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col s9">
            <!-- <div class="row" id="guildsDiv"></div> -->
        </div>
    </div>
</template>

<script>
// const queryParams = getQueryParams();
//                 // console.log(queryParams.guildid)
//                 const guildData = await fetch(`https://api.numselli.xyz/discordOauth/guild/${queryParams.guildid}`, {credentials: "include"})
//                 const guildDataJson = await guildData.json()
//                 document.getElementById("guildName").textContent=guildDataJson.name
export default {
  name: 'guildScores',
    // created() {
    //     window.location.href = 'https://discord.com/oauth2/authorize?client_id=726560538145849374&permissions=3136&scope=bot%20applications.commands';
    // }
}
</script>
<style>.channelGap{gap: 0.45rem;}</style>