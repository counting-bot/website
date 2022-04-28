<template></template>

<script>
export default {
  name: 'invite',
    created() {
        window.location.href = 'https://discord.com/oauth2/authorize?client_id=726560538145849374&permissions=3136&scope=bot%20applications.commands';
    }
}
</script>