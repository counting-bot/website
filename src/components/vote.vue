<template>
</template>

<script>
export default {
  name: 'support',
    async created() {
      const userStats = await fetch(`https://api.numselli.xyz/discordOauth/user`, {credentials: "include"})
      if (userStats.status === 401) return window.location.href = `https://api.numselli.xyz/discordOauth/login?redirect_to=vote`; 

      const votingSites = [
        "https://top.gg/bot/726560538145849374/vote",
        "https://discordbotlist.com/bots/counting-1881/upvote",
        "https://bots.discordlabs.org/bot/726560538145849374/vote",
      ]
      window.location.href = votingSites[Math.floor((Math.random() * votingSites.length))];
    }
}
</script>