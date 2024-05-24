function calculateAverage() {
    let subject1 = parseFloat(document.getElementById('sub1').value);
    let subject2 = parseFloat(document.getElementById('sub2').value);
    let subject3 = parseFloat(document.getElementById('sub3').value);
    let subject4 = parseFloat(document.getElementById('sub4').value);
    let subject5 = parseFloat(document.getElementById('sub5').value);

    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        document.getElementById('result').innerHTML = "Invalid Input.";
        return;
    }

    let average = (subject1 + subject2 + subject3 + subject4 + subject5) / 5;
    document.getElementById('result').innerHTML = "The average grade is: " + average.toFixed(2);
}

function focusNext(event, nextFieldId) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById(nextFieldId).focus();
    }
}
