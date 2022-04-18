<template></template>

<script>
export default {
  name: 'support',
    created() {
        fetch("https://api.numselli.xyz/discordOauth/logout", {credentials: "include"})
            window.location.pathname = "/"
        // window.location.href = 'https://discord.gg/cz5ECsdPBT';
    }
}
</script>

  <!-- <script>
            fetch("https://api.numselli.xyz/discordOauth/logout", {credentials: "include"})
            window.location.pathname = "/"
        </script> -->