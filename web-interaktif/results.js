// results.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the score from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const score = parseInt(urlParams.get("score")) || 0; // Convert to integer, default to 0 if not found

    // Calculate the total number of questions (assuming you have 5 questions)
    const totalQuestions = 5;

    // Calculate the number of incorrect answers
    const incorrectAnswers = totalQuestions - score;

    // Display the results on the page
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.textContent = "Correct Answers: " + score;
    }

    const incorrectElement = document.getElementById("incorrect");
    if (incorrectElement) {
        incorrectElement.textContent = "Incorrect Answers: " + incorrectAnswers;
    }
});
