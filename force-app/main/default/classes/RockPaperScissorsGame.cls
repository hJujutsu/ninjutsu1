public with sharing class RockPaperScissorsGame {
    public enum Choice {
        ROCK, PAPER, SCISSORS
    }
    
    public static String play(Choice playerChoice) {
        Choice computerChoice = generateComputerChoice();
         
        if (playerChoice == computerChoice) {
            return 'It\'s a tie!';
        } else if ((playerChoice == Choice.ROCK && computerChoice == Choice.SCISSORS) ||
                   (playerChoice == Choice.PAPER && computerChoice == Choice.ROCK) ||
                   (playerChoice == Choice.SCISSORS && computerChoice == Choice.PAPER)) {
            return 'You win! Computer chose ' + computerChoice + '.';
        } else {
            return 'You lose! Computer chose ' + computerChoice + '.';
        }
    }
    
    private static Choice generateComputerChoice() {
        Integer rand = Math.mod(Math.abs(Crypto.getRandomInteger()), 3);
        if (rand == 0) {
            return Choice.ROCK;
        } else if (rand == 1) {
            return Choice.PAPER;
        } else {
            return Choice.SCISSORS;
        }
    }
    
    public static void main(String[] args) {
        System.debug(play(Choice.ROCK));
        System.debug(play(Choice.PAPER));
        System.debug(play(Choice.SCISSORS));
    }
}
