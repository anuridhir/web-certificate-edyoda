var playerData = [
    {
        "id": 0,
        "playerName": "Suryakumar Yadav",
        "from": "MI",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/108.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 1,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 2,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "12.5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 2,
        "playerName": "Arjun Tendulkar",
        "from": "MI",
        "price": "10 Lakh",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/10244.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 2,
        "playerName": "Daniel Sams",
        "from": "MI",
        "price": "1.5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/4649.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 2,
        "playerName": "Kieron Pollard",
        "from": "MI",
        "price": "16.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/210.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 2,
        "playerName": "Sanjay Yadav",
        "from": "MI",
        "price": "2.5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/10631.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 2,
        "playerName": "Tim David",
        "from": "MI",
        "price": "12.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/4524.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 2,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "18.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 2,
        "playerName": "Jaydev Unadkat",
        "from": "MI",
        "price": "10.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/86.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 2,
        "playerName": "Murugan Ashwin",
        "from": "MI",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/3187.png',
        "playerTeam": "Mumbai Indians"
    }
];


var container = document.getElementById('container');
container.style.paddingLeft = '100px';

for(let i=0;i<playerData.length;i++){
    var subContainer = document.createElement('div');
    subContainer.style.backgroundColor = '#003B7A';
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
