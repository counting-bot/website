<template>
    <div class="container">
        <div class='row'>
            <div class="input-field col s6">
                <select id="modeSelect"></select>
                <label>Mode</label>
            </div>

            <div class="input-field col s6">
                <select id="sortBy">
                    <option value="hs" selected>Current Scores</option>
                    <option value="current">High Scores</option>
                </select>
                <label>Sort By</label>
            </div>
        </div>
        <table class="striped centered highlight">
            <thead>
                <tr>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Current Score</th>
                    <th>High Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="guild in guilds" :key="guild.first">
                    <td>
                        <!-- <img  v-if="guild.url" class="circle guildimg" :src=guild.url @error="$event.src='assets/img/error.png'" :alt=guild.name loading="lazy">
                        <img v-else src="/assets/img/error.png" class="circle guildimg" alt=guild.name loading="lazy"/> -->
                        <img class="circle guildimg" :src=guild.url v-on:error="this.src='assets/img/error.png'" :alt=guild.name loading="lazy">
                    </td>
                    <td>{{guild.name}}</td>
                    <td>{{guild.last_num}}</td>
                    <td>{{guild.hs}}</td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'userscores',
        data() {
            return {
                // failed_image: false,
                guilds: [],
                page: 0,
            };
        },
        methods: {
            async loadUsers() {
                const mode = 0
                const sortBy = "hs"
                // const mode = document.getElementById("modeSelect").value
                // const sortBy = document.getElementById("sortBy").value
                const ajaxdata = await fetch(`https://api.numselli.xyz/counting/scores/${mode}?page=${this.page}&sortby=${sortBy}`);
                // if (!ajaxdata.ok) return;
                const json = await ajaxdata.json()

                json.map(({name, url, hs, last_num})=>{
                    this.guilds.push({name, url, hs, last_num})              
                })
            },
            getNextUser() {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        this.page++
                        loadUsers()
                    }
                }
            },
            // onImgError: function(event) {
            //     this.failed_image = true;
            // }
        },
        // computed: {
        //     cPicture: function() {
        //         return this.failed_image ? "https://picsum.photos/500/300?image=4" : "https://pisum.photos/500/300?image=5";
        //     },
        // },

        beforeMount() {
            this.loadUsers();
        },
        mounted() {
            this.getNextUser()
        }
    }
</script>

<style>
    .guildimg{width:40px;}
    table {background: white;}
    table thead tr {background: #36304a;}
    tbody tr:nth-child(even) {background-color: #f5f5f5;}
    tbody tr {color: #808080;}
    tbody tr:hover {color: #555555; background-color: #f5f5f5;}
</style>

 <!-- let currentPage = 0

            // event listeners
            document.addEventListener("DOMContentLoaded", async()=>{
                const navElems = document.querySelectorAll('.sidenav');
                let navInstances = M.Sidenav.init(navElems);

                const modes = await getFromAPI("countingmodes");
                Object.keys(modes).map((key, index)=>{
                    let option = document.createElement("option")
                    option.value = key
                    if (index==0)option.selected=true;
                    option.textContent=modes[key]
                    document.getElementById("modeSelect").appendChild(option)
                })

                const modeSelectElement = document.getElementById('modeSelect');
                let Modeinstance = M.FormSelect.init(modeSelectElement);

                const sortByElement = document.getElementById('sortBy');
                let sortByElementInstance = M.FormSelect.init(sortByElement);

                modeSelectElement.addEventListener("change", ()=>{
                    initTable(true)
                })
                sortByElement.addEventListener("change", ()=>{
                    initTable(true)
                })

                initTable()
            });

            async function initTable(shouldReset){
                if (shouldReset){
                    const body = document.createElement("tbody")
                    body.id = "scoresTableBody"

                    document.getElementById("scoresTableBody").remove()
                    document.getElementsByTagName("table")[0].appendChild(body)
                }

                // when mode is switched
                await load(currentPage)

                const io = new IntersectionObserver(entries => {
                    entries.map(async entry => {
                        if (entry.intersectionRatio > 0.9) {
                            currentPage+=1
                            io.unobserve(entry.target);
                            await load(currentPage);
                            io.observe(document.getElementById("scoresTableBody").lastChild);
                        }
                    });
                }, {
                    rootMargin: "25px",
                    threshold: 1.0
                });

                io.observe(document.getElementById("scoresTableBody").lastChild);
            }

            function imgError() {
                if (this.src != 'assets/img/error.png') this.src = 'assets/img/error.png';
            }
            function formatNumber(num){
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
           -->