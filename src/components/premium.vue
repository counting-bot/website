<template>
    <div class="container">
        <div class="row">
            <div class="col s4">
                <div class="card grey darken-3">
                    <div class="card-image">
                        <img src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/4053717/3ee7406956d7471cabf1975ccb90361f/eyJ3Ijo0MDB9/1.png?token-time=2145916800&token-hash=TyYeL-J1ty7_ZA-Fryx7r5qgj2o0UCpsSG3wplg2E6A%3D"/>
                        <span class="card-title">Tier 1</span>
                    </div>
                    <div class="card-content">
                        <div class="center-align">
                            <div>
                                <sub style="vertical-align: top;">USD</sub>
                                <span style="font-weight: bold;">$1</span>
                            </div>
                            <div>
                                <span>PER MONTH</span>
                            </div>
                        </div>
                        <div>
                            <ul class="browser-default">
                                <li>Supporter role in Discord server</li>
                                <li>Supporter-only channel in the Discord server</li>
                                <li>2x voting multiplier</li>
                                <li>Save slots filled every month</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-action">
                        <a class="waves-effect waves-light btn disabled" @click="buy(1)">Join</a>
                    </div>
                </div>
            </div>

            <div class="col s4">
                <div class="card grey darken-3">
                    <div class="card-image">
                        <img src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/4053717/3ee7406956d7471cabf1975ccb90361f/eyJ3Ijo0MDB9/1.png?token-time=2145916800&token-hash=TyYeL-J1ty7_ZA-Fryx7r5qgj2o0UCpsSG3wplg2E6A%3D"/>
                        <span class="card-title">Tier 2</span>
                    </div>
                    <div class="card-content">
                        <div class="center-align">
                            <div>
                                <sub style="vertical-align: top;">USD</sub>
                                <span style="font-weight: bold;">$3</span>
                            </div>
                            <div>
                                <span>PER MONTH</span>
                            </div>
                        </div>
                        <div>
                            <ul class="browser-default">
                                <li>Supporter role in Discord server</li>
                                <li>Supporter-only channel in the Discord server</li>
                                <li>2x voting multiplier</li>
                                <li>Save slots filled every month</li>
                                <li>Per channel stats</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-action">
                        <a class="waves-effect waves-light btn disabled" @click="buy(2)">Join</a>
                    </div>
                </div>
            </div>

            <div class="col s4">
                <div class="card grey darken-3">
                    <div class="card-image">
                        <img src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/4053717/3ee7406956d7471cabf1975ccb90361f/eyJ3Ijo0MDB9/1.png?token-time=2145916800&token-hash=TyYeL-J1ty7_ZA-Fryx7r5qgj2o0UCpsSG3wplg2E6A%3D"/>
                        <span class="card-title">Sponsor</span>
                    </div>
                    <div class="card-content">
                        <strong>
                            <span>Any amount</span>
                        </strong>
                        <ul class="browser-default">
                            <li>Support me and my creations</li>
                            <li>Sponsor role in Discord server</li>
                        </ul>
                    </div>
                    <div class="card-action">
                        <a class="waves-effect waves-light btn disabled" @click="buy(3)">Join</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
    name: 'premium',
    data() {
        return {
        }
    },
     setup() {
    const siteData = reactive({
      title: `Premium`,
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
    methods:{
        buy(item){
            switch (item){
                case 1: {
                    console.log("do thie thing for 1")
                }
                break;
                case 2: {
                    console.log("do thie thing for 2")
                }
                break;
                case 3: {
                    console.log("do thie thing for 3")
                }
                break;
            }
            console.log(item)
        }
    }
}
</script>