<template>
    <div class="container">
        <!-- <div>
            <span>Numbers counted: </span>
            <br>
            <span>correct: </span>
            <br>
            <span>wrong: </span>
            <br>
            <span>accruacay</span>
            <br>
            <span>% contrubeuted to total numbers</span>
        </div> -->
        <table class="striped centered highlight" v-if="!(channelID && premiumlevel!=2)">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.first">
                    <td>{{user.rank}}</td>
                    <td>{{user.userName}}</td>
                    <td>{{user.score}}</td>
                </tr>
            </tbody>
        </table>
        <div v-else class="center-align">
            <h4>You have discovered a premium feature</h4>
            <h6>Get per channel statittics and more with Tier 2 premium</h6>
            <div class="waves-effect waves-light btn pulse">
                <router-link to="/premium">View premium plans</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'serverStats',
        	props : {
                guildID : String,
                channelID: String,
                premiumlevel: Number
            },
        data() {
            return {
                users: [],
                page: 0,
                guildid: String,
                channelid: String
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
        watch: {
            channelID(val) {
                this.channelid = val
                this.users = []
                this.page = 0
                this.loadUsers()
            },
            guildID(val) {
                this.guildid = val
                this.users = []
                this.page = 0
                this.loadUsers()
            }
        },
        methods: {
            async loadUsers() {
                const ajaxdata = await fetch(`https://api.numselli.xyz/discordOauth/guildlb/${this.guildid}${this.channelid ? `/${this.channelid}` : ""}?page=${this.page}`, {credentials: "include"}).catch(err=>console.error);
                const json = await ajaxdata.json();
                json.map(({correctcount, username}, index) => {
                    this.users.push({
                        rank: ((this.page*60)+index+1),
                        userName: username,
                        score: (correctcount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    });
                })
                if (!window.onscroll){
                    window.onscroll = () => {
                        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                        if (bottomOfWindow) {
                            this.page++
                            this.loadUsers()
                        }
                    }
                }
            }
        }
    }
</script>

<style>
    table {background: white;}
    table thead tr {background: #36304a;}
    tbody tr:nth-child(even) {background-color: #f5f5f5;}
    tbody tr {color: #808080;}
    tbody tr:hover {color: #555555; background-color: #f5f5f5;}
</style>