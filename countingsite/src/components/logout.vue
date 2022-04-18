<template></template>

<script>
export default {
  name: 'support',
    created() {
        fetch("https://api.numselli.xyz/discordOauth/logout", {credentials: "include"})
            window.location.pathname = "/"
    }
}
</script>