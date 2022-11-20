var playerData = [
    {
        "id": 9,
        "playerName": "Sanju Samson",
        "from": "RR",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/258.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 10,
        "playerName": "Devdatt  Padikkal",
        "from": "RR",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 10,
        "playerName": "Jos Buttler",
        "from": "RR",
        "price": "12.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 10,
        "playerName": "Karun Nair",
        "from": "RR",
        "price": "8.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/276.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 10,
        "playerName": "Shimron Hetmyer",
        "from": "RR",
        "price": "7.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1705.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 10,
        "playerName": "Riyan Parag",
        "from": "RR",
        "price": "6.25 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4445.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 10,
        "playerName": "Kuldeep Sen",
        "from": "RR",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20616.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 10,
        "playerName": "Navdeep Saini",
        "from": "RR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3824.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 10,
        "playerName": "Trent Boult",
        "from": "RR",
        "price": "12.75 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/969.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 10,
        "playerName": "Yuzvendra Chahal",
        "from": "RR",
        "price": "17.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/111.png",
        "playerTeam": "Rajastan Royals"
    },
    {
        "id": 11,
        "playerName": "Ravichandran Ashwin",
        "from": "RR",
        "price": "16.25 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/8.png",
        "playerTeam": "Rajastan Royals"
    }
];




var container = document.getElementById('container');
container.style.paddingLeft = '100px'
for(let i=0;i<playerData.length;i++){
    var subContainer = document.createElement('div');
    subContainer.style.backgroundColor = '#871550';
    subContainer.style.width = '400px';
    subContainer.style.height = '700px'; 
    subContainer.style.display = 'inline'; 
    subContainer.style.borderRadius = '10px'; 
    subContainer.style.fontFamily = 'sans-serif';
    subContainer.style.color = 'white';
    subContainer.style.letterSpacing = '1px';
    var pimg = document.createElement('img');
    pimg.src=playerData[i].playerImg;
    pimg.style.width = '400px';
    pimg.style.height = '420px'; 
    var br = document.createElement('br');
    var Pname = document.createElement('h1');
    Pname.innerText = playerData[i].playerName;
    Pname.style.textAlign = 'center';
    Pname.style.paddingTop = '30px';
    var plays = document.createElement('h2');
    plays.innerText = playerData[i].description;
    plays.style.textAlign = 'center';
    plays.style.paddingTop = '20px';
    var Price = document.createElement('h1');
    Price.innerText = playerData[i].price;
    Price.style.textAlign = 'center';
    Price.style.paddingTop = '20px';
    subContainer.append(pimg, Pname, plays, Price)
    container.appendChild(subContainer);
}