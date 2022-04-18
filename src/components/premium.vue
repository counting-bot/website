<template>
     <div class="container">
      <div class="row">
          <div class="col s4">
              <div class="col s12 m7">
                  <div class="card grey darken-3">
                      <div class="card-image">
                          <!-- <img src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/4053717/3ee7406956d7471cabf1975ccb90361f/eyJ3Ijo0MDB9/1.png?token-time=2145916800&token-hash=TyYeL-J1ty7_ZA-Fryx7r5qgj2o0UCpsSG3wplg2E6A%3D"> -->
                          <span class="card-title">Tier 1</span>
                      </div>
                      <div class="card-content">
                          <div class="center-align">
                              <div>
                                  <sub style="vertical-align: top;">USD</sub><span style="font-weight: bold;">$1</span>
                              </div>
                              <div>
                                  <span>PER MONTH</span>
                              </div>
                          </div>
                          <div>
                              <ul class="browser-default">
                                  <li>Patreon role in Discord server</li>
                                  <li>Patron-only channel in the Discord server</li>
                                  <li>2x voting multiplier</li>
                              </ul>
                          </div>
                      </div>
                      <div class="card-action">
                          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                              <input type="hidden" name="cmd" value="_s-xclick">
                              <input type="hidden" name="hosted_button_id" value="REDACTED">
                              <!-- <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"> -->
                              <input type="button" value="Join" style="border: none; background: none; cursor: pointer; margin: 0; padding: 0; color: #ffab40; -webkit-transition: .3s ease; transition: color .3s ease; text-transform:uppercase;"/>
                              <input type="hidden" name="custom" value='{"discord_user_id": {{ user_info.id }}, "discord_guild_id": {{ guild.id }}}'>
                          </form>
                          <!-- <a href="https://www.patreon.com/join/8401731/checkout?rid=8430742" rel="nofollow noopener" target="_blank">Join</a> -->
                      </div>
                  </div>
              </div>
          </div>

          <div class="col s4">
              <div class="col s12 m7">
                  <div class="card grey darken-3">
                      <div class="card-image">
                          <!-- <img src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/4053717/3ee7406956d7471cabf1975ccb90361f/eyJ3Ijo0MDB9/1.png?token-time=2145916800&token-hash=TyYeL-J1ty7_ZA-Fryx7r5qgj2o0UCpsSG3wplg2E6A%3D"> -->
                          <span class="card-title">Tier 2</span>
                      </div>
                      <div class="card-content">
                          <div class="center-align">
                              <div>
                                  <sub style="vertical-align: top;">USD</sub><span style="font-weight: bold;">$3</span>
                              </div>
                              <div>
                                  <span>PER MONTH</span>
                              </div>
                          </div>
                          <div>
                              <ul class="browser-default">
                                  <li>Patreon role in Discord server</li>
                                  <li>Patron-only channel in the Discord server</li>
                                  <li>2x voting multiplier</li>
                                  <li>Per channel stats</li>
                              </ul>
                          </div>
                      </div>
                      <div class="card-action">
                          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                              <input type="hidden" name="cmd" value="_s-xclick">
                              <input type="hidden" name="hosted_button_id" value="REDACTED">
                              <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">
                              <input type="hidden" name="custom" value='{"discord_user_id": {{ user_info.id }}, "discord_guild_id": {{ guild.id }}}'>
                          </form>
                          <a href="https://www.patreon.com/join/8401731/checkout?rid=8430743" rel="nofollow noopener" target="_blank">Join</a>
                      </div>
                  </div>
              </div>
          </div>

          <div class="col s4">
              <div class="col s12 m7">
                  <div class="card grey darken-3">
                      <div class="card-image">
                          <!-- <img src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/4053717/3ee7406956d7471cabf1975ccb90361f/eyJ3Ijo0MDB9/1.png?token-time=2145916800&token-hash=TyYeL-J1ty7_ZA-Fryx7r5qgj2o0UCpsSG3wplg2E6A%3D"> -->
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
                          <a href="https://ko-fi.com/numselli" rel="nofollow noopener" target="_blank">Join</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
<!-- </div> -->
</template>

<script>
  // const ajaxdata = await fetch(`https://api.numselli.xyz/counting/mainStats`).catch(err => console.error);
  // const { guilds, dbUsers, numbers } = await ajaxdata.json();
  // const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  export default {
    name: 'premium',
    data() {
      return {
        // guildCount: formatNumber(guilds),
        // userCount: formatNumber(dbUsers),
        // numberCount: formatNumber(numbers.total)
      }
    }
  }
</script>

    <!-- // event listeners
            document.addEventListener("DOMContentLoaded", async () => {
                const navElems = document.querySelectorAll('.sidenav');
                let navInstances = M.Sidenav.init(navElems);



                // <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                //                             <input type="hidden" name="cmd" value="_s-xclick">
                //                             <input type="hidden" name="hosted_button_id" value="REDACTED">
                //                             <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"> -->
                <!-- //                             <input type="button" value="Join" style="border: none; background: none; cursor: pointer; margin: 0; padding: 0; color: #ffab40; -webkit-transition: .3s ease; transition: color .3s ease; text-transform:uppercase;"/>
                //                             <input type="hidden" name="custom" value='{"discord_user_id": {{ user_info.id }}, "discord_guild_id": {{ guild.id }}}'>
                //                         </form> -->
            <!-- }) --> 
            