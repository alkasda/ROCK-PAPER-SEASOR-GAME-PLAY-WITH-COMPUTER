document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.choice');
    const resultText = document.getElementById('result-text');
    const scoreText = document.getElementById('score');
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = getResult(playerChoice, computerChoice);

            resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
            scoreText.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
        });
    });

    function getResult(player, computer) {
        if (player === computer) {
            return "It's a draw!";
        }

        if ((player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')) {
            playerScore++;
            return "You win!";
        } else {
            computerScore++;
            return "You lose!";
        }
    }
});
