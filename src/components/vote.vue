<template>
</template>

<script>
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'vote',
    async created() {
      const userStats = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"})
      if (userStats.status === 401) return window.location.href = `https://api.numselli.xyz/discordOauth/login?redirect_to=vote`; 

      // Reminder 
      // Post to API 


      // redirect to voting site
      const aa = [
        "https://top.gg/bot/726560538145849374/vote",
        "https://bots.discordlabs.org/bot/726560538145849374?vote",
        "https://discordbotlist.com/bots/counting-1881/upvote"
      ]
      window.location.href = aa[Math.floor(Math.random() * aa.length)]
    },
     setup() {
    const siteData = reactive({
      title: `Vote`,
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