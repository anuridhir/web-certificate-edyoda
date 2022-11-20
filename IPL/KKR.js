var playerData = [
    {
        "id": 12,
        "playerName": "Andre Russell",
        "from": "KKR",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/177.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 13,
        "playerName": "Shreyas Iyer",
        "from": "KKR",
        "price": "5.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 14,
        "playerName": "Ajinkya Rahane",
        "from": "KKR",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/135.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 14,
        "playerName": "Aaron Finch",
        "from": "KKR",
        "price": "8.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/167.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 14,
        "playerName": "Sam Billings",
        "from": "KKR",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2756.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 14,
        "playerName": "Pat Cummins",
        "from": "KKR",
        "price": "16.50 Cr",
        "isPlaying": true,
        "description": "All-Rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 14,
        "playerName": "Mohmmand Nabi",
        "from": "KKR",
        "price": "4.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/618.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 14,
        "playerName": "Nitish Rana",
        "from": "KKR",
        "price": "11.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2738.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 14,
        "playerName": "Shivam Mavi",
        "from": "KKR",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3779.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 14,
        "playerName": "Umesh Yadav",
        "from": "KKR",
        "price": "15.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/59.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 14,
        "playerName": "Tim Southee",
        "from": "KKR",
        "price": "12.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/307.png",
        "playerTeam": "Kolkata Knight Riders"
    }
];




var container = document.getElementById('container');
container.style.paddingLeft = '100px'
for(let i=0;i<playerData.length;i++){
    var subContainer = document.createElement('div');
    subContainer.style.backgroundColor = '#552792';
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