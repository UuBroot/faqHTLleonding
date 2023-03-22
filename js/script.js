let current_question = 0;
let main_element = document.getElementById("main");
let points = [0, 0, 0, 0]

loadQuestion(current_question);

function loadQuestion(question_id) {
    current_question = question_id;
    main_element.innerHTML = `
        <h1>${questions[question_id].question}</h1>
        <div id="img" style='background-image: url("${questions[question_id].image_path}")'></div>
        <div class="questions_grid">
            <div onclick="answerQuestion(4)" class="questions_grid_item">
                <h2>Gar Nicht</h2>
            </div>
            <div onclick="answerQuestion(3)" class="questions_grid_item">
                <h2>Etwas</h2>
            </div>
            <div onclick="answerQuestion(2)" class="questions_grid_item">
                <h2>Ziemlich</h2>
            </div>
            <div onclick="answerQuestion(1)" class="questions_grid_item">
                <h2>Total</h2>
            </div>
        </div>
    `;
}

function answerQuestion(a) {
    let question_points = questions[current_question].points;

    for (let i = 0; i < question_points.length; i++) {
        switch(a) {
            case 4:
                question_points[i] = 0;
                break;
            case 3:
                question_points[i] /= 3;
                break;
            case 2:
                question_points[i] = (question_points[i] / 3) * 2;
                break;
            case 1: 
                question_points[i] = question_points[i];
                break; 
        }
        points[i] += question_points[i];
    }
    console.log(question_points);
    console.log(points);
    loadQuestion(current_question += 1);
}