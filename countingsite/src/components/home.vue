<template>
  <div class="row center" style="padding-top: 2.3%; padding-bottom: 4.3%;">
    <div class="col s4 light-blue accent-3" style="height: 8.5rem; border-radius: 30px;">
      <h4 id="guilds" style="font-weight: bold;">{{ guildCount }}</h4>

      <h5 style="font-weight: bold; vertical-align: middle; ">Servers</h5>
    </div>
    <div class="col s4 light-blue accent-3" style="height: 8.5rem; border-radius: 30px;">
      <h4 id="dbUsers" style="font-weight: bold;">{{ userCount }}</h4>
      <h5 style="font-weight: bold;">Users</h5>
    </div>
    <div class="col s4 light-blue accent-3" style="height: 8.5rem; border-radius: 30px;">
      <h4 id="numbersTotal" style="font-weight: bold;">{{ numberCount }}</h4>
      <h5 style="font-weight: bold; vertical-align: middle;">Numbers Counted</h5>
    </div>
  </div>

  <div class="center">
    <img
      src="https://discords.com/bots/api/bot/726560538145849374/widget"
      alt="discords.com widget"
    />
    <img
      src="https://infinitybots.gg/bots/726560538145849374/widget?size=small"
      alt="infinitybots.gg widget"
    />
  </div>

  <div class="row">
    <h3 class="homeStatTitle heading center-align">About Counting</h3>
    <h4
      class="heading center-align"
      style="font-weight: bold;"
    >The most customizable counting bot. Compete with other Discord servers to get the highest count.</h4>
  </div>
</template>

<script>
  const ajaxdata = await fetch(`https://api.numselli.xyz/counting/mainStats`).catch(err => {});
  let guilds = 0, dbUsers = 0, numbers = {total: 0}
  if (ajaxdata?.ok) {
    let ajaxdataJson = await ajaxdata.json()
    guilds = ajaxdataJson.guilds
    dbUsers = ajaxdataJson.dbUsers
    numbers = ajaxdataJson.numbers
  }
  const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  export default {
    name: 'home',
    data() {
      return {
        guildCount: formatNumber(guilds),
        userCount: formatNumber(dbUsers),
        numberCount: formatNumber(numbers?.total)
      }
    }
  }
</script>