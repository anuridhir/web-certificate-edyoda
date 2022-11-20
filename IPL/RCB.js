var playerData = [
    {
        "id": 3,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "8.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 4,
        "playerName": "Faf du Plessis",
        "from": "RCB",
        "price": "10.30 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/24.png',
        "playerTeam": "Royal Challengers Bangalore"
    }, 
    {
        "id": 5,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "14.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "Harshal Patel",
        "from": "RCB",
        "price": "12.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/157.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "Akash Deep",
        "from": "RCB",
        "price": "1.25 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/14800.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "Josh Hazlewood",
        "from": "RCB",
        "price": "13.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/857.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "Karn Sharma",
        "from": "RCB",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1118.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "Mohmmad Siraj",
        "from": "RCB",
        "price": "11.75 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "Dinesh Karthik",
        "from": "RCB",
        "price": "16.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/102.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "David Willey",
        "from": "RCB",
        "price": "4.25 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2758.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "Shahbaz Ahamad",
        "from": "RCB",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/13803.png",
        "playerTeam": "Royal Challengers Bangalore"
    }
];




var container = document.getElementById('container');
container.style.paddingLeft = '100px'
for(let i=0;i<playerData.length;i++){
    var subContainer = document.createElement('div');
    subContainer.style.backgroundColor = '#433f3f';
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