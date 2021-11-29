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
        case `userscores`:
          
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