var playerData = [
    {
        "id": 6,
        "playerName": "MS Dhoni",
        "from": "CSK",
        "price": "12.75 cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Ravindra Jadeja",
        "from": "CSK",
        "price": "5.25 cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Moeen Ali",
        "from": "CSK",
        "price": "3.75 cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1735.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Simarjeet Singh",
        "from": "CSK",
        "price": "50 Lakh",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/10789.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Robin Uthappa",
        "from": "CSK",
        "price": "2.50 cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Mitchell Santner",
        "from": "CSK",
        "price": "1.25 cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1903.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Shivam Dube",
        "from": "CSK",
        "price": "5.25 cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Deepak Chahar",
        "from": "CSK",
        "price": "5.60 cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/140.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Ambati Rayudu",
        "from": "CSK",
        "price": "6.25 cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Adam Milne",
        "from": "CSK",
        "price": "5.50 cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/434.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 8,
        "playerName": "DJ Bravo",
        "from": "CSK",
        "price": "3.00 cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
        "playerTeam": "Chennai Super Kings"
    }
];


var container = document.getElementById('container');
container.style.paddingLeft = '100px'
for(let i=0;i<playerData.length;i++){
    var subContainer = document.createElement('div');
    subContainer.style.backgroundColor = '#e2b738';
    subContainer.style.width = '400px';
    subContainer.style.height = '700px'; 
    subContainer.style.display = 'inline'; 
    subContainer.style.borderRadius = '10px'; 
    subContainer.style.fontFamily = 'sans-serif';
    subContainer.style.color = 'white';
    subContainer.style.letterSpacing = '1px';
    // subContainer.style.paddingBottom = '30px';
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