<template>
    <div class="container">
        <div class='row'>
            <div class="col s6">
                <select ref="modeSelect" class="browser-default" v-model="defualtMode" @change="updateScores()">
                    <option v-for="mode in modes" :value="mode.value">{{mode.text}}</option>
                </select>
                <label>Mode</label>
            </div>

            <div class="col s6">
                <select ref="sortBy" class="browser-default" @change="updateScores()">
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
                            <object :data="guild.url" type="image/png" :aria-label="guild.name" loading="lazy" class="circle guildimg">
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

    <div class="fixed-action-btn">
        <button class="btn-floating btn-large waves-effect deep-purple darken-2" @click="scrollToTop">
            <i class="large material-icons">expand_less</i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'scores',
        data() {
            return {
                guilds: [],
                modes:[],
                page: 0,
                defualtMode:"0"
            };
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
        methods: {
            scrollToTop() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            },
            async loadModes(){
                const modes = await fetch("https://api.numselli.xyz/counting/countingmodes");
                const modesJSON = await modes.json()
                this.modes=Object.keys(modesJSON).map(key=>{
                    return {value:key, text: modesJSON[key]}
                })
            },
            updateScores(){
                this.guilds = []
                this.page = 0;
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
        beforeMount () {
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