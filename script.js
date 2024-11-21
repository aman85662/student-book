const students= ["aman"];


function displayStudents() {
    const studentCulture = document.getElementById("record");
    studentCulture.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        studentCulture.innerHTML += `<p>${i + 1}) ${students[i]}</p>`;
    }
}
displayStudents();
const studentInput= document.getElementById("studentName");
function addStudents(){
    students.push(studentInput.value);
    studentInput.value = "";
   displayStudents();
  }

  function removeStudent(){
   const studentIndex = students.indexOf(studentInput.value);
   students.splice(studentIndex,1);
   studentInput.value = "";
   
    displayStudents();
    }
