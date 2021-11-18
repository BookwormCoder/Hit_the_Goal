var s=0;

function updateScore(){
s = s+1;
document.getElementById("score").innerHTML="Score:" + s;
}

function saveScore(){
    localStorage.setItem("score", s);
}

function nextPage(){
    window.location="activity_2.html";
}