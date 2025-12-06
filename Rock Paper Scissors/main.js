
document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    let userScore = 0;
    let computerScore = 0;
    const winningScore = 3;

    const resultEl = document.getElementById('result');
    const userScoreEl = document.getElementById('user-score');
    const computerScoreEl = document.getElementById('computer-score');
    const resetBtn = document.getElementById('reset');

    function computerPick() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function outcome(user, comp) {
        if (user === comp) return 'tie';
        if ((user === 'rock' && comp === 'scissors') ||
            (user === 'paper' && comp === 'rock') ||
            (user === 'scissors' && comp === 'paper')) return 'win';
        return 'lose';
    }

    function updateScoreboard() {
        userScoreEl.textContent = userScore;
        computerScoreEl.textContent = computerScore;
    }

    function endGame(message) {
        resultEl.textContent = message;
        document.querySelectorAll('.move-button').forEach(b => b.disabled = true);
    }

    function playRound(userChoice) {
        if (userScore >= winningScore || computerScore >= winningScore) return;
        const comp = computerPick();
        const res = outcome(userChoice, comp);
        if (res === 'tie') {
            resultEl.textContent = `You chose ${userChoice}. Computer chose ${comp}. It's a tie!`;
        } else if (res === 'win') {
            userScore++;
            updateScoreboard();
            resultEl.textContent = `You chose ${userChoice}. Computer chose ${comp}. You win this round!`;
        } else {
            computerScore++;
            updateScoreboard();
            resultEl.textContent = `You chose ${userChoice}. Computer chose ${comp}. Computer wins this round.`;
        }

        if (userScore >= winningScore) {
            endGame('Game over — You won the match!');
        } else if (computerScore >= winningScore) {
            endGame('Game over — Computer won the match.');
        }
    }

    document.querySelectorAll('.move-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const choice = btn.id;
            playRound(choice);
        });
    });

    resetBtn.addEventListener('click', () => {
        userScore = 0;
        computerScore = 0;
        updateScoreboard();
        resultEl.textContent = 'Make your move!';
        document.querySelectorAll('.move-button').forEach(b => b.disabled = false);
    });
});