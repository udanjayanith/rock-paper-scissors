    var computerMove = ''
    var score = {
        Wins :  0,
        Loses :  0,
        Ties :  0
    }

    function Computer() {
        let computerChoice = Math.random()

        if (computerChoice < 0.4) {
            computerMove = 'Rock'
        } else if (0.7 > computerChoice > 0.3) {
            computerMove = 'Paper'
        } else if (computerChoice > 0.6) {
            computerMove = 'Scissors'
        } 

    }
    
    function myMoveRock () {

        if (computerMove === 'Rock') {
            alert('computer picked rock : Tie')
            score.Ties += 1
        } else if (computerMove === 'Paper') {
            alert('computer picked paper : You lose')
            score.Loses += 1
        } else if (computerMove === 'Scissors') {
            alert('computer picked Scissors : You won')
            score.Wins += 1
        }
    }

    function myMovePaper () {

        if (computerMove === 'Rock') {
            alert('computer picked rock : You won')
            score.Wins += 1
        } else if (computerMove === 'Paper') {
            alert('computer picked paper : Tie')
            score.Ties += 1
        } else if (computerMove === 'Scissors') {
            alert('computer picked Scissors : You lose')
            score.Loses += 1
        }
    }

    function myMoveScissors () {

        if (computerMove === 'Rock') {
            alert('computer picked rock : You lose')
            score.Loses += 1
        } else if (computerMove === 'Paper') {
            alert('computer picked paper : You won')
            score.Wins += 1
        } else if (computerMove === 'Scissors') {
            alert('computer picked Scissors : Tie')
            score.Ties += 1
        }
    }

    
    function showScore() {
        var outputText = JSON.stringify(score)
        document.getElementById("output").innerHTML = outputText
    }


    function scoreReset() {
        let totalScore = score.Wins + score.Loses + score.Ties
        if (totalScore === 15) {
            alert('Scores were reset')
            score = {
                Wins :  0,
                Loses :  0,
                Ties :  0
            }
        } 
    }

