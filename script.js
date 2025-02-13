const joinButton = document.getElementById('join-button');
const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const endMessageElement = document.getElementById('end-message');
const leaderboard = document.getElementById('leaderboard');
const leaderboardList = document.getElementById('leaderboard-list');

let players = [];
let currentUser = '';
let score = 0;

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            {text: 'Paris', correct: true},
            {text: 'London', correct: false},
            {text: 'Berlin', correct: false},
            {text: 'Madrid', correct: false}
        ]
    },
    {
        question: 'What year did England win the World Cup?',
        answers: [
            {text: '1970', correct: false},
            {text: '1966', correct: true},
            {text: '1996', correct: false},
            {text: '1984', correct: false}
        ]
    },
    {
        question: 'What was one of the first products SONY released when they established their company?',
        answers: [
            {text: 'Electric Rice Cooker', correct: true},
            {text: 'Television', correct: false},
            {text: 'Playstation', correct: false},
            {text: 'Headset', correct: false}
        ]
    },
    {
        question: 'How many times has Germany won the World Cup?',
        answers: [
            {text: '6', correct: false},
            {text: '10', correct: false},
            {text: '4', correct: true},
            {text: '7', correct: false}
        ]
    },
    {
        question: 'What was the first animal to be sent into space?',
        answers: [
            {text: 'Fly', correct: false},
            {text: 'Dog', correct: true},
            {text: 'Monkey', correct: false},
            {text: 'Cat', correct: false}
        ]
    },
    {
        question: 'In the UK the BBC has an acronym for what?',
        answers: [
            {text: 'British Baseball Club', correct: false},
            {text: 'British Broadcasting Corporation', correct: true},
            {text: 'Bad Boys Commentary', correct: false},
            {text: 'British Basketball Company', correct: false}
        ]
    },
    {
        question: 'What does U.S.A stand for?',
        answers: [
            {text: 'United States of Austria', correct: false},
            {text: 'United States of Australia', correct: false},
            {text: 'United States of America', correct: true},
            {text: 'United States of Algeria', correct: false}
        ]
    },
    {
        question: 'Who was the first person to walk on the Moon?',
        answers: [
            {text: 'Buzz Aldrin', correct: false},
            {text: 'Neil Armstrong', correct: true},
            {text: 'Andy Carrol', correct: false},
            {text: 'Pedro Pascal', correct: false}
        ]
    },
    {
        question: 'Who Scored the Hand of God?',
        answers: [
            {text: 'Paul Gascoigne', correct: false},
            {text: 'Stephen Jake Thompson', correct: false},
            {text: 'Leah Rose Ashworth', correct: false},
            {text: 'Diego Maradona', correct: true}
        ]
    },
    {
        question: 'In the Paris Olympics, how many Gold Medals did the UK come home with in 2024?',
        answers: [
            {text: '26', correct: false},
            {text: '17', correct: false},
            {text: '14', correct: true},
            {text: '21', correct: false}
        ]
    },
    {
        question: 'What year was DELL established?',
        answers: [
            {text: '1984', correct: true},
            {text: '1988', correct: false},
            {text: '1980', correct: false},
            {text: '1992', correct: false}
        ]
    },
    {
        question: 'What is time?',
        answers: [
            {text: 'Distraction', correct: false},
            {text: 'Illusion', correct: false},
            {text: 'Imaginary', correct: false},
            {text: 'Concept', correct: true}
        ]
    },
    {
        question: 'In Football (Soccer), what does the Red Card mean when dished out to a player?',
        answers: [
            {text: 'Player must leave pitch immediately', correct: true},
            {text: 'Players finish the 90 minutes then leave the pitch', correct: false},
            {text: "Player can do Rock, Paper, Scissors and if the player wins, they can stay on pitch", correct: false},
            {text: 'Player can refuse the red and stay on the pitch', correct: false}
        ]
    },
    {
        question: 'What year did XBOX release their first Xbox Console?',
        answers: [
            {text: '2001', correct: true},
            {text: '2003', correct: false},
            {text: '1999', correct: false},
            {text: '2000', correct: false}
        ]
    },
    {
        question: 'Who was the first woman to fly solo across the atlantic?',
        answers: [
            {text: 'Amanada Holden', correct: false},
            {text: 'Amelia Earhart', correct: true},
            {text: 'Alesha Dixon', correct: false},
            {text: 'Celine Dion', correct: false}
        ]
    },
    {
        question: "In the UK, how many countries came together to form the United Kingdom?",
        answers: [
            {text: '3', correct: false},
            {text: '5', correct: false},
            {text: '4', correct: true},
            {text: '6', correct: false}
        ]
    },
    {
        question: "In Pirates of the Caribbean, what was the name of the fictional character's lead role?",
        answers: [
            {text: 'Elizabeth Swan', correct: false},
            {text: 'Jack Sparrow', correct: true},
            {text: 'Will Turner', correct: false},
            {text: 'Captain Barbosa', correct: false}
        ]
    },
    {
        question: "Where did Gregg's open their first shop location?",
        answers: [
            {text: 'Liverpool', correct: false},
            {text: 'Poundbury', correct: false},
            {text: 'London', correct: false},
            {text: 'Newcastle', correct: true}
        ]
    },
    {
        question: 'What year was the last Apollo Mission to walk on the Moon?',
        answers: [
            {text: '1971', correct: false},
            {text: '1978', correct: false},
            {text: '1972', correct: true},
            {text: '1970', correct: false}
        ]
    },
    {
        question: 'What was the animal\'s name that was sent into space?',
        answers: [
            {text: 'Buffy', correct: false},
            {text: 'Laika', correct: true},
            {text: 'Nemo', correct: false},
            {text: 'Oscar', correct: false}
        ]
    }
];

let shuffledQuestions, currentQuestionIndex;

joinButton.addEventListener('click', joinGame);
startButton.addEventListener('click', startGame);

function joinGame() {
    const usernameInput = document.getElementById('username');
    currentUser = usernameInput.value.trim();
    if (currentUser) {
        players.push({ username: currentUser, score: 0 });
        usernameInput.classList.add('hide');
        joinButton.classList.add('hide');
        startButton.classList.remove('hide');
    } else {
        alert('Please enter a username');
    }
}

function startGame() {
    startButton.classList.add('hide');
    endMessageElement.classList.add('hide');
    leaderboard.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            setNextQuestion();
        } else {
            endMessageElement.classList.remove('hide');
            endMessageElement.innerText = `Congratulations! You answered all the questions correctly! Your score is ${score}.`;
            startButton.innerText = 'Restart Game';
            startButton.classList.remove('hide');
            startButton.addEventListener('click', restartGame);
            updateLeaderboard(currentUser, score);
        }
    } else {
        endMessageElement.classList.remove('hide');
        endMessageElement.innerText = `Game Over! You answered incorrectly. Your score is ${score}.`;
        startButton.innerText = 'Restart Game';
        startButton.classList.remove('hide');
        questionContainer.classList.add('hide');
        startButton.addEventListener('click', restartGame);
        updateLeaderboard(currentUser, score);
    }
}

function restartGame() {
    startButton.removeEventListener('click', restartGame);
    startGame();
}

function updateLeaderboard(username, score) {
    const listItem = document.createElement('li');
    listItem.innerText = `${username} - Score: ${score}`;
    leaderboardList.appendChild(listItem);
    leaderboard.classList.remove('hide');
}
