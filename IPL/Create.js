function saveData(){
    var tname = document.getElementById('name').value; 
    var url = document.getElementById('url').value;
    var count = document.getElementById('count').value;
    var batsman = document.getElementById('batsman').value;
    var bowler = document.getElementById('bowler').value;
    var won = document.getElementById('won').value;
    // var submit = document.getElementById('submit');
        localStorage.setItem('name',tname);
        localStorage.setItem('url',url);
        localStorage.setItem('count',count);
        localStorage.setItem('batsman',batsman);
        localStorage.setItem('bowler',bowler);
        localStorage.setItem('won',won);
    }