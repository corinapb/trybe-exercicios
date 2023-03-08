let header = document.getElementById("header-container")

header.style.backgroundColor = 'green';

let emergencyTasks = document.querySelectorAll(".emergency-tasks div");

for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.backgroundColor = "orange";
}

let emergencyHeading = document.querySelectorAll(".emergency-tasks h3");

for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyHeading[index].style.backgroundColor = "purple";
}

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks div");

for (let index = 0; index < emergencyTasks.length; index += 1) {
    noEmergencyTasks[index].style.backgroundColor = "yellow";
}

let noEmergencyHeading = document.querySelectorAll(".no-emergency-tasks h3");

for (let index = 0; index < emergencyTasks.length; index += 1) {
    noEmergencyHeading[index].style.backgroundColor = "black";
}

let footer = document.getElementById("footer-container");

footer.style.backgroundColor = "gray";