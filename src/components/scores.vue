<template>
    <div class="container">
        <div class='row'>
            <div class="col s6">
                <select ref="modeSelect" class="browser-default" v-model="defualtMode" @change="updateScores($event)">
                    <option v-for="mode in modes" :value="mode.value">{{mode.text}}</option>
                </select>
                <label>Mode</label>
            </div>

            <div class="col s6">
                <select ref="sortBy" class="browser-default" @change="updateScores($event)">
                    <option value="hs" selected>Current Scores</option>
                    <option value="current">High Scores</option>
                </select>
                <label>Sort By</label>
            </div>
        </div>
        <div class='row'>
            <table class="striped centered highlight">
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Current Score</th>
                        <th>High Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="guild in guilds">
                        <td>
                            <object :data="guild.url" type="image/png" :alt="guild.name" loading="lazy" class="circle guildimg">
                                <img src="/assets/img/error.png" alt="Not found image" class="circle guildimg">
                            </object>
                        </td>
                        <td>{{guild.name}}</td>
                        <td>{{guild.last_num}}</td>
                        <td>{{guild.hs}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'userscores',
        data() {
            return {
                guilds: [],
                modes:[],
                page: 0,
                defualtMode:"0"
            };
        },
        methods: {
            async loadModes(){
                const modes = await fetch("https://api.numselli.xyz/counting/countingmodes");
                const modesJSON = await modes.json()
                this.modes=Object.keys(modesJSON).map(key=>{
                    return {value:key, text: modesJSON[key]}
                })
            },
            updateScores(event){
                this.guilds=[]
                this.loadGuilds()
            },
            async loadGuilds() {
                const mode = this.$refs.modeSelect.value || 0
                const sortBy = this.$refs.sortBy.value

                const ajaxdata = await fetch(`https://api.numselli.xyz/counting/scores/${mode}?page=${this.page}&sortby=${sortBy}`);
                const json = await ajaxdata.json()

                json.map(({name, url, hs, last_num})=>{
                    this.guilds.push({name, url, hs: this.formatNumber(hs), last_num: this.formatNumber(last_num)})              
                })
            },
            getNextUser() {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        this.page++
                        this.loadGuilds()
                    }
                }
            },
            formatNumber(num){
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        },
        beforeMount() {
            this.loadModes()
        },
        mounted(){
            this.loadGuilds();

            this.getNextUser()
        }
    }
</script>

<style>
    .guildimg{width:40px;}
    table {background: white;}
    table thead tr {background: #36304a;}
    tbody tr:nth-child(even) {background-color: #f5f5f5;}
    tbody tr {color: #808080;}
    tbody tr:hover {color: #555555; background-color: #f5f5f5;}
</style>