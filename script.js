const students= ["aman", "amit", "sumit", "ravi"];
const studentCulture = document.getElementById("record");

function displayStudents() {
    studentCulture.innerHTML = '';
    for (let i = 0; i < students.length; i++) {
        studentCulture.innerHTML += `<p>${i + 1}) ${students[i]}</p>`;
    }
}
document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const studentName = document.getElementById("studentName").value;
        students.push(studentName);
        displayStudents();
        document.getElementById("studentName").value = '';
});

displayStudents();

