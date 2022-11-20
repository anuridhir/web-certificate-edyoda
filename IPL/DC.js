var playerData = [
    {
        "id": 18,
        "playerName": "David Warner",
        "from": "DC",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/170.png",
        "playerTeam": "Delhi Capitals"
    },

    {
        "id": 19,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "13.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 19,
        "playerName": "Rovman Powell",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3333.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 19,
        "playerName": "Axar Patel",
        "from": "DC",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1113.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 19,
        "playerName": "Pravin Dubey",
        "from": "DC",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3188.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 19,
        "playerName": "Sarfaraz Khan",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1564.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 19,
        "playerName": "Mustafizur Rahman",
        "from": "DC",
        "price": "9.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1594.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 19,
        "playerName": "Mandeep Singh",
        "from": "DC",
        "price": "5.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 19,
        "playerName": "Enrich Nortije",
        "from": "DC",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5433.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 19,
        "playerName": "Lungi Ndigi",
        "from": "DC",
        "price": "13.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3746.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 20,
        "playerName": "Prithvi Shaw",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3764.png",
        "playerTeam": "Delhi Capitals"
    }
];



var container = document.getElementById('container');
container.style.paddingLeft = '100px'
for(let i=0;i<playerData.length;i++){
    var subContainer = document.createElement('div');
    subContainer.style.backgroundColor = '#17479E';
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