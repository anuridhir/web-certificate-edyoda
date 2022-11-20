var teamData = [
    {
        "id": 0,
        "teamName": "Mumbai Indians",
        'teamLogo': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Medium/MI.png',
        "Won": '5 Time Champions'  ,
        "from": "MI",
        'bg': '#003B7A'
    },
    {
        "id": 1,
        "teamName": "Delhi Capitals",
        'teamLogo': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Medium/DC.png',
        "Won": '0 Time Champions',
        "from": "DC",
        'bg': '#17479E'  
    },
    {
        "id": 2,
        "teamName": "Kings Xl Punjab",
        'teamLogo': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Medium/PBKS.png',
        "Won": '1 Time Champions' ,
        "from": "KXlP",
        'bg': ' #84171B' 
    },
    {
        "id": 3,
        "teamName": "Rajastan Royals",
        'teamLogo': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Medium/RR.png',
        "Won": '1 Time Champions' ,
        "from": "RR",
        'bg': '#871550' 
    },
    {
        "id": 4,
        "teamName": "Royal Challengers Bangalore",
        'teamLogo': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Medium/RCB.png',
        "Won": '0 Time Champions' ,
        "from": "RCB",
        'bg': '#433f3f'
    },
    {
        "id": 5,
        "teamName": "Chennai Super Kings",
        'teamLogo': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Medium/CSK.png',
        "Won": '4 Time Champions' ,
        "from": "CSK",
        'bg': '#e2b738'
    },
    {
        "id": 6,
        "teamName": "Kolkata Knight Riders",
        'teamLogo': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Medium/KKR.png',
        "Won": '2 Time Champions' ,
        "from": "KKR",
        'bg': '#552792' 
    },
    {
        "id": 7,
        "teamName": "Sunrises Hydrabad",
        'teamLogo': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png',
        "Won": '1 Time Champions',
        "from": "SRH",
        'bg': '#F26522 '  
    }
];



var search = document.getElementById('search');
search.addEventListener('keyup',onSearch);
 
function onSearch(e) {
    var key = e.target.value;
    e.preventDefault();
    
    for(var i = 0; i < teamData.length; i++){
        if(e.target.value.toUpperCase() === teamData[i].from.toUpperCase()){
            location.href = teamData[i].from + '.html';
        }
    }
} 
        


var test = document.getElementById('test');
 
for(let i=0;i<teamData.length;i++){
    var a = document.createElement('a');
    a.style.cursor = 'pointer';
    a.style.textDecoration = 'none';
    a.href = teamData[i].from + '.html';
    var container = document.createElement('div');
    container.id = container;
    container.style.width = '350px';  
    container.style.height = '450px';
    container.style.borderRadius = '10px';
    container.style.textAlign = 'center';
    container.style.backgroundColor = teamData[i].bg;
    var logo = document.createElement('img');
    logo.src = teamData[i].teamLogo;
    logo.style.width = '200px';
    logo.style.height = '200px';
    logo.style.paddingTop = '30px';
    var text = document.createElement('h2');
    text.innerText = teamData[i].teamName;
    text.style.fontFamily = 'sans-serif';
    text.style.color = 'white';
    // text.style.paddingLeft = '40px';
    text.style.paddingRight = '10px';
    text.style.paddingTop = '80px';
    text.style.letterSpacing = '1px';
    var won = document.createElement('h4');
    won.innerText = teamData[i].Won;
    // won.style.paddingLeft = '70px';
    won.style.paddingTop = '40px';
    won.style.color = 'gold';
    won.style.fontFamily = 'system-ui';
    container.append(logo, text, won);
    a.appendChild(container);
    test.appendChild(a);
}