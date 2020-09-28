let [userScore, computerScore] = [0, 0]

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_h1 = document.querySelector('.result > h1');

const  rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

const smallUserWord = 'user'.fontsize(3).sub();
const smallCompWord = 'comp'.fontsize(3).sub();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(user, computer){
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // const smallUserWord = 'user'.fontsize(3).sub();
    // const smallCompWord = 'comp'.fontsize(3).sub();
    result_h1.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You WIN !! 🔥`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(()=> document.getElementById(user).classList.remove('green-glow'), 500);
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // const smallUserWord = 'user'.fontsize(3).sub();
    // const smallCompWord = 'comp'.fontsize(3).sub();
    result_h1.innerHTML = `${convertToWord(computer)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You Loose !! 👎`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(()=> document.getElementById(user).classList.remove('red-glow'), 500);
}

function draw(user, computer) {
    // const smallUserWord = 'user'.fontsize(3).sub();
    // const smallCompWord = 'comp'.fontsize(3).sub();
    result_h1.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. It's a Draw !! ✊`;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(()=> document.getElementById(user).classList.remove('grey-glow'), 500);
}



function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice+computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
        default:
            break;
    }
}

rock_div.addEventListener('click', () => {
    game('r');
})

paper_div.addEventListener('click', () => {
    game('p');
});

scissor_div.addEventListener('click', () => {
    game('s');
});