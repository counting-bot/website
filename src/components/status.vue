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