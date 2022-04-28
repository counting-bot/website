<template></template>

<script>
export default {
  name: 'login',
    created() {
      console.log(this.$route.params)
        window.location.href = 'https://api.numselli.xyz/discordOauth/login?redirect_to='+this.$route.params.pageOrgin;
    }
}
</script>