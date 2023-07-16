var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";


let studentData = grades.split(", ");
let numStudents = studentData.length;
let lowestScore = Infinity;
let highestScore = -Infinity;
let totalScore = 0;


let studentDataElement = document.getElementById("studentData");
let statisticsElement = document.getElementById("statistics");
let dataText = "";

for (let i = 0; i < numStudents; i++) {
    let student = studentData[i].split("|");
    let name = student[0].charAt(0).toUpperCase() + student[0].slice(1);
    let score = parseInt(student[1]);
    dataText += name + " - " + score + "<br>";

   
    if (score < lowestScore) {
        lowestScore = score;
    }
    if (score > highestScore) {
        highestScore = score;
    }
    totalScore += score;
}

studentDataElement.innerHTML = dataText;


let averageScore = totalScore / numStudents;


let statisticsText = "Total Students: " + numStudents + "<br>";
statisticsText += "Lowest Score: " + lowestScore + "<br>";
statisticsText += "Highest Score: " + highestScore + "<br>";
statisticsText += "Average Score: " + averageScore.toFixed(2) + "<br>";

statisticsElement.innerHTML = statisticsText;
