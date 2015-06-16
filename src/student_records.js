var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<h3>Student: ' + student.name + '</h3>';
  message += '<p>Track: ' + student.track + '</p>';
}

print(message);
