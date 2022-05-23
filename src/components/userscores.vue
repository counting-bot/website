<template>
    <div class="container">
        <table class="striped centered highlight">
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
    </div>
   <div class="fixed-action-btn">
        <button class="btn-floating btn-large waves-effect deep-purple darken-2" @click="scrollToTop">
            <i class="large material-icons">expand_less</i>
        </button>
    </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

    export default {
        name: 'userscores',
        data() {
            return {
                users: [],
                page: 0,
            };
        },
         setup() {
    const siteData = reactive({
      title: `User scores`,
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
            async loadUsers() {
                const ajaxdata = await fetch(`https://api.numselli.xyz/counting/userscores?page=${this.page}`).catch(err=>console.error);
                (await ajaxdata.json()).map(({correctnumbers, username, wrongnumbers}, index) => {
                    this.users.push({
                        rank: ((this.page*60)+index+1),
                        userName: username,
                        score: (correctnumbers+wrongnumbers).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    });
                })
            },
            getNextUser() {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        this.page++
                        this.loadUsers()
                    }
                }
            }
        },
        beforeMount() {
            this.loadUsers();
        },
        mounted() {
            this.getNextUser()
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