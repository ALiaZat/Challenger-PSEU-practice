let subjects = JSON.parse(localStorage.getItem("Topics"));
let idOfSubject = "Sub";
for(let i=0;i<subjects.length;i++){
    document.getElementById("Subjects").innerHTML += <button id=" + setId + (i + 1) + "  value= " + subjects[i] + " > + subjects[i] + </button> 
}