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
export default {
    name: 'premium',
    data() {
        return {
        }
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