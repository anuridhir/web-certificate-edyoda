var playerData = [
    {
        "id": 21,
        "playerName": "Shreyas Gopal",
        "from": "SRH",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1748.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 22,
        "playerName": "Bhuvneshwar Kumar",
        "from": "SRH",
        "price": "18.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/116.png",
        "playerTeam": "Sunrises Hyderabad"
    },
   
    {
        "id": 23,
        "playerName": "Kane Willamson",
        "from": "SRH",
        "price": "17.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/440.png",
        "playerTeam": "Sunrises Hyderabad"
    }, 
    {
        "id": 23,
        "playerName": "Priyam Garg",
        "from": "SRH",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3775.png",
        "playerTeam": "Sunrises Hyderabad"
    }, 
    {
        "id": 23,
        "playerName": "Rahul Tripathi",
        "from": "SRH",
        "price": "11.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3838.png",
        "playerTeam": "Sunrises Hyderabad"
    }, 
    {
        "id": 23,
        "playerName": "Nicholas Pooran",
        "from": "SRH",
        "price": "8.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1703.png",
        "playerTeam": "Sunrises Hyderabad"
    }, 
    {
        "id": 23,
        "playerName": "Shashank Singh",
        "from": "SRH",
        "price": "3.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3261.png",
        "playerTeam": "Sunrises Hyderabad"
    }, 
    {
        "id": 23,
        "playerName": "Washington Sundar",
        "from": "SRH",
        "price": "12.75 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2973.png",
        "playerTeam": "Sunrises Hyderabad"
    }, 
    {
        "id": 23,
        "playerName": "Kartik Tyagi",
        "from": "SRH",
        "price": "2.25 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/10059.png",
        "playerTeam": "Sunrises Hyderabad"
    }, 
    {
        "id": 23,
        "playerName": "Shreyas Gopal",
        "from": "SRH",
        "price": "9.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1748.png",
        "playerTeam": "Sunrises Hyderabad"
    }, 
    {
        "id": 23,
        "playerName": "Abdul Samdad",
        "from": "SRH",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/19352.png",
        "playerTeam": "Sunrises Hyderabad"
    }
];




var container = document.getElementById('container');
container.style.paddingLeft = '100px'
for(let i=0;i<playerData.length;i++){
    var subContainer = document.createElement('div');
    subContainer.style.backgroundColor = '#F26522';
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