<template>
    <div class="shardGrid container">
          <div v-for="(shard, index) in shards">
            <div style="padding: 0.5rem; background-color: #1f1d1d;">
                <div style="display: block;">
                    <span>Shard #{{shard.id}}</span>
                    <div class="right circle" :style="{'background-color':shard.color, 'height': '12px', 'width': '12px'}"></div>
                </div>
                <div class="center-align container">
                    <div class="row">
                        <div class="col s6"><span>Latency: </span><span>{{shard.latency}} MS</span></div>
                        <div class="col s6"><span>Guilds: </span><span>{{shard.guilds}}</span></div>
                    </div>
                    <div class="row">
                        <div class="col s6"><span>Users: </span><span>{{shard.users}}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const shardStatus = {
        'disconnected': "#FF0000",
        'connecting': "#ff8000",
        'handshaking': "#ffff00",
        'ready': "#80ff00"
    }

    export default {
        name: 'status',
        data() {
            return {
                shards: []
            }
        },
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
  },
        async mounted(){
            const ajaxdata = await fetch(`https://api.numselli.xyz/counting/shardStats`).catch(err=>{});
            const status = await ajaxdata.json()

            status.clusters.map(cluster => {
                cluster.shardStats.map((shard, index) => {
                    this.shards.push({
                        id: shard.id,
                        latency: formatNumber(shard.latency),
                        guilds: formatNumber(shard.guilds),
                        users: formatNumber(shard.users),
                        color: shardStatus[shard.status]
                    })
                })
            })
        }
    }
    function formatNumber(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
</script>

<style>.shardGrid{ display: grid; grid-template-columns: repeat(auto-fill, minmax(344px, 1fr)); gap: 1.5rem;}</style>