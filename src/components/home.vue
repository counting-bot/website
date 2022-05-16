<template>
  <div class="container">
    <div class="row center" style="padding-top: 2.3%; padding-bottom: 17%;">
      <div class="col s12 m4 deep-purple darken-2" style="border-radius: 30px;">
        <h4 id="guilds" style="font-weight: bold;">{{ guildCount }}</h4>
        <span class="deep-purple-text text-darken-2">a</span>
        <h5 style="font-weight: bold; vertical-align: middle; ">Servers</h5>
      </div>
      <div class="col s12 m4 deep-purple darken-2" style="border-radius: 30px;">
        <h4 id="dbUsers" style="font-weight: bold;">{{ userCount }}</h4>
        <span class="deep-purple-text text-darken-2">a</span>
        <h5 style="font-weight: bold;">Users</h5>
      </div>
      <div class="col s12 m4 deep-purple darken-2" style="border-radius: 30px;">
        <h4 id="numbersTotal" style="font-weight: bold;">{{ numberCount }}</h4>
        <span>Accuracy: {{accuracy}}</span>
        <h5 style="font-weight: bold; vertical-align: middle;">Numbers Counted</h5>
      </div>
    </div>
    <div class="row">
      <h3 class="homeStatTitle heading center-align">About Counting</h3>
      <h4
        class="heading center-align"
        style="font-weight: bold;"
      >The most customizable counting bot. Compete with other Discord servers to get the highest count.</h4>
    </div>
  </div>
</template>

<script>
const ajaxdata = await fetch(`https://api.numselli.xyz/counting/mainStats`).catch(err => { });
let guilds = 0, dbUsers = 0, numbers = { total: 0 }
if (ajaxdata?.ok) {
  let ajaxdataJson = await ajaxdata.json()
  guilds = ajaxdataJson.guilds
  dbUsers = ajaxdataJson.dbUsers
  numbers = ajaxdataJson.numbers
}
const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'home',
  data() {
    return {
      guildCount: formatNumber(guilds),
      userCount: formatNumber(dbUsers),
      numberCount: formatNumber(numbers.total),
      accuracy: `${((numbers.correct / numbers.total)*100).toFixed(2)}%`
    }
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
  }
}
</script>