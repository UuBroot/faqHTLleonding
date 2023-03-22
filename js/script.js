let current_question = 0;
let main_element = document.getElementById("main");

function loadQuestion(question_id) {
    main_element.innerHTML = `
        <h1>${questions[question_id].question}</h1>
        <img src='${questions[question_id].image_path}'>
        <div class="questions_grid">
            <div class="questions_grid_item">
                <h2>questions[question_id]</h2>
            </div>
        </div>
    `;
}