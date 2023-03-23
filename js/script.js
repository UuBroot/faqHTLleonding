let current_question = 0;
let main_element = document.getElementById("main");
let points = [0, 0, 0, 0]
let percentages = [
    {
        percentage: 0,
        zweig: "Informatiker:in"
    },
    {
        percentage: 0,
        zweig: "Medientechniker:in"
    },
    {
        percentage: 0,
        zweig: "Elektrotechniker:in"
    },
    {
        percentage: 0,
        zweig: "Medizintechniker:in"
    },

]
let all_points = 0;

let light_mode = {
    "--backgroundColor": "rgb(236, 236, 236)",
    "--mainColor1": "rgb(214, 214, 214)",
    "--mainColor2": "rgb(231, 231, 231)",
    "--colorScheme": "light",
    "--boxshadow": "10px 10px 5px 0px rgba(165, 165, 165, 0.75)"
}
let dark_mode = {
    "--backgroundColor": "rgb(97, 97, 97)",
    "--mainColor1": "rgb(61, 61, 61)",
    "--mainColor2": "rgb(95, 95, 95)",
    "--colorScheme": "dark",
    "--boxshadow": "10px 10px 5px 0px rgba(165, 165, 165, 0.75)"
}

let currently_light_mode = false;

if (localStorage['currently_light_mode']) {
    currently_light_mode = JSON.parse(localStorage['currently_light_mode']);
} else {
    localStorage['currently_light_mode'] = JSON.stringify(false);
}

setLightMode(currently_light_mode);
loadQuestion(current_question);

function loadQuestion(question_id) {
    current_question = question_id;
    if (question_id < questions.length) {
        //generate Question
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
    } else {
        //generate endscreen


        for (let k = 0; k < points.length; k++) {
            all_points += points[k];
        }


        for (let i = 0; i < points.length; i++) {
            percentages[i].percentage = points[i] * 100 / all_points;
        }

        //BUBBLESORT
        for (var i = 0; i < percentages.length; i++) {

            // Last i elements are already in place 
            for (var j = 0; j < (percentages.length - i - 1); j++) {

                // Checking if the item at present iteration
                // is greater than the next iteration
                if (percentages[j].percentage > percentages[j + 1].percentage) {

                    // If the condition is true then swap them
                    var temp = percentages[j]
                    percentages[j] = percentages[j + 1]
                    percentages[j + 1] = temp
                }
            }
        }

        main_element.innerHTML = `
        <h1>Du bist zu ${Math.round(percentages[3].percentage)}% ${percentages[3].zweig}</h1>
        <h2>${Math.round(percentages[2].percentage)}% ${percentages[2].zweig}</h2>
        <h2>${Math.round(percentages[1].percentage)}% ${percentages[1].zweig}</h2>
        <h2>${Math.round(percentages[0].percentage)}% ${percentages[0].zweig}</h2>
    `;
    }
}

function answerQuestion(a) {
    let question_points = questions[current_question].points;

    for (let i = 0; i < question_points.length; i++) {
        switch (a) {
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

function changeLightMode() {
    currently_light_mode = !currently_light_mode;
    setLightMode(currently_light_mode);
}

function setLightMode(is_light_mode) {
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);

    if (is_light_mode) {
        console.log("Pain");

        r.style.setProperty('--backgroundColor', light_mode["--backgroundColor"]);
        r.style.setProperty('--mainColor1', light_mode["--mainColor1"]);
        r.style.setProperty('--mainColor2', light_mode["--mainColor2"]);
        r.style.setProperty('--colorScheme', light_mode["--colorScheme"]);
        r.style.setProperty('--boxshadow', light_mode["--boxshadow"]);
        colorChanger.src = '/img/darkmodeicon.svg';
    } else {
        r.style.setProperty('--backgroundColor', dark_mode["--backgroundColor"]);
        r.style.setProperty('--mainColor1', dark_mode["--mainColor1"]);
        r.style.setProperty('--mainColor2', dark_mode["--mainColor2"]);
        r.style.setProperty('--colorScheme', dark_mode["--colorScheme"]);
        r.style.setProperty('--boxshadow', dark_mode["--boxshadow"]);
        colorChanger.src = '/img/lightmodeicon.svg';
    }

    localStorage['currently_light_mode'] = currently_light_mode;
}