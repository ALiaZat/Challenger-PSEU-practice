//topics list
let subjects = JSON.parse(localStorage.getItem("Topics"));
function topicList() {
    document.getElementById("list-of-topics").innerHTML = "<tr>" + "<th>" + "Topic Name" + "</th>" + "<tr>";
    for (let i = 0; i < subjects.length; i++) {
        document.getElementById("list-of-topics").innerHTML += "<tr>" + "<td>" + subjects[i] + "</td>" + "</tr>";
    }
}
topicList();