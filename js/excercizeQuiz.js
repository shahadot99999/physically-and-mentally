const quizData = [
    {
        question: "Which exercise primarily targets your chest muscles?",
        options: ["Push-ups", "Pull-ups", "Bicep Curls", "Dumbbell Shoulder Press"],
        answer: "Push-ups"
    },
    {
        question: "Which exercise focuses on your back and biceps?",
        options: ["Bench Press", "Pull-ups", "Bicep Curls", "Dumbbell Shoulder Press"],
        answer: "Pull-ups"
    },
    {
        question: "Which exercise is great for developing shoulder strength?",
        options: ["Bicep Curls", "Push-ups", "Dumbbell Shoulder Press", "Pull-ups"],
        answer: "Dumbbell Shoulder Press"
    },
    {
        question: "Which exercise isolates the biceps effectively?",
        options: ["Bicep Curls", "Pull-ups", "Push-ups", "Dumbbell Shoulder Press"],
        answer: "Bicep Curls"
    }
];

const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

let userAnswers = [];

function loadQuiz() {
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('mb-4');
        
        const questionText = document.createElement('h2');
        questionText.classList.add('text-lg', 'font-semibold');
        questionText.textContent = `${index + 1}. ${item.question}`;
        questionDiv.appendChild(questionText);

        item.options.forEach(option => {
            const label = document.createElement('label');
            label.classList.add('block', 'cursor-pointer', 'mt-2');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = option;
            input.classList.add('radio', 'radio-primary', 'mr-2');

            label.appendChild(input);
            label.append(option);
            questionDiv.appendChild(label);
        });

        quizContainer.appendChild(questionDiv);
    });
}

function calculateScore() {
    userAnswers = [];
    let score = 0;

    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
            if (selectedOption.value === item.answer) {
                score++;
            }
        } else {
            userAnswers.push(null);
        }
    });

    return score;
}

submitBtn.addEventListener('click', () => {
    const score = calculateScore();

    resultContainer.innerHTML = `
        <p class="text-lg font-semibold">You scored ${score} out of ${quizData.length}!</p>
        <button class="btn btn-secondary mt-2" onclick="location.reload()">Retry</button>
    `;
    resultContainer.classList.remove('hidden');
});

// Load quiz on page load
loadQuiz();





