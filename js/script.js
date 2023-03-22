let current_question = 0;
let main_element = document.getElementById("main");

loadQuestion(current_question);

function loadQuestion(question_id) {
    main_element.innerHTML = `
        <h1>${questions[question_id].question}</h1>
        <img src='${questions[question_id].image_path}'>
        <div class="questions_grid">
            <div onclick="answerQuestion(0)" class="questions_grid_item">
                <h2>Gar Nicht</h2>
            </div>
            <div onclick="answerQuestion(1)" class="questions_grid_item">
                <h2>Etwas</h2>
            </div>
            <div onclick="answerQuestion(2)" class="questions_grid_item">
                <h2>Ziemlich</h2>
            </div>
            <div onclick="answerQuestion(3)" class="questions_grid_item">
                <h2>Total</h2>
            </div>
        </div>
    `;
}

function answerQuestion(a) {

}