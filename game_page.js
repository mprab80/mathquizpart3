p1name=localStorage.getItem("Player 1 Name");
p2name=localStorage.getItem("Player 2 Name");
p1score=0;
p2score=0;
document.getElementById("p1name").innerHTML=p1name+":";
document.getElementById("p2name").innerHTML=p2name+":";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("playerquestion").innerHTML="Question Turn: "+p1name;
document.getElementById("playeranswer").innerHTML="Answer Turn: "+p2name;

function send(){
    number1=document.getElementById("number1").value; 
    number2=document.getElementById("number2").value;
    question="<h3 id='question'>Question: "+number1+' x '+number2+"</h3>";
    answer="<br> Answer: <input type='text' id='answer'>"; 
     button="<br> <br> <button class='btn btn-info' onclick='check()'>Check Your Answer</button>";
    row=question+answer+button;
    document.getElementById("apple").innerHTML=row;
}