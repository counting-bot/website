<template></template>

<script>
export default {
  name: 'logout',
    created() {
        fetch("https://api.numselli.xyz/discordOauth/logout", {credentials: "include"})
            window.location.pathname = "/"
    }
}
</script>