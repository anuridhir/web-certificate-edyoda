var playerData = [
    {
        "id": 15,
        "playerName": "Shikhar Dhawan",
        "from": "KXlP",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/41.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 15,
        "playerName": "Mayank Agrawal",
        "from": "KXlP",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/158.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 15,
        "playerName": "Jonny Bairstow",
        "from": "KXlP",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/506.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 15,
        "playerName": "Harpreet Brar",
        "from": "KXlP",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5441.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 15,
        "playerName": "Rishi Dhawan",
        "from": "KXlP",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1088.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 15,
        "playerName": "Arshdeep Singh",
        "from": "KXlP",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4698.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 15,
        "playerName": "Rahul Chahar",
        "from": "KXlP",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3763.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 15,
        "playerName": "Sandeep Sharma",
        "from": "KXlP",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1112.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 15,
        "playerName": "Jitesh Sharma",
        "from": "KXlP",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3185.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 16,
        "playerName": "Kagiso Rabada",
        "from": "KXlP",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1664.png",
        "playerTeam": "Kings Xl Punjab"
    },
    {
        "id": 17,
        "playerName": "Sandeep Sharma",
        "from": "KXlP",
        "price": "1.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1112.png",
        "playerTeam": "Kings Xl Punjab"
    }
];




var container = document.getElementById('container');
container.style.paddingLeft = '100px'
for(let i=0;i<playerData.length;i++){
    var subContainer = document.createElement('div');
    subContainer.style.backgroundColor = '#84171B';
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