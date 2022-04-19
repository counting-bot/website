<template>
    <!-- <h1>current path is {{$route.params.guildid}}</h1> -->
     <div class="row">
        <div class="col s2">
            <div>
                <div>
                    <h3>{{guildName}}</h3>
                </div>
                <div style="display: grid; gap: 0.45rem;">
                    <div>
                        <div class="waves-effect waves-light btn">
                            <span>Sever overview</span>
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <span class="material-icons">tag</span>
                            <span>channel 1</span>
                            <span class="material-icons">lock</span>
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <span class="material-icons">tag</span>
                            <span>channel 2</span>
                            <span class="material-icons">lock</span>
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <span class="material-icons">tag</span>
                            <span>channel 3</span>
                            <span class="material-icons">lock</span>
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <span class="material-icons">tag</span>
                            <span>channel 4</span>
                            <span class="material-icons">lock</span>
                        </div>
                    </div>
                    <div>
                        <div class="waves-effect waves-light btn">
                            <span class="material-icons">tag</span>
                            <span>channel 5</span>
                            <span class="material-icons">lock</span>
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
    export default {
        name: 'guildScores',
        data(){
            return {
                guildname: "",
                channels:[
                    {name: "aaa"}
                ]
            }
        },
        created(){
        this.loadApi()
        },
        methods:{
            async loadApi(){
                const guildData = await fetch(`https://api.numselli.xyz/discordOauth/guild/${this.$route.params.guildid}`, {credentials: "include"})
                const guildDataJson = await guildData.json()

                this.guildname = guildDataJson.name

                // const guildData = await fetch(`https://api.numselli.xyz/discordOauth/guild/${this.$route.params.guildid}`, {credentials: "include"})
                // const guildDataJson = await guildData.json()
            }
        }
    }
</script>
<style>.channelGap{gap: 0.45rem;}</style>