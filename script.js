const joinButton = document.getElementById('join-button');
const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const endMessageElement = document.getElementById('end-message');
const leaderboard = document.getElementById('leaderboard');
const leaderboardList = document.getElementById('leaderboard-list');

// Timer element
const timerElement = document.createElement('div');
timerElement.classList.add('timer');
questionContainer.prepend(timerElement);

let players = [];
let currentUser = '';
let score = 0;

const questions = [
    {
        //Q1
        question: 'What is the capital of France?',
        answers: [
            {text: 'Paris', correct: true},
            {text: 'London', correct: false},
            {text: 'Berlin', correct: false},
            {text: 'Madrid', correct: false}
        ]
    },
    {
        //Q2
        question: 'What year did England win the World Cup?',
        answers: [
            {text: '1970', correct: false},
            {text: '1966', correct: true},
            {text: '1996', correct: false},
            {text: '1984', correct: false}
        ]
    },
    {
        //Q3
        question: 'What year did England win the World Cup?',
        answers: [
            {text: '1970', correct: false},
            {text: '1966', correct: true},
            {text: '1996', correct: false},
            {text: '1984', correct: false}
        ]
    },
    {
        //Q4
        question: 'What was one of the first products SONY released when they established their company?',
        answers: [
            {text: 'Electric Rice Cooker', correct: true},
            {text: 'Television', correct: false},
            {text: 'Playstation', correct: false},
            {text: 'Headset', correct: false}
        ]
    },
    {
        //Q5
        question: 'How many times has Germany won the World Cup?',
        answers: [
            {text: '6', correct: false},
            {text: '10', correct: false},
            {text: '4', correct: true},
            {text: '7', correct: false}
        ]
    },
    {
        //Q6
        question: 'What was the first animal to be sent into space?',
        answers: [
            {text: 'Fly', correct: false},
            {text: 'Dog', correct: true},
            {text: 'Monkey', correct: false},
            {text: 'Cat', correct: false}
        ]
    },
    {
        //Q7
        question: 'In the UK the BBC has an acronym for what?',
        answers: [
            {text: 'British Baseball Club', correct: false},
            {text: 'British Broadcasting Corporation', correct: true},
            {text: 'Bad Boys Commentary', correct: false},
            {text: 'British Basketball Company', correct: false}
        ]
    },
    {
        //Q8
        question: 'What does U.S.A stand for?',
        answers: [
            {text: 'United States of Austria', correct: false},
            {text: 'United States of Australia', correct: false},
            {text: 'United States of America', correct: true},
            {text: 'United States of Algeria', correct: false}
        ]
    },
    {
        //Q9
        question: 'Who was the first person to walk on the Moon?',
        answers: [
            {text: 'Buzz Aldrin', correct: false},
            {text: 'Neil Armstrong', correct: true},
            {text: 'Andy Carrol', correct: false},
            {text: 'Pedro Pascal', correct: false}
        ]
    },
    {
        //Q10
        question: 'Who Scored the Hand of God?',
        answers: [
            {text: 'Paul Gascoigne', correct: false},
            {text: 'Stephen Jake Thompson', correct: false},
            {text: 'Leah Rose Ashworth', correct: false},
            {text: 'Diego Maradona', correct: true}
        ]
    },
    {
        //Q11
        question: 'In the Paris Olympics, how many Gold Medals did the UK come home with in 2024?',
        answers: [
            {text: '26', correct: false},
            {text: '17', correct: false},
            {text: '14', correct: true},
            {text: '21', correct: false}
        ]
    },
    {
        //Q12
        question: 'What year was DELL established?',
        answers: [
            {text: '1984', correct: true},
            {text: '1988', correct: false},
            {text: '1980', correct: false},
            {text: '1992', correct: false}
        ]
    },
    {
        //Q13
        question: 'What is time?',
        answers: [
            {text: 'Distraction', correct: false},
            {text: 'Illusion', correct: false},
            {text: 'Imaginary', correct: false},
            {text: 'Concept', correct: true}
        ]
    },
    {
        //Q14
        question: 'In Football (Soccer), what does the Red Card mean when dished out to a player?',
        answers: [
            {text: 'Player must leave pitch immediately', correct: true},
            {text: 'Players finish the 90 minutes then leave the pitch', correct: false},
            {text: "Player can do Rock, Paper, Scissors and if the player wins, they can stay on pitch", correct: false},
            {text: 'Player can refuse the red and stay on the pitch', correct: false}
        ]
    },
    {
        //Q15
        question: 'What year did XBOX release their first Xbox Console?',
        answers: [
            {text: '2001', correct: true},
            {text: '2003', correct: false},
            {text: '1999', correct: false},
            {text: '2000', correct: false}
        ]
    },
    {
        //Q16
        question: 'Who was the first woman to fly solo across the atlantic?',
        answers: [
            {text: 'Amanada Holden', correct: false},
            {text: 'Amelia Earhart', correct: true},
            {text: 'Alesha Dixon', correct: false},
            {text: 'Celine Dion', correct: false}
        ]
    },
    {
        //Q17
        question: "In the UK, how many countries came together to form the United Kingdom?",
        answers: [
            {text: '3', correct: false},
            {text: '5', correct: false},
            {text: '4', correct: true},
            {text: '6', correct: false}
        ]
    },
    {
        //Q18
        question: "In Pirates of the Caribbean, what was the name of the fictional character's lead role?",
        answers: [
            {text: 'Elizabeth Swan', correct: false},
            {text: 'Jack Sparrow', correct: true},
            {text: 'Will Turner', correct: false},
            {text: 'Captain Barbosa', correct: false}
        ]
    },
    {
        //Q19
        question: "Where did Gregg's open their first shop location?",
        answers: [
            {text: 'Liverpool', correct: false},
            {text: 'Poundbury', correct: false},
            {text: 'London', correct: false},
            {text: 'Newcastle', correct: true}
        ]
    },
    {
        //Q20
        question: 'What year was the last Apollo Mission to walk on the Moon?',
        answers: [
            {text: '1971', correct: false},
            {text: '1978', correct: false},
            {text: '1972', correct: true},
            {text: '1970', correct: false}
        ]
    },
    {
        //Q21
        question: 'What was the animal\'s name that was sent into space?',
        answers: [
            {text: 'Buffy', correct: false},
            {text: 'Laika', correct: true},
            {text: 'Nemo', correct: false},
            {text: 'Oscar', correct: false}
        ]
    },
    {
        //Q22
        question: "When was Coca Cola invented?",
        anwers: [
            {text: `May 8th, 1886`, correct: true},
            {text: `April 4th 1884`, correct: false},
            {text: `December 18th, 1889`, correct: false},
            {text: `January 9th 1885`, correct: false}
        ]
    },
    {
        //Q23
        question: `What did "Dr. John S. Pemberton" invent in 1886?`,
        answers: [
            {text: `Pepsi`, correct: false},
            {text: `Fanta`, correct: false},
            {text: `Coca Cola`, correct: true},
            {text: `Spring Water`, correct: false}
        ]
    },
    {
        //Q24
        question: `"Captain Price", is part of what game franchise?`,
        answers: [
            {text: `Overwatch`, correct: false},
            {text: `Battlefield`, correct: false},
            {text: `Call of Duty`, correct: true},
            {text: `Minecraft`, corect: false}
        ]
    },
    {
        //Q25
        question: `The Winner of Beast Games won how much money in the first season?`,
        answers: [
            {text: `5 Million`, correct: false},
            {text: `20 Million`, correct: false},
            {text: `15 Million`, correct: false},
            {text: `10 Million`, correct: true}
        ]
    },
    {
        //Q26
        question: `Who won the 2022 World Cup?`,
        answers: [
            {text: `Argentina`, correct: true},
            {text: `France`, correct: false},
            {text: `Italy`, correct: false},
            {text: `Spain`, correct: false}
        ]
    },
    {
        //Q27
        question: `What year did The Falklands war occur?`,
        answers: [
            {text: `1992`, correct: false},
            {text: `1982`, correct: true},
            {text: `1978`, correct: false},
            {text: `1984`, correct: false}
        ]
    },
    {
        //Q28
        question: `Starbucks was established in which Country?`,
        answers: [
            {text: `Germany`, correct: false},
            {text: `Syria`, correct: false},
            {text: `United States of America`, correct: true},
            {text: `Spain`, correct: false}
        ]
    },
    {
        //Q29
        question: `What was Samsung's first product they released?`,
        answers: [
            {text: `Mobile Phone`, correct: false},
            {text: `Black & White Television`, correct: true},
            {text: `Cables`, correct: false},
            {text: `Cameras`, correct: false}
        ]
    },    
    {
        //Q30
        question: `What animal is known as Man's Best Friend?`,
        answers: [
            {text: `Spiders`, correct: false},
            {text: `Bears`, correct: false},
            {text: `Cats`, correct: false},
            {text: `Dogs`, correct: true}
        ]
    },
    {
        //Q31
        question: `How many hearts does an Octopus have?`,
        answers: [
            {text: `9`, correct: false},
            {text: `1`, correct: false},
            {text: `3`, correct: true},
            {text: `4`, correct: false}
        ]
    },
    {
        //Q32
        question: `What is a group of Hyenas called?`,
        answers: [
            {text: `Cackle`, correct: true},
            {text: `Mosh`, correct: false},
            {text: `scavengers`, correct: false},
            {text: `Rage`, correct: false}
        ]
    },
    {
        //Q33
        question: `What is a baby Kangaroo called?`,
        answers: [
            {text: `A Pouchy`, correct: false},
            {text: `A Joey`, correct: true},
            {text: `Apache`, correct: false},
            {text: `A Club`, correct: false}
        ]
    },
    {
        //Q34
        question: `The longest River in the world is what?`,
        answers: [
            {text: `Columbia River`, correct: false},
            {text: `River Nile`, correct: true},
            {text: `River Thames`, correct: false},
            {text: `River Severn`, correct: false}
        ]
    },
    {
        //Q35
        question: `Where is one place "Pig's" cannot look?`,
        answers: [
            {text: `Down To The Floor`, correct: false},
            {text: `To The Left Side`, correct: false},
            {text: `To The  Right Side`, correct: false},
            {text: `Up Into The Night-Sky`, correct: true}
        ]
    },
    {
        //Q36
        question: `Who remains the only female member of the royal family to have served in the Army?`,
        answers: [
            {text: `Princess Diane`, correct: false},
            {text: `Queen Elizabeth II`, correct: true},
            {text: `Queen Elizabeth I`, correct: false},
            {text: `Megan Markle`, correct: false}
        ]
    },
    {
        //Q37
        question: `What did Queen Elizabeth II train as in the Army?`,
        answers: [
            {text: `Doctor & Nurse`, correct: false},
            {text: `RAF Pilot & Paratrooper`, correct: false},
            {text: `Chef & Cleaner`, correct: false},
            {text: `Truck Driver & Mechanic`, correct: true}
        ]
    },
    {
        //Q38
        question: `What is the estimated guess for how many teeth a Great White Shark has?`,
        answers: [
            {text: `300 Teeth`, correct: true},
            {text: `268 Teeth`, correct: false},
            {text: `312 Teeth`, correct: false},
            {text: `274 Teeth`, correct: false}
        ]
    },
    {
        //Q39
        question: `Which Country has a One Child Policy/Rule?`,
        answers: [
            {text: `Romania`, correct: false},
            {text: `Moldova`, correct: false},
            {text: `Turkey`, correct: false},
            {text: `China`, correct: true}
        ]
    },
    {
        //Q40
        question: `Which U.S State is the only state whose name is typed using one row of the keyboard`,
        answers: [
            {text: `Ney York`, correct: false},
            {text: `Alaska`, correct: true},
            {text: `Texas`, correct: false},
            {text: `Alabama`, correct: false}
        ]
    }
    //Add remaining questions here
];

let shuffledQuestions, currentQuestionIndex;
let timer;
const timeLimit = 15; //Set time limit in seconds

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
        button.classList.add('btn-container');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
    startTimer();
}

function startTimer() {
    let timeLeft = timeLimit;
    timerElement.innerText = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            revealCorrectAnswer();
            endGame(false);
        }
    }, 1000);
}

function resetState() {
    clearInterval(timer);
    timerElement.innerText = '';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    clearInterval(timer);
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    revealCorrectAnswer();
    Array.from(answerButtonsElement.children).forEach(button => {
        button.removeEventListener('click', selectAnswer);
    });
    if (correct) {
        score++;
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            setTimeout(setNextQuestion, 2000); // Move to the next question after a delay
        } else {
            endGame(true);
        }
    } else {
        endGame(false);
    }
}

function revealCorrectAnswer() {
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function endGame(success) {
    questionContainer.classList.add('hide');
    endMessageElement.classList.remove('hide');
    if (success) {
        endMessageElement.innerText = `Congratulations! You answered all the questions correctly! Your score is ${score}.`;
    } else {
        endMessageElement.innerText = `Game Over! Your score is ${score}.`;
    }
    startButton.innerText = 'Restart Game';
    startButton.classList.remove('hide');
    updateLeaderboard(currentUser, score);
}

function updateLeaderboard(username, score) {
    const listItem = document.createElement('li');
    listItem.innerText = `${username} - Score: ${score}`;
    leaderboardList.appendChild(listItem);
    leaderboard.classList.remove('hide');
}
