import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogComponent } from '../dialog/dialog.component';
import { GameInfoComponent } from "../game-info/game-info.component";



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule,
    MatIconModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, DialogComponent, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  
  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game: Game;
  

  constructor(private dialog: MatDialog) {
    this.game = new Game;
    this.newGame();
  }

  takeCard() {
    if(!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop(); // nimmt den letzten Wert aus dem Array und entfernt ihn
      this.pickCardAnimation = true;
    }
    
    setTimeout(() => {
      this.pickCardAnimation = false;
      this.game.playedCards.push(this.currentCard);
      
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      
        
    }, 1000)


  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((name:string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      };
    });
  }
}


