const students= ["aman", "amit", "sumit", "ravi"];


function displayStudents() {
    const studentCulture = document.getElementById("record");
    studentCulture.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        studentCulture.innerHTML += `<p>${i + 1}) ${students[i]}</p>`;
    }
}
displayStudents();
function addStudents(){
    const studentInput= document.getElementById("studentName");
    students.push(studentInput.value);
    studentInput.value = "";
   displayStudents();
  }
displayStudents();
