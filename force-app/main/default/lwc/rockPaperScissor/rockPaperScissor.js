import { LightningElement } from 'lwc';
import MY_RESOURCE_FIST from '@salesforce/resourceUrl/myIcons';
import MY_RESOURCE_PAPER from '@salesforce/resourceUrl/myIcons';
import MY_RESOURCE_SCISSOR from '@salesforce/resourceUrl/myIcons';
import MY_RESOURCE_TITLE from '@salesforce/resourceUrl/myIcons';

const PAPER = 'paper';
const ROCK = 'rock';
const SCISSOR = 'scissor';
const PLAYER_WIN = 'You win !!';
const COMPUTER_WIN = 'Computer win !!';


export default class RockPaperScissor extends LightningElement {
   playerScore = 0;
   computerScore = 0;
   
   playerGuess;
   computerGuess;
   winner;

   rockImg = MY_RESOURCE_FIST+ '/icons/fist.png';
   scissorImg = MY_RESOURCE_SCISSOR + '/icons/scissors.png';
   paperImg = MY_RESOURCE_PAPER + '/icons/paper.png';
   tImg = MY_RESOURCE_TITLE + '/icons/Title.png';

   handleClick(event){
        this.playerGuess = event.target.title;
        this.generateComputerGuess();
        this.determineWinner();
    }

    generateComputerGuess(){
        const random = Math.floor(Math.random()*3);
        console.log(`random number ${random}`);
        if(random === 0){
            this.computerGuess = ROCK;
        } else if(random === 1){
            this.computerGuess = PAPER;
        } else {
            this.computerGuess = SCISSOR;
        }
    }

    determineWinner(){
        if(this.playerGuess === this.computerGuess){
            this.winner = 'draw';
            return;
        }
        if(this.playerGuess === ROCK && this.computerGuess === SCISSOR){
            this.winner = PLAYER_WIN;
            this.playerScore ++;
            return;
        }else if(this.playerGuess === ROCK && this.computerGuess === PAPER){
            this.winner = COMPUTER_WIN;
            this.computerScore ++;
            return;
        }else if(this.playerGuess === PAPER && this.computerGuess === SCISSOR){
            this.winner = COMPUTER_WIN;
            this.computerScore ++;
            return;
        }else if(this.playerGuess === PAPER && this.computerGuess === ROCK){
            this.winner = PLAYER_WIN;
            this.playerScore ++;
            return;
        }else if(this.playerGuess === SCISSOR && this.computerGuess === PAPER){
            this.winner = COMPUTER_WIN;
            this.computerScore ++;
            return;
        }else if(this.playerGuess === SCISSOR && this.computerGuess === ROCK){
            this.winner = COMPUTER_WIN;
            this.computerScore ++;
            return;
        }
    }

    refreshScore(){
        this.computerScore = 0;
        this.playerScore = 0;        
    }
}