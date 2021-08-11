// set golabl vars
let gloabldata = {
    "APIurl":`https://api.numeslli.xyz`,
    "scorestabledata":[],
    "scoresDataSortDirection": false,
    "userscorestabledata": [],
    "stats":{}
};
const breakpoints=function(){"use strict";function e(e){t.init(e)}let t={list:null,media:{},events:[],init:function(e){t.list=e,window.addEventListener("resize",t.poll),window.addEventListener("orientationchange",t.poll),window.addEventListener("load",t.poll),window.addEventListener("fullscreenchange",t.poll)},active:function(e){let n,a,s,i,r,d,c;if(!(e in t.media)){if(">="==e.substr(0,2)?(a="gte",n=e.substr(2)):"<="==e.substr(0,2)?(a="lte",n=e.substr(2)):">"==e.substr(0,1)?(a="gt",n=e.substr(1)):"<"==e.substr(0,1)?(a="lt",n=e.substr(1)):"!"==e.substr(0,1)?(a="not",n=e.substr(1)):(a="eq",n=e),n&&n in t.list)if(i=t.list[n],Array.isArray(i)){if(r=parseInt(i[0]),d=parseInt(i[1]),isNaN(r)){if(isNaN(d))return;c=i[1].substr(String(d).length)}else c=i[0].substr(String(r).length);if(isNaN(r))switch(a){case"gte":s="screen";break;case"lte":s="screen and (max-width: "+d+c+")";break;case"gt":s="screen and (min-width: "+(d+1)+c+")";break;case"lt":s="screen and (max-width: -1px)";break;case"not":s="screen and (min-width: "+(d+1)+c+")";break;default:s="screen and (max-width: "+d+c+")"}else if(isNaN(d))switch(a){case"gte":s="screen and (min-width: "+r+c+")";break;case"lte":s="screen";break;case"gt":s="screen and (max-width: -1px)";break;case"lt":s="screen and (max-width: "+(r-1)+c+")";break;case"not":s="screen and (max-width: "+(r-1)+c+")";break;default:s="screen and (min-width: "+r+c+")"}else switch(a){case"gte":s="screen and (min-width: "+r+c+")";break;case"lte":s="screen and (max-width: "+d+c+")";break;case"gt":s="screen and (min-width: "+(d+1)+c+")";break;case"lt":s="screen and (max-width: "+(r-1)+c+")";break;case"not":s="screen and (max-width: "+(r-1)+c+"), screen and (min-width: "+(d+1)+c+")";break;default:s="screen and (min-width: "+r+c+") and (max-width: "+d+c+")"}}else s="("==i.charAt(0)?"screen and "+i:i;t.media[e]=!!s&&s}return t.media[e]!==!1&&window.matchMedia(t.media[e]).matches},on:function(e,n){t.events.push({query:e,handler:n,state:!1}),t.active(e)&&n()},poll:function(){let e,n;for(e=0;e<t.events.length;e++)n=t.events[e],t.active(n.query)?n.state||(n.state=!0,n.handler()):n.state&&(n.state=!1)}};return e._=t,e.on=function(e,n){t.on(e,n)},e.active=function(e){return t.active(e)},e}();!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.breakpoints=t()}(this,function(){return breakpoints});


// event listeners
document.addEventListener("DOMContentLoaded", pageLoad);
window.addEventListener("hashchange", pageLoad, false);
pageLoad()



// headder, title adujust
async function pageLoad(){
    breakpoints({xlarge: ['1281px', '1680px'],large: ['981px', '1280px'],medium: ['737px', '980px'],small: ['361px', '736px'],xsmall: [null, '360px']});

    // init
    const main = document.getElementById("main")
    const panels = main.getElementsByClassName('panel')
    const panel = document.querySelector(`[id="${window.location.hash.replace("#","")}"]`) ?? panels[0];

    // hide pannels
    for(const currentPannel of panels) {
        if (panel.id === currentPannel.id) currentPannel.classList.remove("inactive")
        else currentPannel.classList.add("inactive")
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 

    // set title
    const title = window.location.hash.replace("#","");
    document.title = title == "" ? "Counting" : title;

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
            const userscoresTableBody = document.getElementById("scoresTableBody");
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

                document.getElementById('userscoresTableBody').append(tr);
            })
        break;

        case'status':
            gloabldata.stats = await getAPIdata("stats")
            gloabldata.stats.clusters.map(async cluster=>{
                cluster.shardStats.map(async shard=>{
                    console.log(shard)
                    const shardDiv = document.createElement("div");
                    shardDiv.className="column"
                    shardDiv.classList="column blueBorder verticalAlign"

                    const shardID = document.createElement("span");
                    shardID.innerHTML = `Shard #${shard.id}`;
                    shardDiv.appendChild(shardID);

                    const userCount = document.createElement("span");
                    userCount.innerHTML = `Users: ${formatNumber(shard.users)}`;
                    shardDiv.appendChild(userCount);

                    const cerverCount = document.createElement("span");
                    cerverCount.innerHTML = `Servers: ${formatNumber(shard.guilds)}`;
                    shardDiv.appendChild(cerverCount);

                    const latencyCount = document.createElement("span");
                    latencyCount.innerHTML = `Latency: ${formatNumber(shard.latency)}MS`;
                    shardDiv.appendChild(latencyCount);

                    // "status": "ready",
                    // Latency:
                    // console.log(cluster.shardStats)

                    //     <div class="row" style="padding-top: 2.3%; padding-bottom: 4.3%;">
                    //     <div class="column blueBorder verticalAlign" style="height: 10rem;">
                    //         <h2 id="guilds" class="homeStatTitle">000,000</h2>
                    //         <h3 style="font-weight: bold; vertical-align: middle; ">Servers</h3>
                    //     </div>
                    //     <div class="column blueBorder verticalAlign" style="height: 10rem;">
                    //         <h2 id="dbUsers"class="homeStatTitle">000,000</h2>
                    //         <h3 style="font-weight: bold;">Users</h3>
                    //     </div>
                    //     <div class="column blueBorder verticalAlign" style="height: 10rem;">
                    //         <h2 id="numbersTotal" class="homeStatTitle">000,000</h2>
                    //         <h3 style="font-weight: bold; vertical-align: middle;">Numbers Counted</h3>
                    //     </div>
                    // </div>
                    document.getElementById("clusterContainer").appendChild(shardDiv);

                })

                //         console.log(cluster)
                //         // rounded
                //         $('#clusterContainer').append(`
                //             <div id="cluster_${cluster.id}" style="justify-content: center;  border-radius: 30px; border: 2.5px solid rgba(170, 50, 220, .6); min-height: 100px">
                //                 <span>Cluster: ${cluster.id}<span>
                //                 <div id="cluster_${cluster.id}_shardContainer" style="display: grid;  grid-gap: 1rem; grid-template-columns:  repeat(3, auto);
                //                     align-items: center; "></div>
                //             </div>
                //         `);

                //         cluster.shardStats.map(shard=>{
                //             let shardColor = shardStatus(shard.status);
                //             $(`#cluster_${cluster.id}_shardContainer`).append(`
                //                 <div id="shard_${shard.id}" style="background: #0F273C; width: 55px; hight: 55px; text-align: center;">
                //                     <span style="color: ${shardColor}">${shard.id}</span>
                //                 </div>
                //             `);
                //         })
            })
        break;
        default:
            if (Object.keys(gloabldata.stats).length === 0) gloabldata.stats = await getAPIdata("stats");

            ['guilds', "dbUsers", "numbersTotal"].forEach(async stat=>{
                document.getElementById(stat).innerHTML = formatNumber(stat === "numbersTotal" ? gloabldata.stats.numbers.total : gloabldata.stats[stat])
            })
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
function togleNav(hide) {
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
    const ajaxdata = await fetch(`${gloabldata.APIurl}/${item}`).catch(err=>console.error);
    return await ajaxdata.json() ?? undefined
}
function imgError() {
    if (this.src != 'assets/img/error.png') this.src = 'assets/img/error.png';
}
function formatNumber(num){
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}