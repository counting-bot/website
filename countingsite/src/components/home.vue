<template>
  <div class="container">
    <div class="row center" style="padding-top: 2.3%; padding-bottom: 4.3%;">
      <div class="col s4 light-blue accent-3" style="height: 8.5rem; border-radius: 30px;">
        <h4 id="guilds" style="font-weight: bold;">{{ guildCount }}</h4>

        <h5 style="font-weight: bold; vertical-align: middle; ">Servers</h5>
      </div>
      <div class="col s4 light-blue accent-3" style="height: 8.5rem; border-radius: 30px;">
        <h4 id="dbUsers" style="font-weight: bold;">{{ userCount }}</h4>
        <h5 style="font-weight: bold;">Users</h5>
      </div>
      <div class="col s4 light-blue accent-3" style="height: 8.5rem; border-radius: 30px;">
        <h4 id="numbersTotal" style="font-weight: bold;">{{ numberCount }}</h4>
        <h5 style="font-weight: bold; vertical-align: middle;">Numbers Counted</h5>
      </div>
    </div>

    <div class="center">
      <img
        src="https://discords.com/bots/api/bot/726560538145849374/widget"
        alt="discords.com widget"
      />
      <img
        src="https://infinitybots.gg/bots/726560538145849374/widget?size=small"
        alt="infinitybots.gg widget"
      />
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
      numberCount: formatNumber(numbers?.total)
    }
  },
  setup() {
    const siteData = reactive({
      title: `Counting`,
      description: `The most customizable counting bot. Compete with other Discord servers to get the highest count.`,
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
          name: `description`,
          content: computed(() => siteData.description),
        },
        {
          name: `og:description`,
          content: computed(() => siteData.description),
        },
      ],
    })
  },

}
</script>

        <!-- 
        <meta name="keywords" content="discord counting bot, counting bot, counting game, counting, counting discord">
        <meta name="theme-color" content="#a329d1"> -->

        <!-- Open Graph / Facebook -->
        <!-- <meta property="og:type" content="website">
        <meta property="og:url" content="https://counting.numselli.xyz">
        <meta property="og:image" content="https://counting.numselli.xyz/assets/img/CountingIconRound.png"> -->

        <!-- Twitter -->
        <!-- <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://counting.numselli.xyz">
        <meta property="twitter:title" content="Counting">
        <meta property="twitter:description" content="The most customizable counting bot. Compete with other Discord servers to get the highest count.">
        <meta property="twitter:image" content="https://counting.numselli.xyz/assets/img/CountingIconRound.png"> -->
