export class Game {

    pickCardAnimation = false;
    currentCard: string | undefined = '';
    players: string[] = [];
    stack: string[] = [];
    playedCards: (string | undefined)[] = [];
    currentPlayer: number = 0;

    constructor() {
        for(let i=1; i<14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }
        this.shuffleStack();
    }

    shuffleStack(): void {
        for (let i = this.stack.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]]; 
        }
    }

    public toJson() {
        return {
            players: this.players,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard,
        }
    }
}