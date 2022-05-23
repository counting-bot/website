<template>
  <div class="container">
    <div class="center-align">
      <h2>PRIVACY POLICY</h2>
    </div>
    <div class="center-align">
      <h4>1. Updating Data</h4>
    </div>
    <span>The stored data may be updated when using commands, voting on bot listing stites, or by becoming a donator. Updating data will require the action of a user. We may store any sort of Snowflake IDs provided by Discord and user input associated with our bot's features. We will not knowingly store sensitive data, identifying data, unnecessary data, or data which is not used in our bot's features. By interacting with our bot, you authorize us to store said data.</span>
  
    <div class="center-align">
      <h4>2. Removal of Data</h4>
    </div>
    <span>Users may manually request this data to be deleted. Additionally, users who own or maintain said server can delete data using the associated command, or by making a request in the support server. We may ask for verification of ownership of the Server.</span> 
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'privacy',
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