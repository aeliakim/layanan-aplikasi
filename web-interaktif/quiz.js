document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the selected answers from the dropdowns
    const answer1 = document.getElementById("answer1").value;
    const answer2 = document.getElementById("answer2").value;
    const answer3 = document.getElementById("answer3").value;
    const answer4 = document.getElementById("answer4").value;
    const answer5 = document.getElementById("answer5").value;

    // Define the correct answers for each question
    const correctAnswers = ["PakUki", "2013", "TMJ", "b201", "b108"];

    // Initialize the score
    let score = 0;


    // Evaluate the answers
    if (answer1 === correctAnswers[0]) {
        score++;
    }
    if (answer2 === correctAnswers[1]) {
        score++;
    }
    if (answer3 === correctAnswers[2]) {
        score++;
    }
    if (answer4 === correctAnswers[3]) {
        score++;
    }
    if (answer5 === correctAnswers[4]) {
        score++;
    }

    // Redirect to the results page with the score as a query parameter
    window.location.href = "result.html?score=" + score;
});
