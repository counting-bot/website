<template>
    <div class="container">
        <div>
            <span>Numbers counted: </span>
            <br>
            <span>correct: </span>
            <br>
            <span>wrong: </span>
            <br>
            <span>accruacay</span>
            <br>
            <span>% contrubeuted to total numbers</span>
            <br>
            <span>guildID: {{guildID}}</span>
            <br>
            <span>channelID: {{channelID}}</span>
        </div>

        <table class="striped centered highlight">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.first">
                    <td>{{user.rank}}</td>
                    <td>{{user.userName}}</td>
                    <td>{{user.score}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'serverStats',
        props: ["guildID", "channelID"],
        data() {
            return {
                users: [],
                page: 0,
            };
        },
        methods: {
            async loadUsers() {
                const ajaxdata = await fetch(`https://api.numselli.xyz/counting/userscores?page=${this.page}`).catch(err=>console.error);
                (await ajaxdata.json()).map(({correctnumbers, username, wrongnumbers}, index) => {
                    this.users.push({
                        rank: ((this.page*60)+index+1),
                        userName: username,
                        score: (correctnumbers+wrongnumbers).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    });
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
            }
        },
        beforeMount() {
            this.loadUsers();
        },
        mounted(props) {
            console.log(props)
            if (!props?.channelID){
                console.log("showing guild stats")
            }else{
                console.log("showing channel stats")
            }
            this.getNextUser()
        }
    }
</script>

<style>
    table {background: white;}
    table thead tr {background: #36304a;}
    tbody tr:nth-child(even) {background-color: #f5f5f5;}
    tbody tr {color: #808080;}
    tbody tr:hover {color: #555555; background-color: #f5f5f5;}
</style>
