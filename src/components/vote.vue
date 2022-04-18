<template>
</template>

<script>
export default {
  name: 'support',
    created() {
      const votingSites = [
        "https://top.gg/bot/726560538145849374/vote",
        "https://discordbotlist.com/bots/counting-1881/upvote",
        "https://bots.discordlabs.org/bot/726560538145849374/vote",
      ]
      window.location.href = votingSites[Math.floor((Math.random() * votingSites.length))];
    }
}
</script>