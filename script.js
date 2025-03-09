function checkAnswers() {
    var score = 0;

    // Get selected answers
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');

    // Check answers
    if (q1 && q1.value === 'a') score++;
    if (q2 && q2.value === 'b') score++;
    if (q3 && q3.value === 'b') score++;

    // Display score result
    document.getElementById("score").textContent = score;
    document.getElementById("scoreResult").style.display = "block";
    document.getElementById("quizForm").style.display = "none";
}

function resetQuiz() {
    // Reset the form and hide the result
    document.getElementById("quizForm").reset();
    document.getElementById("scoreResult").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
}
