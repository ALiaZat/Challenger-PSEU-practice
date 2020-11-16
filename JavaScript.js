let list = document.getElementById("list");
let arr = JSON.parse(localStorage.getItem("Topics"));
let txt="";
let i=0;
for(i=0;i<arr.length;i++){
    txt+=arr[i]+" ";
}
list.innerHTML=txt;
//add topic
let topics=[];
function addTopic(){
    topics = JSON.parse(localStorage.getItem("Topics"));
    var topic = document.getElementById("title").value;
    topics.push(topic);
    document.getElementById("title").value="";
    localStorage.setItem("Topics",JSON.stringify(topics));
}
//topics list
let topics = localStorage.getItem("Topics");
topics = JSON.parse(topics);
let i ;
var table = document.getElementById("list-of-topics");
var row,cell1,cell2;
for(i=0;i<topics.length;i++){
     row = table.insertRow(i+1);
     cell1 = row.insertCell(0);
     cell2 = row.insertCell(1);
    cell1.innerHTML=i+1;
    cell2.innerHTML=topics[i];
}
//add quiz
let topics = localStorage.getItem("Topics");
topics = JSON.parse(topics);
let i ;
let x = document.getElementById("quiz-topic");
let option;
for(i=0;i<topics.length;i++){
    option= document.createElement("option");
    option.text = topics[i];
    x.add(option);
}
let quizz=[];
function addQuiz(){
    quizz = JSON.parse(localStorage.getItem("Quizz"))
    let quizTitle=document.getElementById("quiz-title").value;
    let quizTopic=document.getElementById("quiz-topic").value;
    let quizQuestions=document.getElementById("num-of-q").value;
    let quiz = {
        "title": quizTitle,
        "topic": quizTopic,
        "question": quizQuestions
    };
    quizz.push(quiz);
    document.getElementById("quiz-title").value="";
    document.getElementById("quiz-topic").value="";
    document.getElementById("quiz-numberofquestion").value="";
    localStorage.setItem("Quizz",JSON.stringify(quizz));
}
//quizzes list
let quizz1 = JSON.parse(localStorage.getItem("Quizz"));
let i ;
let table = document.getElementById("list-of-quizzes");
let row,cell1,cell2,cell3,cell4;
for(i=0;i<quizz1.length;i++){
     row = table.insertRow(i+1);
     cell1 = row.insertCell(0);
     cell2 = row.insertCell(1);
     cell3=row.insertCell(2);
     cell4=row.insertCell(3);
    cell1.innerHTML=i+1;
    cell2.innerHTML=quizz1[i].title;
    cell3.innerHTML=quizz1[i].topic;
    cell4.innerHTML=quizz1[i].question;
}