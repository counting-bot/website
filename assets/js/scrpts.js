// set golabl vars
let gloabldata = {
    "scorestabledata":[],
    "scoresDataSortDirection": false,
    "userscorestabledata": [],
};

// event listeners
// page load
document.addEventListener("DOMContentLoaded", pageLoad);
window.addEventListener("hashchange", pageLoad, false);
pageLoad()
// sorting buttons
document.getElementById('scoresSortName').addEventListener('click', sortdata);
document.getElementById('scoresSortCS').addEventListener('click', sortdata);
document.getElementById('scoresSortHS').addEventListener('click', sortdata);
// nav buttons
document.getElementById('togleNav').addEventListener('click', togleNav);
document.getElementById('navLinkInvite').addEventListener('click', togleNav);
document.getElementById('navLinksupport').addEventListener('click', togleNav);
document.getElementById('navLinkPremium').addEventListener('click', togleNav);
document.getElementById('navLinkScores').addEventListener('click', togleNav);
document.getElementById('navLinkUserScores').addEventListener('click', togleNav);
document.getElementById('navLinkPrivacy').addEventListener('click', togleNav);
document.getElementById('navLinkStatus').addEventListener('click', togleNav);
document.getElementById('navLinkToggle').addEventListener('click', togleNav);


// headder, title adujust
async function pageLoad(){
    // per page logic
    switch(title){
        case `scores`:
            const scoresTableBody = document.getElementById("scoresTableBody");
            if (scoresTableBody.getElementsByTagName("tr").length>0) return

            gloabldata.scorestabledata = await getAPIdata("scores");
            gloabldata.scorestabledata.map(({name, url, hs, last_num})=>{
                const tr = document.createElement("tr")
                tr.className="tr"

                const imgTD = document.createElement("td")
                let img = document.createElement("img")
                img.className="guildimg"
                img.src = url
                img.alt= `${name}'s guild icon`
                img.loading="lazy"
                img.onerror=imgError
                tr.appendChild(imgTD.appendChild(img));

                const nameNode = document.createElement("td")
                nameNode.innerHTML=name
                tr.appendChild(nameNode)

                const lastNumNode = document.createElement("td")
                lastNumNode.innerHTML = formatNumber(last_num)
                tr.appendChild(lastNumNode)

                const hsNumNode = document.createElement("td")
                hsNumNode.innerHTML = formatNumber(hs)
                tr.appendChild(hsNumNode)

                document.getElementById('scoresTableBody').append(tr)                
            })
        break;
        case `userscores`:
            const userscoresTableBody = document.getElementById("userScoresTableBody");
            if (userscoresTableBody.getElementsByTagName("tr").length>0) return

            gloabldata.userscorestabledata = (await getAPIdata("userscores")).slice(0, 60);
            gloabldata.userscorestabledata.forEach(async({correctnumbers, username, wrongnumbers}, index) => {
                const tr = document.createElement("tr")

                const rankNode = document.createElement("td")
                rankNode.innerHTML = index+1
                tr.appendChild(rankNode)

                const userNameNode = document.createElement("td")
                userNameNode.innerHTML = username;
                tr.appendChild(userNameNode);

                const scoresNode = document.createElement("td");
                scoresNode.innerHTML = formatNumber(correctnumbers+wrongnumbers);
                tr.appendChild(scoresNode);

                document.getElementById('userScoresTableBody').append(tr);
            })
        break;
        case `status`:
            const clsuterContainer = document.getElementById("clsuterContainer");
            if (clsuterContainer.getElementsByTagName("div").length>0) document.getElementById("clsuterContainer").innerHTML = "";
            
            const status = await getAPIdata("stats");
            status.clusters.map(cluster => {
                cluster.shardStats.map(shard => {
                    const shardNode = document.createElement("div");
                    shardNode.id=`shard_${cluster.id}`
                    shardNode.classList='shardNode'

                    const shardTitle = document.createElement("div");
                    shardTitle.classList="shardTitle"
                    const shardID = document.createElement("span")
                    shardID.innerHTML = `Shard #${shard.id}`
                    shardTitle.appendChild(shardID)

                    const shardStatusDiv = document.createElement("div");
                    shardStatusDiv.style.backgroundColor = shardStatus(shard.status)
                    shardStatusDiv.classList="shardStatusDiv"
                    shardTitle.appendChild(shardStatusDiv)
                    shardNode.appendChild(shardTitle)

                    const ShardBody = document.createElement("div");
                    ShardBody.classList="shardStatsdGrid"

                    const latencyDIV = document.createElement("div");
                    const latencytext = document.createElement("span")
                    latencytext.innerHTML = "Latency: "
                    latencyDIV.appendChild(latencytext)
                    const latency = document.createElement("span")
                    latency.innerHTML = `${formatNumber(shard.latency)} MS`
                    latencyDIV.appendChild(latency)
                    ShardBody.appendChild(latencyDIV)
                    const guildsDIV = document.createElement("div");
                    const guildsText = document.createElement("span")
                    guildsText.innerHTML = "Guilds: "
                    guildsDIV.appendChild(guildsText)
                    const guilds = document.createElement("span")
                    guilds.innerHTML = formatNumber(shard.guilds)
                    guildsDIV.appendChild(guilds)
                    ShardBody.appendChild(guildsDIV)
                    const usersDIV = document.createElement("div");
                    const usersText = document.createElement("span")
                    usersText.innerHTML = "Users: "
                    usersDIV.appendChild(usersText)
                    const users = document.createElement("span")
                    users.innerHTML = formatNumber(shard.users)
                    usersDIV.appendChild(users)
                    ShardBody.appendChild(usersDIV)
                    shardNode.appendChild(ShardBody)

                    document.getElementById("clsuterContainer").append(shardNode);
                })
            })
        break
        case `vote`:
            const votingSites = [
                "https://top.gg/bot/726560538145849374/vote",
                "https://discords.com/bots/bot/726560538145849374/vote",
                "https://infinitybotlist.com/bots/726560538145849374/vote",
                "https://discordbotlist.com/bots/counting-1881/upvote",
                "https://discordlist.space/bot/726560538145849374/upvote",
                "https://discordextremelist.xyz/en-US/bots/726560538145849374/upvote",
                "https://discord.boats/bot/726560538145849374/vote",
                "https://bots.discordlabs.org/bot/726560538145849374/vote",
            ]
            window.location.href = votingSites[Math.floor((Math.random() * votingSites.length))];
        break;
        default:
            const stats = await getAPIdata("stats");

            document.getElementById("guilds").innerHTML = formatNumber(stats.guilds);
            document.getElementById("dbUsers").innerHTML = formatNumber(stats.dbUsers);
            document.getElementById("numbersTotal").innerHTML = formatNumber(stats.numbers.total);
        break;
    }
}

async function sortdata(column){
    const name = column.getAttribute("name")

    // flick sort arrow
    const sortButtons = document.getElementsByClassName("sortbutton");
    Array.from(sortButtons).map(sortButton=>{
        if (!sortButton.childNodes[1]) return
        if (sortButton.childNodes[1].id == name){
            gloabldata.scoresDataSortDirection = !gloabldata.scoresDataSortDirection;
            document.getElementById(name).classList = gloabldata.scoresDataSortDirection ? 'fa fa-sort-up' : 'fa fa-sort-down'
        }else sortButton.childNodes[1].classList="";
    })

    // sort data
    const dataType = column.getAttribute("dataType")
    gloabldata.scorestabledata.sort((p1, p2) => {
        return {
            "int": gloabldata.scoresDataSortDirection ? p1[name] - p2[name] : p2[name] - p1[name],
            "string": gloabldata.scoresDataSortDirection ? (p1[name] > p2[name]) - (p1[name] < p2[name]) : (p2[name] > p1[name]) - (p2[name] < p1[name])
        }[dataType]
    });

    // update table
    let new_tbody = document.createElement('tbody');
    new_tbody.id = "scoresTableBody"
    gloabldata.scorestabledata.map(data=>{					
        let row = document.createElement("tr")
        row.className ="tr"
        
        let image = document.createElement('img')
        image.src = data.url
        image.className = 'guildimg'
        image.onerror=imgError
        row.appendChild(document.createElement("td").appendChild(image));

        const nameNode = document.createElement("td")
        nameNode.appendChild(document.createTextNode(data.name));
        row.appendChild(nameNode);

        const currentScoreNode = document.createElement("td")
        currentScoreNode.appendChild(document.createTextNode(data.last_num));
        row.appendChild(currentScoreNode);

        const highScoreNode = document.createElement("td")
        highScoreNode.appendChild(document.createTextNode(data.hs));
        row.appendChild(highScoreNode);

        new_tbody.appendChild(row);
    })
    const old_tbody = document.getElementById("scoresTableBody")
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
}
function togleNav(element) {
    const hide = element.srcElement.getAttribute("hide")
    const x = document.getElementById("nav");
    x.className = hide ? "topnav" : x.className === "topnav" ? "responsive" : "topnav"
}


const shardStatus = (status)=>{
    return {
        'disconnected': "#FF0000",
        'connecting': "#ff8000",
        'handshaking': "#ffff00",
        'ready': "#80ff00"
    }[status]
}
async function getAPIdata(item) {	
    const ajaxdata = await fetch(`https://api.numselli.xyz/counting/${item}`).catch(err=>console.error);
    return await ajaxdata.json() ?? undefined
}
function imgError() {
    if (this.src != 'assets/img/error.png') this.src = 'assets/img/error.png';
}
function formatNumber(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}