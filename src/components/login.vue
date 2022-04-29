<template></template>

<script>
export default {
  name: 'login',
  props: ["pageOrgin"],
  created() {
    console.log(this.$route.params.pageOrgin)
    window.location.href = `https://api.numselli.xyz/discordOauth/login?redirect_to=${this.$route.params.pageOrgin ?? " "}`;
  }
}
</script>